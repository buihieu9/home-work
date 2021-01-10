const maxMutiple = (divisor, bound) => {
  if (divisor < 2 || divisor > 10 || bound < 5 || bound > 100) return;

  return bound - (bound % divisor);
};

console.log(maxMutiple(3, 10));
