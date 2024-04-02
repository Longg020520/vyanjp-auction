import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { categoryStarBuyerType } from './Starbuyer.type';
import starBuyerAPI from './Starbuyer.api';

const initialState = {
  listCategory: null as categoryStarBuyerType[] | null,
};

export const starBuyerSlice = createSlice({
  name: 'starBuyer',
  initialState,
  reducers: {
    reset: () => initialState,

    setListCategoryAucnet: (
      state,
      action: PayloadAction<categoryStarBuyerType[] | null>,
    ) => {
      state.listCategory = action.payload;
    },
  },
});

export const starBuyerReducer = starBuyerSlice.reducer;
export const starBuyerActions = starBuyerSlice.actions;

export const getListCategoryAucnet =
  (onSuccess: (e: categoryStarBuyerType[]) => void) => async () => {
    try {
      const res: any = await starBuyerAPI.getListProductStarBuyer('');

      if (res.data) onSuccess(res.data.records);
      // else onError();
    } catch {
      // onError();
    }
  };
