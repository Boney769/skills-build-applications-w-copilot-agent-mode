import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    calories: { type: Number, default: 0 },
    userId: { type: String },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

const Activity = model('Activity', activitySchema);

export default Activity;
