export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  origin: string;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}