import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbconfig/dbconfig';
import { UserProblemInteraction } from '@/models/userProblemInteractionModel';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connect();
    
    const interactions = await UserProblemInteraction.find({ userId });
    return NextResponse.json(interactions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}