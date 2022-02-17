const balancesMoney = document.getElementById('balances')

document.getElementById('calculation-Input').addEventListener('click' ,function () {
 
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

   else if(foodMoneyAmount < 0 || foodMoneyAmount==''){
    return document.getElementById('error').style.display = "block"
   }

   else if(rentMoneyAmount < 0 || rentMoneyAmount == "" ){
    return document.getElementById('error').style.display = "block"
   }

   else if(ClothesMoneyAmount < 0 || ClothesMoneyAmount == ''){
    return document.getElementById('error').style.display = "block"
   }
   else{
       document.getElementById('error').style.display = "none"
   }
 
      const totalAmount = parseFloat(foodMoneyAmount) + parseFloat(rentMoneyAmount) + parseFloat(ClothesMoneyAmount);
      if(inputMoneyAmount < totalAmount){
         return document.getElementById('errorInput').style.display = "block"
      }else {
         document.getElementById('errorInput').style.display = "none"
      }

      const expenceMoney = document.getElementById('expence');
    
      expenceMoney.innerText = totalAmount;
    balancesMoney.innerText = parseFloat(inputMoneyAmount) - totalAmount;
    
})


function saveMoney(){
 const money = document.getElementById('saveId');
 const inputmoney = document.getElementById('incomeInput');
 const saveTaka = document.getElementById('savingAmount');
 const remainingMoney = document.getElementById("remainingBalance")
 saveTaka.innerText= (inputmoney.value/100)*money.value;
 remainingMoney.innerText = balancesMoney.innerText - saveTaka.innerText;
}

