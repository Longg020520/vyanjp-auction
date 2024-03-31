export interface categoryType {
  genreCd: number;
  genre: string;
  genreName: string;
  maker: {
    makerCd: number;
    maker: string;
    count: number;
    countTotal: number;
  }[];
  brandType: {
    brandTypeCd: number;
    brandType: string;
    count: number;
    countTotal: number;
  }[];
  shape: {
    keijoCd: number;
    keijo: string;
    count: number;
    countTotal: number;
  }[];
}
