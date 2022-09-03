import './mealItemForm.css';



const MealItemForm =(props)=>
{
  return(
<form className='mealItemForm'>
<input type='text' className='formInput'/>

<button className='formButton'>Add</button>

</form>
  )
}

export default MealItemForm;