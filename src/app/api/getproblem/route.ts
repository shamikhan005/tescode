import { NextRequest, NextResponse } from "next/server";
import mongoose from 'mongoose';
import { Problem } from "@/models/problemModel";
import { connect } from '@/dbconfig/dbconfig';

connect();

export async function GET(req: NextRequest) {
  try {
    const problems = await Problem.find({});
    return NextResponse.json(problems, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'error fetching problems' }, { status: 500});
  }
}