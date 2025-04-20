import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShopState {
  selectedShopId: string | null;
}

const initialState: ShopState = {
  selectedShopId: "store1",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedShop(state, action: PayloadAction<string | null>) {
      state.selectedShopId = action.payload;
    },
  },
});

export const { setSelectedShop } = appSlice.actions;
export default appSlice.reducer;
