import { errorCodeList } from "../Config/error.config";
import { cannotBeInName, specialChars } from "../Config/global.config";
import { invoiceInfoActions } from "../Containers/InvoiceInfo/services/InvoiceInfo.slice";

export default class Util {
  static showCodeMessWithModal = (res: any, dispatch: any) => {
    dispatch({ type: "LOGOUT" });
    const errorCodeArray = Object.keys(errorCodeList);
    const errorMessArray = Object.values(errorCodeList);
    const found = errorCodeArray.find((a) => a === res.errorCode.toString());
    if (found)
      dispatch(
        invoiceInfoActions.setErrorMess(
          errorMessArray[errorCodeArray.indexOf(found)]
        )
      );
    else dispatch(invoiceInfoActions.setErrorMess(res.errorDesc));
  };

  static checkValidatedEmail = (email: string) => {
    let haveOneAtSymbol = false;
    let haveTwoMoreDomains = false;
    let checkMainEmail = false;
    let checkDomains = false;
    let noSpace = false;

    if (email.includes("@")) {
      if (email.slice(email.indexOf("@") + 1).includes("@"))
        haveOneAtSymbol = false;
      else haveOneAtSymbol = true;
    } else haveOneAtSymbol = false;

    if (email.includes("@")) {
      if (email.slice(email.indexOf("@") + 1).includes("."))
        haveTwoMoreDomains = true;
      else haveTwoMoreDomains = false;
    }

    if (email.includes("@")) {
      const mainEmail = email.slice(0, email.indexOf("@"));
      if (mainEmail.split("").some((a) => cannotBeInName.includes(a)))
        checkMainEmail = false;
      else checkMainEmail = true;
    }

    if (email.includes("@")) {
      const domains = email.slice(email.indexOf("@") + 1).split(".");

      if (
        domains.some((a) => a.split("").some((b) => specialChars.includes(b)))
      )
        checkDomains = false;
      else if (domains[domains.length - 1].length < 2) checkDomains = false;
      else checkDomains = true;
    }

    if (email.split("").some((a) => a === " ")) noSpace = false;
    else noSpace = true;

    return (
      haveOneAtSymbol &&
      haveTwoMoreDomains &&
      checkMainEmail &&
      checkDomains &&
      noSpace
    );
  };

  static formatNumberWithFixedAndComma(money: any, fixed: number) {
    if (typeof money != "number") {
      return "0";
    }
    const fixedMoney = money.toString();
    const beforeDot =
      fixedMoney.indexOf(".") !== -1
        ? fixedMoney.slice(0, fixedMoney.indexOf("."))
        : fixedMoney;
    let afterDot =
      fixedMoney.indexOf(".") !== -1
        ? fixedMoney.slice(fixedMoney.indexOf(".") + 1)
        : "";

    if (afterDot.length < fixed)
      while (afterDot.length < fixed) afterDot += "0";
    else if (afterDot.length > fixed) {
      if (Number(afterDot[fixed]) >= 5)
        afterDot = (Number(afterDot.slice(0, fixed)) + 1).toString();
      else afterDot = afterDot.slice(0, fixed);
    }

    const finalBeforeDot = `${beforeDot.replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1,"
    )}`;

    if (fixed === 0) return finalBeforeDot;
    return `${finalBeforeDot}.${afterDot}`;
  }

  static convertTrans(data: string | null | undefined, trans: object) {
    if (!data) return "";
    const keys = Object.keys(trans).map((a) => a.toString());
    const values = Object.values(trans).map((a) => a.toString());
    const index = keys.indexOf(data);
    if (index !== -1) return values[index];
    return "";
  }

  static convertTransBackVer(data: string | null | undefined, trans: object) {
    if (!data) return "";
    const keys = Object.keys(trans).map((a) => a.toString());
    const values = Object.values(trans).map((a) => a.toString());
    const index = values.indexOf(data);
    if (index !== -1) return keys[index];
    return "";
  }

  static convertToUnaccentedVietnamese(text: string) {
    const charMap = [
      {
        value: "ùúủũụưừứửữự",
        trans: "u",
      },
      {
        value: "èéẻẽẹêềếểễệ",
        trans: "e",
      },
      {
        value: "òóỏõọôồốổỗộơờớởỡợ",
        trans: "o",
      },
      {
        value: "àáảãạâầấẩẫậăằắẳẵặ",
        trans: "a",
      },
      {
        value: "ìíỉĩị",
        trans: "i",
      },
      {
        value: "ỳýỷỹỵ",
        trans: "y",
      },
      {
        value: "dđ",
        trans: "d",
      },
    ];

    const result = [];
    if (text)
      for (let i = 0; i < text.length; i++) {
        const charRaw = text[i];
        const char = charRaw.toLocaleLowerCase();
        const found = charMap.find((a) => a.value.includes(char));
        if (found)
          switch (true) {
            case char === charRaw:
              result.push(found.trans);
              break;

            default:
              result.push(found.trans.toLocaleUpperCase());
          }
        else result.push(charRaw);
      }

    return result.join("");
  }

  static getUniqueData(data: any[], key: string) {
    return data.filter(
      (obj, index, self) => index === self.findIndex((o) => o[key] === obj[key])
    );
  }

  static getByQuery(query: string[]) {
    const params = new URLSearchParams(window.location.search);
    let ans: any = {};
    query.forEach((a) => {
      const found = params.get(a);
      ans[a] = found;
    });
    return ans;
  }
}
