import Api from "../../../Providers/Api";
import { invoiceInfoType } from "./InvoiceInfo.type";

export default class invoiceInfoAPI {
  static getInvoiceInfoAPI = async () => {
    return await Api.get<invoiceInfoType>(`/v1.0/api`);
  };
}
