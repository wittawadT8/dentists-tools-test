import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/utils/constant";
import httpClient from "@/utils/httpClient";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    console.log("---accessToken--", accessToken);

    const response = await httpClient.get(`/auth/logout`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    cookieStore.delete(ACCESS_TOKEN_KEY);
    cookieStore.delete(REFRESH_TOKEN_KEY);

    // console.log("-------response-----", response);

    return NextResponse.json([]);

  } catch (error: any) {
    // console.log("--------- error -------", error);

    return NextResponse.json({ message: error.message });
  }
}
