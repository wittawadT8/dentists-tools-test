import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/utils/constant";
import httpClient from "@/utils/httpClient";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

export async function GET(response: NextRequest) {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("access_token")?.value;

    console.log("-- session --", accessToken);

    if (accessToken) {
      const response = await httpClient.get(`/users?id=75`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      return NextResponse.json(response.data);
    } else {
      return NextResponse.json(response);
    }
    
  } catch (error: any) {
    console.log("----- session ---- err -------", error);

    return NextResponse.json({ message: error.message });
  }
}