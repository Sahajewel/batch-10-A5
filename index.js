
const noakhaliBtn = document.getElementById("noakhali-btn");
noakhaliBtn.addEventListener("click", function(){
    const noakhaliValue = inputValue("noakhali-input");
   let noakhaliDonation = document.getElementById("noakhali-donation");
   const noakhaliDonationNumber = parseFloat(noakhaliDonation.innerText );
   let balance = noakhaliDonationNumber + noakhaliValue;
   noakhaliDonation.innerText = balance;

   let totalAmount = document.getElementById("total-money");
   let amount = parseFloat(totalAmount.innerText)
   let getAmount = amount - noakhaliValue;
   totalAmount.innerText = getAmount;


    
})

const feniBtn = document.getElementById("feni-btn");
feniBtn.addEventListener("click", function(){
    const feniValue = inputValue("feni-input");

    let feniDonation = document.getElementById("feni-donation");
    const feniDonationNumber = parseFloat(feniDonation.innerText );
    let balance = feniDonationNumber + feniValue;
    feniDonation.innerText = balance;
 
    let totalAmount = document.getElementById("total-money");
    let amount = parseFloat(totalAmount.innerText)
    let getAmount = amount - feniValue;
    totalAmount.innerText = getAmount;

   
});

const quotaBtn = document.getElementById("quota-btn");
quotaBtn.addEventListener("click", function(){
    const quotaValue = inputValue("quota-input");

    let quotaDonation = document.getElementById("quota-donation");
    const quotaDonationNumber = parseFloat(quotaDonation.innerText );
    let balance = quotaDonationNumber + quotaValue;
    quotaDonation.innerText = balance;
 
    let totalAmount = document.getElementById("total-money");
    let amount = parseFloat(totalAmount.innerText)
    let getAmount = amount - quotaValue;
    totalAmount.innerText = getAmount;
   
})




window.addEventListener("scroll", function(){
    const header = document.getElementById("header");
    if(window.scrollY > 50){
        header.classList.add("bg-deepWhite")
    }else{
        header.classList.remove("bg-deepWhite")
    }
   
})


