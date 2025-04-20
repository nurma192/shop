import UserProfile, { userMock } from "../../types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  profile: UserProfile | null;
}

const initialState: UserState = {
  profile: userMock,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile(state, action: PayloadAction<UserProfile>) {
      state.profile = action.payload;
    },
    clearUserProfile(state) {
      state.profile = null;
    },
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;
export default userSlice.reducer;
