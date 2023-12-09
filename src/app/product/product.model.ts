export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

export class Product implements IProduct {
  id: number;
  name: string;
  description: string;
  price: number;

  constructor(id: number, name: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}