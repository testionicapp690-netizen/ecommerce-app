#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

log() { echo "[auto-push] $*"; }

if ! command -v git >/dev/null 2>&1; then
  echo "git is required" >&2
  exit 1
fi

if [[ ! -d .git ]]; then
  echo "Not a git repository" >&2
  exit 1
fi

CHANGED="$(git status --porcelain)"
if [[ -z "$CHANGED" ]]; then
  log "No changes detected."
  exit 0
fi

# Safety excludes
EXCLUDES=(".env" "node_modules" "*.pem")
for pattern in "${EXCLUDES[@]}"; do
  git restore --staged "$pattern" >/dev/null 2>&1 || true
done

git add -A

if git diff --cached --quiet; then
  log "No staged changes after filters."
  exit 0
fi

STAMP="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
MESSAGE="chore(auto): sync changes at ${STAMP}"

if [[ $# -gt 0 ]]; then
  MESSAGE="$*"
fi

git commit -m "$MESSAGE" || {
  log "Commit failed"
  exit 1
}

git push || {
  log "Push failed (check remote and authentication)"
  exit 1
}

log "Changes pushed successfully."
