document.getElementById('calculation-Input').addEventListener('click' , function () {
 
 const inputmoney = document.getElementById('incomeInput');
 const inputMoneyAmount = inputmoney.value;
 
    const foodmoney = document.getElementById('foodInput');
 const foodMoneyAmount = foodmoney.value;
 

 const rentmoney = document.getElementById('rentInput');
 const rentMoneyAmount = rentmoney.value;
 


 const Clothesmoney = document.getElementById('clothesInput');
 const ClothesMoneyAmount = Clothesmoney.value;

   if(inputMoneyAmount < 0 || inputMoneyAmount == '' ){
    return document.getElementById('error').style.display = "block"
   }
   if(foodMoneyAmount < 0 || foodMoneyAmount==''){
    return document.getElementById('error').style.display = "block"
   }
   if(rentMoneyAmount < 0 || rentMoneyAmount == "" ){
    return document.getElementById('error').style.display = "block"
   }

   if(ClothesMoneyAmount < 0 || ClothesMoneyAmount == ''){
    return document.getElementById('error').style.display = "block"
   }
 
    const totalAmount = parseFloat(foodMoneyAmount) + parseFloat(rentMoneyAmount) + parseFloat(ClothesMoneyAmount);


    const expenceMoney = document.getElementById('expence');
    
    expenceMoney.innerText = totalAmount;

    const balancesMoney = document.getElementById('balances')
    balancesMoney.innerText = parseFloat(inputMoneyAmount) - totalAmount;
    
    




})


