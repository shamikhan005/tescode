import mongoose from "mongoose";

const userProblemInteractionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  problemId: { type: String, required: true },
  solved: { type: Boolean, default: false },
  liked: { type: Boolean, default: false },
  disliked: { type: Boolean, default: false },
  starred: { type: Boolean, default: false },
}, { timestamps: true });

export const UserProblemInteraction = mongoose.models.UserProblemInteraction || mongoose.model('UserProblemInteraction', userProblemInteractionSchema);
