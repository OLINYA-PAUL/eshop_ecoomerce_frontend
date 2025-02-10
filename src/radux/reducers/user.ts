//@ts-noCheck

import { createReducer, PayloadAction } from "@reduxjs/toolkit";

export interface User  {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar: {
    public_id: string;
    url: string;
  };
  addresses: any[];
  createdAt: string;
  __v: number;
};

interface InitialState {
  isAuthenticated: boolean;
  loading: boolean;
  user?: User;
  error?: string;
}

const initialState: InitialState = {
  isAuthenticated: false,
  loading: false,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LoadUserRequest", (state) => {
      state.loading = true;
    })
    .addCase(
      "LoadUserSuccess",
      (state, { payload }: PayloadAction<{ user: any }>) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = payload;
      }
    )
    .addCase(
      "LoadUserFail",
      (state, { payload }: PayloadAction<{ user: any }>) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = payload;
      }
    )
    .addCase("ClearError", (state) => {
      state.loading = false;
      state.error = null;
    });
});
