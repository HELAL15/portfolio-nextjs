import { NextResponse } from 'next/server';
import { projects } from '@/data';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  return NextResponse.json(
    { message: 'success', data: projects },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    return title.trim() !== ''
      ? NextResponse.json({ message: 'success', data: title }, { status: 200 })
      : NextResponse.json({ message: 'title is required' }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Failed to parse JSON', error: error.message },
      { status: 400 }
    );
  }
}
