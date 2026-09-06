import { NextResponse } from 'next/server'

export async function GET() {
  // Mock property data - in production, this would fetch from a database
  const properties = [
    {
      id: 1,
      title: 'Oceanfront Villa',
      location: 'Malibu, California',
      price: '$12,500,000',
      type: 'Villa',
      status: 'For Sale',
    },
    {
      id: 2,
      title: 'Penthouse Suite',
      location: 'Manhattan, New York',
      price: '$8,750,000',
      type: 'Penthouse',
      status: 'For Sale',
    },
  ]
  
  return NextResponse.json(
    { properties },
    { status: 200 }
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // In production, this would save to a database
    return NextResponse.json(
      { message: 'Property created successfully!', data: body },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating property' },
      { status: 500 }
    )
  }
}
