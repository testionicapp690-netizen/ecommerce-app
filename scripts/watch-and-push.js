#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ignored = [/node_modules/, /\.git/, /\.env$/];
let timeout;

function run(cmd) {
  execSync(cmd, { cwd: root, stdio: 'inherit' });
}

function shouldIgnore(file) {
  return ignored.some((re) => re.test(file));
}

function commitAndPush() {
  try {
    run('git add -A');
    const diff = execSync('git diff --cached --name-only', { cwd: root }).toString().trim();
    if (!diff) return;
    const msg = `chore(watch): auto-save sync ${new Date().toISOString()}`;
    run(`git commit -m "${msg}"`);
    run('git push');
  } catch (err) {
    console.error('[watch-and-push] Error:', err.message);
  }
}

fs.watch(root, { recursive: true }, (_event, filename) => {
  if (!filename || shouldIgnore(filename)) return;
  clearTimeout(timeout);
  timeout = setTimeout(commitAndPush, 1500);
});

console.log('Watching for changes...');
