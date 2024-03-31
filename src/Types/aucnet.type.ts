export interface ProductItemType {
  photoUrl: string;
  uketsukeBng: string;
  seriBng: number;
  kekkaKbn: number;
  kekka: string;
  maker: string;
  brandType: string;
  shohin: string;
  genre: string;
  keijo: string;
  hyoka: string;
  hyokaGaiso: string;
  hyokaNaiso: string;
  handling: string;
  jishaFlg: boolean;
  startKng: number;
  genzaiKng: number;
  kaisaiKbn: string;
  zoomPhotoUrl: string;
  albumPhotoUrl: string;
}

export interface ProductDetailType {
  kaisaiKaisu: string;
  kaisaiYmd: string;
  uketsukeBng: string;
  seriBng: number;
  kekkaKbn: number;
  genreCd: number;
  genre: string;
  maker: string;
  brandType: string;
  keijo: string;
  shohin: string;
  hyoka: string;
  hyokaGaiso: string;
  hyokaNaiso: string;
  handling: string;
  jishaFlg: boolean;
  startKng: number;
  genzaiKng: number;
  nyusatsuSu: number;
  topFlg: boolean;
  nyusatsuFlg: boolean;
  kaisaiKbn: string;
  photoUrlList: string[];
  adminPhotoUrlList: string[];
  shuppinBiko2List: string[];
  bikoList: string[];
  kaijoKbn: number;
  zoomPhotoUrlList: string[];
  adminZoomPhotoUrlList: string[];
  seriTypeKbn: number;
  corner: string;
  seriEndHm: string;
  nesageFlg: string;
  [key: string]: any; // This is the index signature
}
