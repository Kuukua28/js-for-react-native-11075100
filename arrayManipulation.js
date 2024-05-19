function processArray(arr) {
  return arr.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}

const inputArray = [1, 2, 3, 4, 5];
    const resultArray = processArray(inputArray);
    console.log(resultArray);

    function formatArrayStrings(strArr, numArr) {
      return strArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
          return str.toUpperCase();
        } else {
          return str.toLowerCase();
        }
      });
    }
    
    const inputStrings = ['Foo', 'BAR', 'baz', 'qux'];
    const inputNumbers = [2, 1, 3, 4];
    const formattedStrings = formatArrayStrings(inputStrings, inputNumbers);
    console.log(formattedStrings);

