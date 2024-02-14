function appendToDisplay(a){
    document.getElementById('display').value +=a; 
    
   
}

function clearDisplay(){
    document.getElementById('display').value ='';
}

function calculatorResult(){
    const expression =
    document.getElementById('display').value;
    const result = eval(expression)
    document.getElementById('display').value = result;
}


function clearOnebyOne(){
   const boxValue =  document.getElementById('display').value;
  const boxValue2 = boxValue.slice(0, -1);
  document.getElementById('display').value = boxValue2;
}