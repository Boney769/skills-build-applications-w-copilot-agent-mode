import { Schema, model } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    userId: { type: String },
    teamId: { type: String },
    rank: { type: Number, default: 1 },
  },
  { timestamps: true },
);

const Leaderboard = model('Leaderboard', leaderboardSchema);

export default Leaderboard;
