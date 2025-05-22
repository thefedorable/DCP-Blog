// For Pages Router: pages/api/posts/index.js
import connectDB from '../../../lib/dbConnect';
import Post from '../../../lib/models/Post';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const posts = await Post.find({}).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const post = await Post.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}