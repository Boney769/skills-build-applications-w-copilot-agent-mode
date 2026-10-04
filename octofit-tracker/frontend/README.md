# Octofit Tracker frontend

The React presentation tier uses Vite, React Router, and Bootstrap. Start the
development server with:

```bash
npm run dev --prefix octofit-tracker/frontend
```

The frontend uses `http://localhost:8000` as its API base by default. To point
it at the Codespaces API, define `VITE_CODESPACE_NAME` in
`octofit-tracker/frontend/.env.local`, for example:

```dotenv
VITE_CODESPACE_NAME=my-codespace
```

Vite reads this setting when the development server starts. Restart only the
frontend dev server after changing the value; the Express API does not need to
be restarted.
