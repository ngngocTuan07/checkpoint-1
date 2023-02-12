console.log('bai 1')
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
document.write(factorial(5));

console.log('giai thua cua 5 = 120')