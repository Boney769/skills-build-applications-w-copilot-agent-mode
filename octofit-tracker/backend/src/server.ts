import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database.js';
import Activity from './models/Activity.js';
import Leaderboard from './models/Leaderboard.js';
import Team from './models/Team.js';
import User from './models/User.js';
import Workout from './models/Workout.js';

const app = express();
const port = Number(process.env.PORT) || 8000;
const baseUrl = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(cors());
app.use(express.json());

connectDatabase().catch((error) => {
  console.error('Error connecting to octofit_db:', error);
  process.exit(1);
});

app.get('/api/users/', async (_req, res) => res.json(await User.find()));
app.get('/api/teams/', async (_req, res) => res.json(await Team.find()));
app.get('/api/activities/', async (_req, res) => res.json(await Activity.find()));
app.get('/api/leaderboard/', async (_req, res) => res.json(await Leaderboard.find()));
app.get('/api/workouts/', async (_req, res) => res.json(await Workout.find()));

if (process.argv[1]?.endsWith('server.js') || process.argv[1]?.endsWith('server.ts')) {
  app.listen(port, () => {
    console.log(`API listening at ${baseUrl}`);
  });
}

export { app, baseUrl };
