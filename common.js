function inputValue(id){
    const valueInput = document.getElementById(id).value;
    const inputNumber = parseFloat(valueInput);
    
    document.getElementById(id).value = ""
    return inputNumber;

}
