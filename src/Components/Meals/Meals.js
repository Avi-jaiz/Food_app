import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import './meals.css';

const Meals =()=>
{
    return(
<div className='meals'>
    <MealsSummary />
    <AvailableMeals />
</div>
    )
}

export default Meals;