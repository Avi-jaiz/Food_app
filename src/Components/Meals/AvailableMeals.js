import MealItems from "../../MealItems/MealItems";
import Card from "../UI/Card";
import "./availableMeals.css";

const DummyMeals = [
  {
    id: '1',
    name: "Masala Dosa",
    description: "A famous South Indian Dish",
    price: 150,
  },

  {
    id: '2',
    name: "Chicken Biryani",
    description:
      "A Perfect blend of Basmati rice with chicken with some exotic spices",
    price: 150,
  },

  {
    id: '3',
    name: "Cholle Bhature",
    description: "Cholle with spicey mix of herbs and Bhature bread",
    price: 150,
  },

  {
    id: '4',
    name: "Lassi",
    description: "Goodness of Yogurt with lots fo dried fruits",
    price: 150,
  },
];

const AvailableMeals = () => {
  return (
    <div className="availableMeals">
      <ul>
        {DummyMeals.map((foodItems) => {
          return (
            <Card key={foodItems.id}>
              <MealItems  name={foodItems.name} description={foodItems.description} price = {foodItems.price}/>

             
            </Card>
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableMeals;
