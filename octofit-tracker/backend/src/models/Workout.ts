import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: { type: String, required: true },
    focus: { type: String, default: 'general fitness' },
    duration: { type: Number, default: 30 },
    difficulty: { type: String, default: 'moderate' },
  },
  { timestamps: true },
);

const Workout = model('Workout', workoutSchema);

export default Workout;
