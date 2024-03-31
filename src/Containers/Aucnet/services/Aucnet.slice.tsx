import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { categoryType } from "./Aucnet.type";
import aucnetAPI from "./Aucnet.api";

const initialState = {
  listCategory: null as categoryType[] | null,
};

export const aucnetSlice = createSlice({
  name: "aucnet",
  initialState,
  reducers: {
    reset: () => initialState,

    setListCategoryAucnet: (
      state,
      action: PayloadAction<categoryType[] | null>
    ) => {
      state.listCategory = action.payload;
    },
  },
});

export const aucnetReducer = aucnetSlice.reducer;
export const aucnetActions = aucnetSlice.actions;

export const getListCategoryAucnet =
  (onSuccess: (e: categoryType[]) => void) => async () => {
    try {
      const res: any = await aucnetAPI.getALlCaregory();

      if (res.data) onSuccess(res.data.records);
      // else onError();
    } catch {
      // onError();
    }
  };
