export class Menu {
  _id: string;
  name: string;
  foods: Food[];
}

export class Food {
  _id: string;
  name: string;
  price: number;
  description: string;
  additions: Addition[];
}

export class Addition {
  _id: string;
  name: string;
  price: number;
}

export class CreateMenuModel {
  name: string;
  foods: CreateFoodModel[] = [];
}

export class CreateFoodModel {
  name: string;
  price: number;
  description: string;
  additions: CreateFoodAdditionModel[] = [];
}

export class CreateFoodAdditionModel {
  name: string;
  price: number;
}

export interface Order {
  _id: string;
  user: User;
  totalPrice: number;
  items: OrderItem[];
  createdDate: Date;
  finishedDate: Date;
  history: OrderState[];
  currentState: OrderState;
  comment: string;
}

export interface OrderState {
  state: State;
  enteredBy: User;
  enteredDate: Date;
}

export type State = 'SAVED' | 'PAID' | 'SENT_TO_PREPARATION' | 'IN_PREPARATION' | 'READY' | 'SERVED' | 'REJECTED';

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface OrderItem {
  _id: string;
  food: Food;
  additions: OrderItemAddition[];
}

export interface OrderItemAddition {
  _is: string;
  price: number;
  quantity: number;
  foodAddition: Addition;
}
