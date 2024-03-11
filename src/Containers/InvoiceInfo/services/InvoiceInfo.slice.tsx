import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { invoiceInfoState, invoiceInfoType } from "./InvoiceInfo.type";

const initialState: invoiceInfoState = {
  loading: false,
  errorMess: "",
  isErrorModalOpen: false,

  invoiceInfo: null,
};

export const invoiceInfoSlice = createSlice({
  name: "invoiceInfo",
  initialState,
  reducers: {
    reset: () => initialState,

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setErrorMess: (state, action: PayloadAction<ReactNode>) => {
      state.errorMess = action.payload;
      state.isErrorModalOpen = true;
    },

    setErrorModalClose: (state) => {
      state.isErrorModalOpen = false;
    },

    setInvoiceInfo: (state, action: PayloadAction<invoiceInfoType | null>) => {
      state.invoiceInfo = action.payload;
    },
  },
});

export const invoiceInfoReducer = invoiceInfoSlice.reducer;
export const invoiceInfoActions = invoiceInfoSlice.actions;
