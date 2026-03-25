# Production-Ready E-commerce Platform (Mobile + Backend + Admin)

Monorepo containing:
- **Mobile app**: React Native (Expo + TypeScript)
- **Backend**: Node.js + Express + MongoDB + JWT
- **Admin panel**: React + Vite
- **DevOps automation**: Auto add/commit/push via script, hook, and watcher

## 1) Project Structure

```text
.
├── admin-panel/
├── backend/
├── mobile-app/
├── docs/screenshots/
├── githooks/
├── postman/
├── scripts/
├── .gitignore
├── package.json
└── README.md
```

## 2) Backend Setup

- Copy `backend/.env.example` to `backend/.env`
- Start MongoDB locally or use cloud MongoDB URI
- Install and run:

```bash
npm install
npm --workspace backend run dev
```

### Backend Features
- JWT auth + bcrypt password hashing
- Product CRUD with pagination/filtering
- Orders and user management
- Centralized error middleware
- Cloudinary upload service helper

## 3) Mobile App Setup (Expo)

```bash
npm install
npm --workspace mobile-app run start
```

### Mobile Highlights
- Expo + TypeScript
- Redux Toolkit store
- API service layer with Axios
- Splash screen configured
- Cart flow scaffolded
- Dark/light theme wiring

## 4) Admin Panel Setup

```bash
npm install
npm --workspace admin-panel run dev
```

### Admin Features
- Analytics dashboard scaffold
- Product, order, user management views
- Ready for API integration

## 5) GitHub Setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Create GitHub repo (CLI)
```bash
gh repo create ecommerce-superapp --private --source=. --remote=origin --push
```

## 6) Branch Strategy

- `main`: production-ready stable branch
- `dev`: integration branch for features
- feature branches: `feature/<module-name>`

Example:
```bash
git checkout -b dev
git checkout -b feature/mobile-home-redesign
```

## 7) Commit Message Examples

- `feat(mobile): add animated product card`
- `feat(api): add order pagination`
- `fix(admin): correct users table sorting`
- `chore(devops): add auto-push hook`

## 8) Auto Push / DevOps Automation

### A) Cross-platform Bash script

```bash
./scripts/auto-push.sh
./scripts/auto-push.sh "feat: custom commit message"
```

### B) Git hook (push after commit)

```bash
git config core.hooksPath githooks
```

Now every commit auto-triggers a `git push` from `githooks/post-commit`.

### C) Optional Node watcher (file save detection)

```bash
node scripts/watch-and-push.js
```

Watcher detects file changes, runs add+commit+push with dynamic message.

## 9) Security Notes

- `.env` and `node_modules` are excluded in `.gitignore`
- Never store secrets in source
- Use per-environment variables for API, DB, Cloudinary, JWT

## 10) Deployment

### Backend (Render/Railway)
- Set root to `backend/`
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables from `.env.example`

### Mobile (Expo)
- Configure EAS build profiles
- Set `EXPO_PUBLIC_API_URL`
- Build APK with `eas build -p android`

### Admin (Vercel/Netlify)
- Root dir: `admin-panel/`
- Build: `npm run build`
- Output: `dist`

## 11) Testing

```bash
npm --workspace backend test
npm --workspace mobile-app test
```

Postman collection at `postman/ecommerce.postman_collection.json`

## 12) Screenshot Placeholders

- `docs/screenshots/mobile-placeholder.md`
- `docs/screenshots/admin-placeholder.md`

Replace placeholders with real PNG screenshots before production release.
