//@ts-noCheck

import { createReducer, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isAuthenticated: boolean;
  loading: boolean;
  user?: any; // Adjust type accordingly (e.g., `user?: UserType`)
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
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
      }
    )
    .addCase("ClearError", (state) => {
      state.loading = false;
      state.error = null;
    });
});
