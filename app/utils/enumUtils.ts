/* eslint-disable */

export enum Roles {
  ADMIN = "admin",
  SUPERADMIN = "superadmin",
  USER = "user",
}

export enum ApiEnum {
  home = "/",
  createUser = "/user",
  loginUser = "/user/login",
  getCategories = "/category",
  product = "product",
  cartAdd = "/cart/add",
  cart = "/cart",
  user = "/user",
  getUserCart = "cart/user",
  removeProduct = "cart/removeProduct",
}
