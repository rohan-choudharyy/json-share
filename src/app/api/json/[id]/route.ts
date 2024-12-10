import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: {id: string }}) {
  try {
    const json = await prisma.jsonData.findUnique({
      where: {
        id: params.id
      }
    });

    if (!json) {
      return NextResponse.json(
        { error: 'JSON not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(json);
  } catch (error) {
    console.error('Error fetching JSON:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}