import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    role: { type: String, default: 'member' },
    level: { type: String, default: 'beginner' },
  },
  { timestamps: true },
);

const User = model('User', userSchema);

export default User;
