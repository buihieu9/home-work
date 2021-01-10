const seatsInTheater = (nCols, nRows, col, row) => {
  if (nCols < 1 || nCols > 1000 || nRows < 1 || nRows > 1000) return;
  if (col < 1 || col > 1000 || row < 1 || row > 1000) return;

  return (nCols - col + 1) * (nRows - row);
};

console.log(seatsInTheater(16, 11, 5, 3));
