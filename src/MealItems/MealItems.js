import './mealItems.css'
import MealItemForm from './MealItemForm';



const MealItems = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <li className="mealItems">
      <div className='foodName'>
        <h3>{props.name}</h3>
<p>{props.description}</p>
<div>
        <h3 className='price'>{price}</h3>
      </div>
      </div>
      <MealItemForm />
      
    </li>
  );
};

export default MealItems;
