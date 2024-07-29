import mongoose from 'mongoose';
import { DBProblem } from '@/utils/types/problem';

const problemSchema = new mongoose.Schema<DBProblem>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  order: { type: Number, required: true },
});

/* Check if the model already exists to avoid OverwriteModelError */
export const Problem = mongoose.models.Problem || mongoose.model<DBProblem>('Problem', problemSchema);

export async function addProblem(problem: DBProblem): Promise<DBProblem> {
  const newProblem = new Problem(problem);
  return await newProblem.save();
}
