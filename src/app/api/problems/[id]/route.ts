import { NextRequest, NextResponse } from "next/server";
import { connect } from '@/dbconfig/dbconfig';
import mongoose from 'mongoose';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log("Received request for problem ID:", id);

  try {
    await connect();
    console.log("Connected to database");

    const problem = await mongoose.connection.db
      .collection('problems')
      .findOne({ id: id });  // Change this line

    console.log("Problem found:", problem);

    if (!problem) {
      return NextResponse.json({ error: 'Problem not found' }, { status: 404 });
    }

    return NextResponse.json(problem);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}