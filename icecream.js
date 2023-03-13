var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate")
    && (vessel === "cone" || vessel === "bowl")
    && (toppings === "sprinkles" || toppings === "peanuts")) {
        console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
    } 

    if ("") {
      console.log("the value is truthy");
  } else {
      console.log("the value is falsy");
  }

  if(1){
    console.log("This text will be printed if the condition above evaluates to true")}

    var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
  case "no high school diploma":
      salary = 25636;
    break;
  case "a high school diploma":
      salary = 35256;
    break;
  case "an Associate's degree":
      salary = 41496;
    break;
  case "a Bachelor's degree":
      salary = 59124;
    break;
  case "a Master's degree":
      salary = 69732;
    break;
  case "a Professional degree":
      salary = 89960;
    break;
  case "a Doctoral degree":
      salary = 84396;
}

console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString()}/year.`);

var x = 1;
while (x <= 20) {
if (x % 5===0 && x % 3===0){
        console.log ("JuliaJames");
}
    else if (x % 3===0){
        console.log ("Julia");
}
    else if (x % 5===0){
        console.log ("James");
}
    else { 
        console.log(x);
}
  x = x + 1;
}