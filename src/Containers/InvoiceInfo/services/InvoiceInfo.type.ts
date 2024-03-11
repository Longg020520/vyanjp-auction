import { ReactNode } from "react";

export interface invoiceInfoState {
  loading: boolean;
  errorMess: ReactNode;
  isErrorModalOpen: boolean;

  invoiceInfo: invoiceInfoType | null;
}

export interface invoiceInfoType {
  _id: string;
}
