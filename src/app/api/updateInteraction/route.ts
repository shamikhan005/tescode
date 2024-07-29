import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbconfig/dbconfig';
import { UserProblemInteraction } from '@/models/userProblemInteractionModel';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { Problem } from '@/models/problemModel';

export async function POST(request: NextRequest) {
  await connect();

  const userId = getDataFromToken(request);
  const { problemId, action } = await request.json();

  if (!userId || !problemId || !action) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  try {
    const update: any = {};

    const currentInteraction = await UserProblemInteraction.findOne({ userId, problemId });
    
    if (action === 'solved') update.solved = !currentInteraction?.solved;
    if (action === 'liked') update.liked = !currentInteraction?.liked;
    if (action === 'disliked') update.disliked = !currentInteraction?.disliked;
    if (action === 'starred') update.starred = !currentInteraction?.starred;

    const interaction = await UserProblemInteraction.findOneAndUpdate(
      { userId, problemId }, 
      { $set: update },
      { new: true, upsert: true }
    );

    if (action === 'liked' || action === 'disliked') {
      const updateField = action === 'liked' ? 'likes' : 'dislikes';
      const updateValue = update[action] ? 1 : -1;
      await Problem.findOneAndUpdate(
        { id: problemId },
        { $inc: { [updateField]: updateValue } },
        { new: true }
      );
    }


    return NextResponse.json(interaction, { status: 200 });
  } catch (error) {
    console.error('Error updating user problem interaction:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
