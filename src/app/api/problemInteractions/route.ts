import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbconfig/dbconfig';
import { UserProblemInteraction } from "@/models/userProblemInteractionModel";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(request: NextRequest) {
  await connect();

  let userId: string;
  try {
    userId = getDataFromToken(request);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid or missing token' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const problemId = searchParams.get('problemId');

  if (!problemId) {
    return NextResponse.json({ error: 'Problem ID is required' }, { status: 400 });
  }

  try {
    const interaction = await UserProblemInteraction.findOne({ userId, problemId });
    return NextResponse.json(interaction || {}, { status: 200 });
  } catch (error) {
    console.error('Error fetching user problem interaction:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

