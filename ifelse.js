let age = 25;
let hasLicense = true;
let hasCar = false;

if (age >= 18) {
  console.log("Yay you are old enough to drive!!!");
  if (hasLicense && hasCar) {
    console.log("omg you have a car and a licence");
  } else if (hasLicense && !hasCar) {
    console.log("You have a license but no car, aww:(");
  } else if (!hasLicense && hasCar) {
    console.log("You have a car but no license, i hope you get a licence soon!");
  } else {
    console.log("You don't have a license or a car, boooooo");
  }
} else {
  console.log("You are not old enough to drive, i am very sorry!");
}