const largestNumber = (n) => {
  if (n < 1 || n > 9) return;
  let largest = 10 ** n - 1;
  console.log(largest);
  return largest;
};

largestNumber(9);
