let Login=document.getElementById("Login");
let LoginBtn=document.getElementById("LoginBtn");
let apiKey="374535bc81mshbe0e4be159594ddp1e0ff0jsn9ec44480a342";
Login.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle("active2");
});
LoginBtn.addEventListener("click",function(){
    let email=document.getElementById("email");
    let password=document.getElementById("pass");
    if(email.value==""||password.value==""){
        alert("Enter Details first");
    }
    else{
        alert("You logged in succesfully");
    }
})
const symptomData = [
    { name: 'fever', condition: 'Common Cold' },
    { name: 'cough', condition: 'Common Cold' },
    { name: 'headache', condition: 'Migraine' },
    { name: 'fatigue', condition: 'Flu' },
    { name: 'nausea', condition: 'Gastroenteritis' },
    { name: 'muscle pain', condition: 'Flu' },
    // Add more symptoms and conditions as needed
];

function checkSymptoms() {
    const symptomsInput = document.getElementById('symptoms');
    const resultDiv = document.getElementById('result');

    // Basic input validation
    if (symptomsInput.value.trim() === "") {
        resultDiv.innerHTML = "Please enter symptoms.";
        return;
    }

    const enteredSymptoms = symptomsInput.value.toLowerCase().split(',').map(symptom => symptom.trim());

    // Find conditions based on symptoms
    const conditions = getConditions(enteredSymptoms);

    // Display the result
    if (conditions.length > 0) {
        resultDiv.innerHTML = `Possible conditions: ${conditions.join(', ')}`;
    } else {
        resultDiv.innerHTML = 'No matching conditions found. Consult a doctor for a proper diagnosis.';
    }
}

function getConditions(enteredSymptoms) {
    return symptomData
        .filter(symptom => enteredSymptoms.includes(symptom.name))
        .map(symptom => symptom.condition);
}

    function windowOpen() { 
        Window = window.open( 
            "http://127.0.0.1:5500/jj.html", 
            "_blank", "width=1200, height=700, top=230, left=540"); 
    }  // Opens a new window
  
//   malnutrition checker
document.addEventListener('DOMContentLoaded', function () {
    const checkMalnutritionButton = document.getElementById('check-malnutrition');
    const resultContainer = document.getElementById('result-container');

    // Event listener for the "Check Malnutrition" button
    checkMalnutritionButton.addEventListener('click', function () {
        const age = parseFloat(document.getElementById('age').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        // Calculate BMI
        const bmi = calculateBMI(weight, height);

        // Determine nutritional status based on BMI
        const status = determineNutritionalStatus(bmi, age);

        // Display the result
        const resultMessage = `Your BMI is ${bmi.toFixed(2)}. ${status}`;
        resultContainer.textContent = resultMessage;
    });

    // Function to calculate BMI
    function calculateBMI(weight, height) {
        return weight / ((height / 100) * (height / 100));
    }

    // Function to determine nutritional status based on BMI and age
    function determineNutritionalStatus(bmi, age) {
        if (age < 5) {
            if (bmi < 16) {
                return 'Severely Malnourished';
            } else if (bmi < 17) {
                return 'Malnourished';
            } else {
                return 'Normal';
            }
        } else {
            if (bmi < 18.5) {
                return 'Underweight';
            } else if (bmi < 25) {
                return 'Normal';
            } else {
                return 'Overweight';
            }
        }
    }
});
