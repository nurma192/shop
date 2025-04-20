import { LanguageCode } from "../../types/language";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "../../i18n";

interface AppState {
  language: LanguageCode;
}

const initialState: AppState = {
  language: LanguageCode.RU,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LanguageCode>) {
      state.language = action.payload;

      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLanguage } = appSlice.actions;
export default appSlice.reducer;
