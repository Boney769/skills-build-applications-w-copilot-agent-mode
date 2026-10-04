import mongoose from 'mongoose';
import Activity from '../models/Activity.js';
import Leaderboard from '../models/Leaderboard.js';
import Team from '../models/Team.js';
import User from '../models/User.js';
import Workout from '../models/Workout.js';

// Seed the octofit_db database with test data
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

async function seedDatabase() {
  await mongoose.connect(connectionString);

  console.log('Connected to octofit_db');

  await User.deleteMany({});
  await Team.deleteMany({});
  await Activity.deleteMany({});
  await Leaderboard.deleteMany({});
  await Workout.deleteMany({});

  await User.insertMany([
    { name: 'Mona', email: 'mona@example.com', role: 'captain', level: 'advanced' },
    { name: 'Leo', email: 'leo@example.com', role: 'member', level: 'intermediate' },
  ]);

  await Team.insertMany([
    { name: 'Octocats', description: 'High energy cardio crew', members: ['Mona', 'Leo'] },
    { name: 'Trailblazers', description: 'Trail running challenge team', members: ['Ava'] },
  ]);

  await Activity.insertMany([
    { type: 'Run', duration: 35, calories: 320, userId: 'Mona' },
    { type: 'Strength', duration: 45, calories: 410, userId: 'Leo' },
  ]);

  await Leaderboard.insertMany([
    { name: 'Weekly Challenge', score: 980, userId: 'Mona', rank: 1 },
    { name: 'Weekly Challenge', score: 910, userId: 'Leo', rank: 2 },
  ]);

  await Workout.insertMany([
    { name: 'Intervals', focus: 'cardio', duration: 30, difficulty: 'intermediate' },
    { name: 'Core Blast', focus: 'core', duration: 20, difficulty: 'beginner' },
  ]);

  console.log('Database seeding complete');
  await mongoose.disconnect();
}

seedDatabase().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
