import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/utils/constant";
import httpClient from "@/utils/httpClient";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  "use server";
  try {
    const cookieStore = cookies()
    const access_token = cookieStore.get('access_token')

    const response = await httpClient.get(`/auth/logout`, {
      headers:{
        authorization: `Bearer ${access_token?.value}` 
      }
    });
  
    cookieStore.delete(ACCESS_TOKEN_KEY);
    cookieStore.delete(REFRESH_TOKEN_KEY);

    console.log("--------- response -------"); 

    return NextResponse.json(response);
  } catch (error: any) {

    console.log("--------- err -------"); 
    
    return NextResponse.json({ message: error.message });
  }
}