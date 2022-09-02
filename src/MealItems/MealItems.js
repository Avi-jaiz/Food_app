import './mealItems.css'

const MealItems = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;

  return (
    <li className="mealItems">
      <div className='foodDesc'>
        <h3>{props.name}</h3>
        <div>{props.description}</div>

        
        <div className="price">{price}</div>

      </div>

    
     
    

      <div>

      </div>
    </li>
  );
};

export default MealItems;
