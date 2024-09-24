function inputValue(id){
    const valueInput = document.getElementById(id).value;
    const inputNumber = Number(valueInput);
    
    document.getElementById(id).value = ""
    return inputNumber;

}


function allDonationMoney(donate){
    const div = document.getElementById(donate);
    return div
}