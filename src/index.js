module.exports = function toReadable(num){
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr1 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
    
      let dozens;
      let units;
      let hundred;
    
      if(num < 20){
        return arr[num];
      }else if(num >=20 && num <100){
        units = num%10;
        dozens = (num - units)/10;
        return `${arr1[dozens]} ${arr[units]}`;
      }else if(num %100 <20){
        units = num % 100;
        hundred = (num-units-dozens)/100;
        return `${arr[hundred]} hundred ${arr[units]}`;
      } 
        units = num%10;
        dozens = ((num-units)%100)/10;
        hundred = (num-units-dozens*10)/100;
        return`${arr[hundred]} hundred ${arr1[dozens]} ${arr[units]}`;
    }