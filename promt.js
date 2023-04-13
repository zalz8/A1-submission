let name = prompt("What is your name?");
console.log(name)
let age = prompt("How old are you?");
console.log(age)
let hobby = prompt("What is your favorite hobby?");
console.log(hobby)

alert("Thank you ! so here is what i learnt about you :)  ,:\n\nName: " + name + "\nAge: " + age + "\nOccupation: " + occupation + "\nHometown: " + hometown + "\nHobby: " + hobby);
console.log(alert)
let food = prompt("What is your favorite food?");
console.log(food)

if (food.toLowerCase() === "pizza") {
  alert("OMG! PIZZA is my favorite food too.");
} else if (food.toLowerCase() === "pasta") {
  alert("Yum! I love pasta too.");
} else {
  alert("Hmm,Great choice.");
}
