
const noakhaliBtn = document.getElementById("noakhali-btn");
noakhaliBtn.addEventListener("click", function(){

    const noakhaliValue = inputValue("noakhali-input");
    const p = document.createElement("p");
    p.innerText = `
         ${noakhaliValue} taka Donate for Flood at Noakhali, Bangladesh
         ${new Date()}
    `
    const div = allDonationMoney("div-history");
    div.appendChild(p);
    p.classList.add("border","rounded-xl","p-8","text-xl", "mb-5",)

    if(isNaN(noakhaliValue) || noakhaliValue <= 0 ){
        
        div.removeChild(p);

        alert('invalid number')
        const model =  document.getElementById("my_modal_1");
        model.close()
       
        return
}
   let noakhaliDonation = document.getElementById("noakhali-donation");
   const noakhaliDonationNumber = parseFloat(noakhaliDonation.innerText );
   let balance = noakhaliDonationNumber + noakhaliValue;
   noakhaliDonation.innerText = balance;

   let totalAmount = document.getElementById("total-money");
   if(totalAmount.innerText < noakhaliValue ){
    div.removeChild(p)
        alert("not sufficient balance");
        const model =  document.getElementById("my_modal_1");
        model.close()
        return
   }
  
   let amount = parseFloat(totalAmount.innerText)
   let getAmount = amount - noakhaliValue;
   totalAmount.innerText = getAmount;
  
})

const feniBtn = document.getElementById("feni-btn");
feniBtn.addEventListener("click", function(){
    const feniValue = inputValue("feni-input");
  
    const p = document.createElement("p");
    p.innerText = `
         ${feniValue} Donate for Flood Relief in Feni, Bangladesh
         ${new Date()}
    `
    const div = allDonationMoney("div-history");
    div.appendChild(p);
    p.classList.add("border","rounded-xl","p-8","text-xl", "mb-5")

    if(isNaN(feniValue) || feniValue <= 0 ){
        div.removeChild(p)
        alert('invalid number')
        const model =  document.getElementById("my_modal_2");
        model.close()
         return
 }


    

    let feniDonation = document.getElementById("feni-donation");
    const feniDonationNumber = parseFloat(feniDonation.innerText );
    let balance = feniDonationNumber + feniValue;
    feniDonation.innerText = balance;
 
    let totalAmount = document.getElementById("total-money");
    if(totalAmount.innerText < feniValue ){
        div.removeChild(p)
        alert("not sufficient balance")
        const model =  document.getElementById("my_modal_2");
        model.close()
         return
    }

    
    let amount = parseFloat(totalAmount.innerText)
    let getAmount = amount - feniValue;
    totalAmount.innerText = getAmount;

   
});

const quotaBtn = document.getElementById("quota-btn");
quotaBtn.addEventListener("click", function(){
    const quotaValue = inputValue("quota-input");

    const p = document.createElement("p");
    p.innerText = `
         ${quotaValue} Aid for Injured in the Quota Movement
         ${new Date()}
    `
    const div = allDonationMoney("div-history");
    div.appendChild(p);
    
    p.classList.add("border","rounded-xl","p-8","text-xl", "mb-5")

    if(isNaN(quotaValue) || quotaValue <= 0 ){
        div.removeChild(p)
        alert('invalid number')
        const model =  document.getElementById("my_modal_3");
        model.close()
         return
 }
    

    

    let quotaDonation = document.getElementById("quota-donation");
    const quotaDonationNumber = parseFloat(quotaDonation.innerText );
    let balance = quotaDonationNumber + quotaValue;
    quotaDonation.innerText = balance;
 
    let totalAmount = document.getElementById("total-money");
    if(totalAmount.innerText < quotaValue ){
        div.removeChild(p)
        alert("not sufficient balance")
        const model =  document.getElementById("my_modal_3");
        model.close()
         return
    }
    
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

const historyBtn = document.getElementById("history-btn");
historyBtn.addEventListener("click", function(){
    donationBtn.classList.remove("bg-green", "py-3", "px-8", "text-black", "font-600", "rounded-lg", "text-20");
    historyBtn.classList.add("bg-green", "py-3", "px-8", "text-black", "font-600", "rounded-lg", "text-20");
    donationBtn.classList.add("bg-[#11111]", "border", "border-gray","py-3", "px-8", "text-black", "font-500", "rounded-lg", "text-20");
    document.getElementById("main-section").classList.add("hidden");
    document.getElementById("div-history").classList.remove("hidden");
    document.getElementById("footer").classList.add("hidden")
  
})



const donationBtn = document.getElementById("donattion-btn");
donationBtn.addEventListener("click", function(){
    donationBtn.classList.add("bg-green", "py-3", "px-8", "text-black", "font-600", "rounded-lg", "text-20");
    historyBtn.classList.remove("bg-green", "py-3", "px-8", "text-black", "font-600", "rounded-lg", "text-20");
    historyBtn.classList.add("bg-[#11111]", "border", "border-gray","py-3", "px-8", "text-black", "font-500", "rounded-lg", "text-20");
    document.getElementById("main-section").classList.remove("hidden");
    document.getElementById("div-history").classList.add("hidden");
    document.getElementById("footer").classList.remove("hidden")
})


