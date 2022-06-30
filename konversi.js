const diamon = function (input){
     let inputCoin = document.getElementById("coin");
     let outputRupiah =  document.getElementById("rupiah");

     inputCoin.value = input;

     const fixtPrice = 500;

     let deamod =  input * fixtPrice 

     console.log(deamod)

     outputRupiah.value = deamod

     let price = String(deamod).split("").reverse("")

     for(let i = 0; price.length; i++){
          if((i + 1) % 3 == 0 && i !== price.length -1){
               price[i] = '.${price[i]}';
          }  
     }

     console.log(price)
} 