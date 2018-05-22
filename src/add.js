function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function add(input, delimiters = ',') {
  let delimitersRegex = /\n|,/g;
  if (input.startsWith('//')) {
    const [header, ...parts] = input
      .split('\n');

    const MULTIPLE_DELIMITER_REGEX = /\[([^\[]+)\]+/g;

    delimiters = header
      .replace('//', '')
      .match(MULTIPLE_DELIMITER_REGEX);

    delimiters = delimiters.map(delimiter => {
      return escapeRegExp(delimiter.substr(1, delimiter.length - 2));
    });

    delimitersRegex = new RegExp(`${delimiters.join('|')}`);

    input = parts.join('\n');
  }

  const result = input
    .split(delimitersRegex)
    .map(element => {
      return Number(element.replace(/--/g, ''))
    })
    .reduce(({ total, negatives }, element) => {
      if (Number.isNaN(element)) {
        throw new Error('Invalid argument error');
      }
      
      if (element < 0) {
        negatives = [ ...negatives, element ];
      }

      return {
        total: element < 1000 ? total + element :  total,
        negatives,
      };
    },
    {
      total: 0,
      negatives: [],
    });

  if (result.negatives.length) {
    throw new Error(`negatives not allowed: ${result.negatives.join(',')}`);
  }

  return result.total;
}

export default (...args) => {
  const params = {strings: [], delimiters: []};
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      params.delimiters = [...params.delimiters, ...arg];
    } else {
      params.strings.push(arg);
    }
  });

  if (params.delimiters.length) {
    const additionalDelimiters = `[${params.delimiters.join('][')}]`;

    params.strings = params.strings.map(el => {
      if (el.startsWith('//')) {
        return el.replace(/^\/\//, `//${additionalDelimiters}`);
      }
      return `//${additionalDelimiters}\n${el}`;
    });
  }

  return params.strings.reduce((sum, el) => sum + add(el), 0);
};
