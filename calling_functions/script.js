//Part 1: Hey kiddo:
console.log('Part 1: Hey kiddo:');
const ageCheck = function(age){
    if (age >= 18){
        return true;
    }else{
        return false;
    }
};


const ageCheck1 = function(age){
    const check = ageCheck(25);
    if (check == true) {
        return "Hello there";
    } else {
        return 'Hey kiddo';
    }
};
console.log(ageCheck1());

//Part 2: VAT calculations
console.log('Part 2: VAT calculations:');

//VAT exercise 1
 const price = function(base,VAT){
    const vatValue = (base*(VAT/100));
    return vatValue;
 }



 const result = function(base,VAT){
     const resultValue = base + (price(base,VAT));
     return resultValue;
 }

 console.log(result(10,21));
 console.log(result(500,9));

 //VAT exercise 2
 const basePrice = function(totalAmount,VAT1){
    const base1 = totalAmount - (totalAmount/(VAT1/100+1));
    return base1;
 };

 const vatAmount = function(totalAmount,VAT1){
     const vatValue1 = totalAmount - (basePrice(totalAmount,VAT1));
     const vatValue2 = basePrice(totalAmount,VAT1);
     return  [vatValue1,vatValue2];
     
 };

 
 console.log(vatAmount(1210,21));
 console.log(vatAmount(500,9));
