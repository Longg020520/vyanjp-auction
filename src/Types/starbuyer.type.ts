export interface ProductItemStarBuyerType {
  productName: string;
  productImage: string;
  productPrice: string;
  productNumber: string;
  productDate: string;
  productRank: string;
  category: string;
}

export interface ProductDetailStarBuyerType {
  productName: string;
  productImage: string;
  productPrice: string;
  productNumber: string;
  productDate: string;
  productRank: string;
  category: string;
  images: string[];
  properties: {
    MainCategory: string;
    Mediumcategory: string;
    Category: string;
    Brand: string;
    Linename: string;
    Modelname: string;
    Modelnumber: string;
    Materials: string;
    Shape: string;
    Color: string;
    Metalfittings: string;
    Serial: string;
    Serialsticker: string;
    Accessories: string;
    purchasedate: string;
    ALLUexhibiting: string;
    ProductID: string;
    SizeW: string;
    SizeH: string;
    SizeD: string;
    Shoulderheight: string;
    Handleheight: string;
    Freetext: string;
    External: string;
    Internal: string;
    Handle: string;
    Angular: string;
    Root: string;
    Metal: string;
    Othercondition1: string;
    Othercondition2: string;
    Notes: string;
  };
}
