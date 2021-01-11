const addTwoDigits = (n) => {
  if (n < 10 || n > 99) return;
  let trunc = Math.trunc(n / 10);
  let total = (n % 10) + trunc;
  console.log(total);
  return total;
};

addTwoDigits(99);
