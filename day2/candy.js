const candies = (n, m) => {
  if (m % n === 0) return m;

  return Math.trunc(m / n) * n;
};

console.log(candies(5, 99));
