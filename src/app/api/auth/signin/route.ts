import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/utils/constant";
import httpClient from "@/utils/httpClient";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  // "use server";
  try {
    const body = await request.json();
    const response = await httpClient.post(`/auth/login`, body);

    const { access_token, refresh_token } = response.data.result;
    const cookieStore = cookies();
    cookieStore.set(ACCESS_TOKEN_KEY, access_token);
    cookieStore.set(REFRESH_TOKEN_KEY, refresh_token);

    return NextResponse.json(response.data);
  } catch (error: any) {
    
    return NextResponse.json({ message: error.message });
  }
}
