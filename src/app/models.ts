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
