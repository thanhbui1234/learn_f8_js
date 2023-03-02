var cousers = [
  {
    id: 1,
    name: "js",
    coin: 2500,
  },
  {
    id: 2,
    name: "c",
    coin: 0,
  },
  {
    id: 3,
    name: "c#",
    coin: 23,
  },
  {
    id: 4,
    name: "c++",
    coin: 405,
  },
  {
    id: 5,
    name: "pythong",
    coin: 500,
  },
];

var i = 0;

function coiHanlder(accumentlator, currentValue, currentIndex) {
  // bien luu tru
  console.table({
    "Luot chay :": currentIndex + 1,
    "Bien luu tru": accumentlator,
    "Gia tri cong them: ": currentValue.coin,
  });
  return accumentlator + currentValue.coin;
}

var totalCoin = cousers.reduce(coiHanlder, 0);
// tham so thu nhat la 1 function  thu  2 la gia tri khoi tao bien luu tru tuy vao vao chung ta m  se gan vao gia tri. cua accumentlator

// console.log(totalCoin)

// function coiHanlder(accumentlator, currentValue) {        // bien luu tru

//     return accumentlator + currentValue.coin;

// }

// var totalCoin = cousers.reduce(coiHanlder, 0)
// // tham so thu nhat la 1 function  thu  2 la gia tri khoi tao bien luu tru tuy vao vao chung ta m  se gan vao gia tri. cua accumentlator

// console.log(totalCoin)

// cach ngan gon
var totalCoin2 = cousers.reduce(function (total, course) {
  return total + course.coin;
}, 0);
document.write(totalCoin2);

function getTotalGold(array) {
  function goldHanlder(accumulator, currentValue) {
    return (accumulator += currentValue.gold);
  }
  var totalGold = 0;
  return (totalGold = array.reduce(goldHanlder, 0));
}
