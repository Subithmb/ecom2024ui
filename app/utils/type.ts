/* eslint-disable */

export interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

export interface PriceDetails {
  price: number;
  finalPrice: number;
  totalAmountSaved: number;
}

export interface CartProduct {
  _id: string;
  quantity: number;
  discount: any[];
  priceDetails: PriceDetails;
  productId: Product;
}

export default interface CartResponseType {
  _id: string;
  userId: string;
  products: CartProduct[];
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
/* eslint-enable */
