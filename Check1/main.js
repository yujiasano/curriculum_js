// 問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for(let i = 0; i < numbers.length; i++){
 if(numbers[i] % 2 == 0){
    isEven(numbers[i]);
  } 
}
function isEven(num) {
    console.log(num + 'は偶数です');
}

// 問２
class car {
  
  constructor(gas, number){
    this.gas = gas;
    this.number = number;
  }
}

function getNumGas(gas, num){
  let mycar = new car(gas, num);
  console.log("ガソリンは" + mycar.gas + "です。ナンバーは" + mycar.number + "です");
}

getNumGas(20.5, 11);