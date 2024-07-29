import { connect } from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getDataFromToken } from '@/helpers/getDataFromToken'

connect()

export async function POST(request: NextRequest) {
  const userId = await getDataFromToken(request)
  const user = await User.findOne({_id: userId}).select("-password")

  return NextResponse.json({
    message: 'user found',
    data: user
  })
}