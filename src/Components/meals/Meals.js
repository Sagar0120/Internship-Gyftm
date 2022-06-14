import { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";
import mealsImage from "../../assests/food.png";
import classes from "./Header.module.css";

const Meals = () => {
  return (
    <Fragment>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
