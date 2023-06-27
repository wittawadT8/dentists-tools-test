'use service'
import { UserData } from "@/models/user.model";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as serverService from "@/services/serverService";
import { RootState } from "@/store/store";
import { AxiosRequestConfig } from "axios";
import httpClient from "@/utils/httpClient";
// import Router from "next/navigation"; 
import { ROUTER } from "@/utils/constant";
import { useRouter } from "next/navigation";
interface UserState {
  username: string;
  accessToken: string;
  error?: string;
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  user?: UserData;
}

interface SingleProp {
  data: string;
}

const initialState: UserState = {
  username: "",
  accessToken: "",
  isAuthenticated: false, // login หรือยัง
  isAuthenticating: true, // กำลัง login
  user: undefined,
};

interface SignAction {
  username: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "user/signin",
  async (credential: SignAction) => {
    const response: any = await serverService.signIn(credential);

    if (response.code != 200) {
      throw new Error("login failed");
    }

    // set access token
    httpClient.interceptors.request.use((config?: AxiosRequestConfig): any => {
      if (config && config.headers) {
        config.headers[
          "Authorization"
        ] = `Bearer ${response.result.access_token}`;
      }

      return config;
    });

    return response;
  }
);

export const signOut = createAsyncThunk("user/signout", async () => {
  await serverService.signOut();
  // const router = useRouter();
  // router.push("/signin");
  window.location.href = `${process.env.BASE_URL_LOCAL}${ROUTER.SIGN_IN}`;
});

// export const getSession = createAsyncThunk("user/fetchSession", async () => {
//   const response = await serverService.getSession();

//   console.log("response", response);
  

//   // set access token
//   if (response) {
//     httpClient.interceptors.request.use((config?: AxiosRequestConfig): any => {
//       if (config && config.headers && response.user) {
//         config.headers["Authorization"] = `Bearer ${response.user?.token}`;
//       }
//       return config;
//     });
//   }
//   return response;
// });


const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUsername: (state, action: PayloadAction<SingleProp>) => {
      state.username = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.result.access_token;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.user = action.payload.user;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.accessToken = "";
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.user = undefined;
    });
    builder.addCase(signOut.fulfilled, (state) => {
      state.accessToken = "";
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.user = undefined;
    });
    // builder.addCase(getSession.fulfilled, (state, action) => {
    //   state.isAuthenticating = false;
    //   if (action.payload && action.payload.user && action.payload.user.token) {
    //     state.accessToken = action.payload.user.token;
    //     state.user = action.payload.user;
    //     state.isAuthenticated = true;
    //   }
    // });
  },
});

export const { resetUsername } = userSlice.actions;

// export common user selector
export const userSelector = (store: RootState) => store.user;
export const isAuthenticatedSelector = (store: RootState): boolean =>
  store.user.isAuthenticated;
export const isAuthenticatingSelector = (store: RootState): boolean =>
  store.user.isAuthenticating;

// export reducer
export default userSlice.reducer;
