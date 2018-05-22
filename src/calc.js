export default function add(value) {

  if( /-\d/.test(value) ) {
    throw new Error('negatives not allowed');
  } else {

    const delimiters = value
      .match(/\[.*\]/g)

    if (delimiters) {
      const delimiterWithout = delimiters.map(x => {
        return x.replace('[','').replace(']','');
      });
    }

    return value
      .split(/\D/g)
      .reduce(
        (acc, currentValue) => {
          const value = parseInt(currentValue, 10) || 0;
          if(value>=1000){
            return acc;
          }

          return acc+value;
        }
        ,0
      );
  }
}