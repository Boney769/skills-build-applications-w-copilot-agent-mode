import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    members: [{ type: String }],
  },
  { timestamps: true },
);

const Team = model('Team', teamSchema);

export default Team;
