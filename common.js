function inputValue(id){
    const valueInput = document.getElementById(id).value;
    const inputNumber = parseFloat(valueInput);
   
    if(isNaN(inputNumber) || inputNumber < 0){
                alert("invalid number")
                return
}
    return inputNumber;

}
