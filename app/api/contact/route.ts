import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    { message: 'API is working' },
    { status: 200 }
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // In production, this would send an email or save to database
    return NextResponse.json(
      { message: 'Message sent successfully!', data: body },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    )
  }
}
