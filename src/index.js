 module.exports = function toReadable(num){
  let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arr1 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
  let units;
  let dozens;
  let hundreds;
  if (num ===0){
      return 'zero'
  }
    else if(num < 20){
      return arr[num];

    }else if(num >=20 && num <100){
      units = num%10;
      dozens = (num - units)/10;
      return `${arr1[dozens]} ${arr[units]}`;

    }else if(num%100 <20){
      units = num % 100;
      hundreds = Math.floor(num/100);
      return `${arr[hundreds]} hundred ${arr[units]}`;
    } 
      units = num%10;
      dozens = ((num-units)%100)/10;
      hundreds = (num-units-dozens*10)/100;
      return`${arr[hundreds]} hundred ${arr1[dozens]} ${arr[units]}`;
  }