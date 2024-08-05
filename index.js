function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  height = height / 100;
  BMI = weight / (height * height);
  // You are going to write the code here before the curly braces 👇🏻

  alert(BMI);
  // let Underweight = 18.5
  // let Healthy Weight = 18.5 – 24.9
  // let Overweight= 25.0 – 29.9
  // let Above Obesity=30.0 
  // <--!2-->

  if(weight>=18.5){
    console.log("you are Underweight")
  }
  else if(Healthy eight>=18.5 || Healthy Weight>=24.9)
    console.log("you are healthy")
  
    else(Overweight>=25.0 && Overweight>24.9 && Above Obesity=30.0 )
    console.log("Above Obesity")

}
