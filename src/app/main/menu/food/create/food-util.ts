import { Addition, CreateFoodAdditionModel, CreateFoodModel, Food } from '../../../../models';

export class FoodUtil {
  static getCreateFoodModel(food?: Food): CreateFoodModel {
    return food ? FoodUtil.convertFoodToCreateFoodModel(food) : {
      name: '',
      price: 0,
      description: '',
      image: null,
      additions: [],
    };
  }

  static getCreateFoodAdditionModel(addition?: Addition): CreateFoodAdditionModel {
    return addition ? FoodUtil.convertAdditionToCreateFoodAdditionModel(addition) : {
      name: '',
      price: 0,
    };
  }

  private static convertFoodToCreateFoodModel(food: Food): CreateFoodModel {
    return {
      _id: food._id,
      name: food.name,
      price: food.price,
      image: null,
      description: food.description,
      additions: food.additions.map(this.getCreateFoodAdditionModel),
    };
  }

  private static convertAdditionToCreateFoodAdditionModel(addition: Addition): CreateFoodAdditionModel {
    return {
      _id: addition._id,
      name: addition.name,
      price: addition.price,
    };
  }
}
