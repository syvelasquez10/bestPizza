export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export interface Product {
  id: number;
  name: string;
}

export interface Store {
  id: number;
  name: string;
  address: string;
  description: string;
  products: Product[];
}

export interface BackMockResponse {
  users: User[];
  stores: Store[];
}

export interface BackResponse {
  user?: User;
  stores?: Store[];
  message?: string;
}
