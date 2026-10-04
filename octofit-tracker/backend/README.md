# Octofit Tracker backend

Express + TypeScript API backed by MongoDB (`octofit_db`) through Mongoose.

## Scripts

```bash
npm run dev --prefix octofit-tracker/backend     # watch mode
npm run build --prefix octofit-tracker/backend   # compile to dist/
npm run seed --prefix octofit-tracker/backend    # populate octofit_db
```

## API hosting

The API listens on port `8000`. When `CODESPACE_NAME` is set, the base URL is
`https://$CODESPACE_NAME-8000.app.github.dev`; otherwise it is
`http://localhost:8000`.

## Endpoints

- `/api/users/`
- `/api/teams/`
- `/api/activities/`
- `/api/leaderboard/`
- `/api/workouts/`

Verify with curl, for example:

```bash
curl http://localhost:8000/api/users/
curl http://localhost:8000/api/activities/
```
