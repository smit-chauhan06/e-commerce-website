import { createSlice } from "@reduxjs/toolkit";

interface authState {
  accessToken: string;
}

const initialState: authState = {
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
