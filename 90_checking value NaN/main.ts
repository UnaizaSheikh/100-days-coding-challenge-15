//function check if value is not a number
function valueNaN(valueType: any): boolean {
  return isNaN(valueType);
}
console.log(valueNaN("Hello")), console.log(valueNaN("950"));
