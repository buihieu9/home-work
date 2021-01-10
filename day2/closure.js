// 1 closure là function lồng nhau nhưng thằng function con lấy dược biến được khai báo trong phạm vị của thằng cha, và biến global

var x = 2,
  fns = [];

(function () {
  var x = 5;
  for (let i = 0; i < x; i++) {
    fns[i] = () => i;
  }
})();

console.log(x * 2 === fns[x * 2]());
