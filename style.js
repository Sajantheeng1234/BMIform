document.getElementById("bmiform") .addEventListener("submit",
    function(e)
   {
    e.preventDefault();

    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if (!height || !weight|| height<=0 || weight<=0 ){
        result.textconst = "Please enter valid height and weight";
        return;

    }
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    let category ="";
    if (bmi < 18.5) {
        category = "underweight";
   }
   else if (bmi < 24.5){
    category = "normal Weight";
   }
   else if(bmi < 29.5){
    category = "overweight";
   }
   else{
    category = "obesity";
   }

   result.textContent = `Your BMI is ${bmi} and you are ( ${category})`;
});
