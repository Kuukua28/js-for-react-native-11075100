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
    
