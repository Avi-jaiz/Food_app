const DummyMeals = 
[
    {id:1,name:'Masala Dosa', description:'A famous South Indian Dish' , price: 150},

    {id:2,name:'Chicken Biryani', description:'A Perfect blend of Basmati rice with chicken with some exotic spices' , price: 150},

    {id:3,name:'Cholle Bhature', description:'Cholle with spicey mix of herbs and Bhature bread' , price: 150},

    {id:4,name:'Lassi', description:'Goodness of Yogurt with lots fo dried fruits' , price: 150},
]

const AvailableMeals =()=>
{
   return(
    <div className="availableMeals">
<ul>
{
    DummyMeals.map((foodItems,index)=>
    {
        return(
            <li key={index}><h4> {foodItems.name} </h4>
            <span>{foodItems.description}</span>
            <h5>₹ {foodItems.price}</h5>
            
            </li>
        )
    })
}
  
</ul>
    </div>
   )
}

export default AvailableMeals;