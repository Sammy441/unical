let val=bmiCalculator(65,1.8);

if(val < 18.5){
  console.log("Your BMI is "+val+",so you are underweight");
} else {
    if ( val >= 18.5 && val <= 24.9) {
       console.log("Your BMI is "+val+",so you have a normal weight");
    } else {
      if ( val > 24.9) {
        console.log("Your BMI is "+val+",so you are overweight");
      }
    }
}

function bmiCalculator (weight, height) {
     return ( Math.round((weight/(height*height))));
}

