class calculator {
   static Add(inputString){
     let result = 0;

    if(inputString.length===0){
      return 0;
    }

    const numbers = inputString.split(/d/g);

    numbers.forEach(number => {
      result += +number;
    });

    return result || 0;
  }
}

export default calculator;