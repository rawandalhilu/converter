document.addEventListener('DOMContentLoaded', () => {
  
    const kilometersInput = document.getElementById('kilometersInput');
    const convertButton = document.getElementById('convertButton');
    const clearButton = document.getElementById('clearButton'); 
    const milesResult = document.getElementById('milesResult');
    const errorMessage = document.getElementById('error-message');

   
    const CONVERSION_FACTOR = 0.621371;

  
    function convertKmToMiles() {
      
        errorMessage.textContent = '';
        milesResult.textContent = '--';

     
        const kmValueString = kilometersInput.value;

      
        if (kmValueString === "" || kmValueString === null) {
            errorMessage.textContent = "please enter a value in Kilometers "; 
            return;
        }

      
        const kilometers = parseFloat(kmValueString);

        
        if (isNaN(kilometers) || kilometers < 0) {
            errorMessage.textContent = "Please enter a valid and positive numerical value."; 
            return;
        }

      
        const miles = kilometers * CONVERSION_FACTOR;

    
        milesResult.textContent = miles.toFixed(2); 
    }

   
    function clearConverter() {
        kilometersInput.value = ''; 
        milesResult.textContent = '--';
        errorMessage.textContent = ''; 
    }

  
    convertButton.addEventListener('click', convertKmToMiles);  

   
    clearButton.addEventListener('click', clearConverter);  

   
    kilometersInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            convertKmToMiles();
        }
    });
});
