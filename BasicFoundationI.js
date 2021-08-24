for(let num = 0; num<256; num++) {
    console.log(num)
 }

 function sum_even_numbers(){
    var sum = 0;
    for(var x=2; x!=1000; x+2)
    {
      sum+=x;
    }
    return sum; 
}
console.log(sum_even_numbers());
