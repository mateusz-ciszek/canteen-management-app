import { CreateFoodAdditionModel, CreateFoodModel } from '../../../../models';

export class FoodUtil {
  static emptyCreateFoodModel(): CreateFoodModel {
    return {
      name: '',
      price: null,
      description: '',
      image: null,
      additions: [],
    };
  }

  static createEmptyFoodAdditionModel(): CreateFoodAdditionModel {
    return {
      name: '',
      price: 0,
    };
  }
}
