import { getDataFromToken } from "@/helpers/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/helpers/prisma";

export async function GETPrisma(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, username: true, email: true },
    });
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
