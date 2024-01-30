//differnce between let var and const wiht exaples

//-----------------------------let-------------------------------
let number = 5;
// let number = 9; // this will lead to error as we cannot redeclare the let variable with the same name
number = 3;
console.log("let number value changed : " + number);

//let has a local scope
{
  let number1 = 9;
  console.log("let in local scope : " + number1);
}
// console.log(number1); //this will lead to error as we cannot use the let varible outside the local scope

//-----------------------------var---------------------------------
var varnumber = 3;
var varnumber = 5;
console.log("varnumber redeclared : " + varnumber); //we can redeclare the var

//var has a global scope
{
  var varnumber1 = 3;
  console.log("varnumber in local scope: " + varnumber1);
}
console.log("varnumber in global scope: " + varnumber1); //we can acess it globally

//-----------------------------const-------------------------------
const constnumber = 5;
// constnumber = 9; //it can neighter be redeclare nor it can be changed
console.log("value of constnumber : " + constnumber);

//const has a local scope
{
  const constnumber1 = 9;
  console.log("constnumber in local scope : " + constnumber1);
}
// console.log(constnumber1); //this will lead to error as we cannot use the const varible outside the local scope
