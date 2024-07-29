import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbconfig/dbconfig';
import { addProblem } from '@/models/problemModel';

connect();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newProblem = await addProblem(body);
    return NextResponse.json(newProblem, { status: 201 });
  } catch (error: any) {
    console.error('Error adding problem:', error);
    return NextResponse.json({ error: 'failed to add problem', details: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'method not allowed' }, { status: 405 });
}
