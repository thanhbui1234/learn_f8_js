var cousers = [
  {
    id: 1,
    name: "js",
    coin: 250,
  },
  {
    id: 2,
    name: "c",
    coin: 0,
  },
  {
    id: 3,
    name: "c#",
    coin: 2321,
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
function courseHandler(cousers, index) {
  console.log(cousers);
  return {
    id: cousers.id, // giu nguyen id
    name: `Khoc hoc : ${cousers.name}`, // Template Literals.
    coin: cousers.coin,
    cointext: `gia : ${cousers.coin} `,
    index: index,
  };
  return {
    id: cousers.id,
    name: ` khoa hoc ${cousers.name}`,
    coin: cousers.coin,
    cointtext: `gia : ${cousers.coin}`,
    index: index,
  };
}

var newCourses = cousers.map(courseHandler);
console.log(newCourses);
