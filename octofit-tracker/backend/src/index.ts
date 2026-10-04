import { app, baseUrl } from './server.js';

const port = Number(process.env.PORT) || 8000;

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`API listening at ${baseUrl}`);
});
