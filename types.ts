
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export interface User {
  name: string;
  email: string;
  avatar?: string;
}

export interface Address {
  id: string;
  type: 'Home' | 'Work';
  street: string;
  city: string;
  zip: string;
  isDefault: boolean;
}

export type Category = 'All' | 'Electronics' | 'Fashion' | 'Home' | 'Lifestyle';
