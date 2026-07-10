#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
APP_NAME="nrl-tipbot"
TIMESTAMP="$(date +"%Y%m%d-%H%M%S")"
OUTPUT_DIR="${NRL_TIPBOT_BACKUP_DIR:-${REPO_ROOT}/backups}"
ARCHIVE_NAME="${APP_NAME}-recovery-${TIMESTAMP}.tar.gz"
ARCHIVE_PATH="${OUTPUT_DIR}/${ARCHIVE_NAME}"
WORK_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "${WORK_DIR}"
}
trap cleanup EXIT

mkdir -p "${OUTPUT_DIR}"
mkdir -p "${WORK_DIR}/${APP_NAME}/repo-snapshot"
mkdir -p "${WORK_DIR}/${APP_NAME}/metadata"

copy_if_exists() {
  local item="$1"
  if [ -e "${REPO_ROOT}/${item}" ]; then
    mkdir -p "$(dirname "${WORK_DIR}/${APP_NAME}/repo-snapshot/${item}")"
    cp -R "${REPO_ROOT}/${item}" "${WORK_DIR}/${APP_NAME}/repo-snapshot/${item}"
  fi
}

for item in \
  ".env.example" \
  ".gitignore" \
  "README.md" \
  "HANDOVER.md" \
  "DISASTER_RECOVERY.md" \
  "package.json" \
  "generate.js" \
  "index.html" \
  "codex-smoke-test.md" \
  "data" \
  "dist" \
  "scripts"; do
  copy_if_exists "${item}"
done

{
  echo "NRL TipBot recovery backup"
  echo "Created: ${TIMESTAMP}"
  echo "Repo root: ${REPO_ROOT}"
  echo "Archive: ${ARCHIVE_PATH}"
  echo
  echo "This archive intentionally excludes .git, node_modules, real env files, prior backups, compressed archives, and log contents by default."
  echo "Treat as sensitive operational project state."
} > "${WORK_DIR}/${APP_NAME}/metadata/README.txt"

(
  cd "${REPO_ROOT}"
  git status --short --branch > "${WORK_DIR}/${APP_NAME}/metadata/git-status.txt" 2>&1 || true
  git log --oneline -10 > "${WORK_DIR}/${APP_NAME}/metadata/git-log.txt" 2>&1 || true
  git remote -v > "${WORK_DIR}/${APP_NAME}/metadata/git-remotes.txt" 2>&1 || true
  git rev-parse HEAD > "${WORK_DIR}/${APP_NAME}/metadata/git-head.txt" 2>&1 || true
  git ls-files > "${WORK_DIR}/${APP_NAME}/metadata/git-tracked-files.txt" 2>&1 || true
  find . -maxdepth 3 -type f \( -name ".env" -o -name ".env.*" \) ! -name ".env.example" -print > "${WORK_DIR}/${APP_NAME}/metadata/env-files-detected.txt" 2>&1 || true
  find . -maxdepth 4 -type f \( -name "*.log" -o -path "./logs/*" -o -path "./log/*" \) -print > "${WORK_DIR}/${APP_NAME}/metadata/log-paths-detected.txt" 2>&1 || true
)

{
  echo "node: $(node --version 2>/dev/null || echo 'not found')"
  echo "npm: $(npm --version 2>/dev/null || echo 'not found')"
  echo "git: $(git --version 2>/dev/null || echo 'not found')"
  echo "gh: $(gh --version 2>/dev/null | head -n 1 || echo 'not found')"
  echo "python3: $(python3 --version 2>/dev/null || echo 'not found')"
} > "${WORK_DIR}/${APP_NAME}/metadata/tool-versions.txt"

{
  echo "No launchd, cron, or systemd jobs are required by this static app."
  echo "If future automation is added, record its exact plist/unit/crontab path here and in DISASTER_RECOVERY.md."
  echo
  echo "User LaunchAgents mentioning nrl-tipbot, if any:"
  find "${HOME}/Library/LaunchAgents" -maxdepth 1 -type f -iname "*nrl*tipbot*.plist" -print 2>/dev/null || true
} > "${WORK_DIR}/${APP_NAME}/metadata/scheduled-jobs.txt"

(
  cd "${WORK_DIR}"
  tar -czf "${ARCHIVE_PATH}" "${APP_NAME}"
)

echo "Created backup: ${ARCHIVE_PATH}"
tar -tzf "${ARCHIVE_PATH}" | sed -n '1,80p'

