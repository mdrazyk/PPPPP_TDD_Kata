class calculator {
   static Add(inputString){
     let result = 0;

    if(inputString.length===0){
      return 0;
    }

    const numbers = inputString.match(/\d+/g);

    return numbers.reduce((curr, prev) => Number(prev) + Number(curr), 0);
  }
}

export default calculator;