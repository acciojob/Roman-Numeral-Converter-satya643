function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  // Extended pairs for subtractive cases
  const subtractives = {
    900: 'CM',
    400: 'CD',
    90: 'XC',
    40: 'XL',
    9: 'IX',
    4: 'IV'
  };

  // First handle subtractive values
  for (let value of [900, 400, 90, 40, 9, 4]) {
    while (num >= value) {
      result += subtractives[value];
      num -= value;
    }
  }

  // Then handle standard values from obj
  for (let i = 0; i <= 6; i++) {
    let symbol = obj[i][0];
    let value = obj[i][1];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// Example test
// console.log(convertToRoman(36)); // XXXVI

// do not edit below this line
module.exports = convertToRoman;
