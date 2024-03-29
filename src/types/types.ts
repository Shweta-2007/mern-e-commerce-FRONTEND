export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};

export type ShippingInfo = {
  address: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
};

export interface CartItem {
  productId: string;
  price: number;
  quantity: number;
  name: string;
  photo: string;
  stock: number;
}

export interface OrderItem {
  productId: string;
  price: number;
  quantity: number;
  name: string;
  photo: string;
  _id: string;
}

export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  status: string;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};
