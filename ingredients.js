const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//for loop for all ingredients
for (let i=0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
console.log("--------------------");
//while loop for all ingredients
let ii = 0;
while (ii < ingredients.length) {
  console.log(ingredients[ii]);
  ii++;
}
console.log("--------------------");
////for loop for all ingredients backwards
for (let i = ingredients.length - 1; i >= 0; i--){
  console.log(ingredients[i]);
}

