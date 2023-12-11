/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
Recuerda no usar frutas duplicadas.
Finalmente, imprime el array resultante.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const newFood = [];

for(let i = 0; i < foodSchedule.length; i++){

  if(foodSchedule[i].isVegan === false){
    const unusedFruits = fruits.filter(fruit => !newFood.includes(fruit));
    if (unusedFruits.length > 0) {
      newFood.push(unusedFruits[0]);
    }
  } else {
    newFood.push(foodSchedule[i].name);
  }
}

console.log(newFood);