var arrangeCoins = function(n) {
  let total = n;
  let row = 1;
  
  while (total >= row) {
      total = total - row;
      row++;
  }
  
  return row - 1;
};