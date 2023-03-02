var cousers = [
    {
        id: 1,
        name: 'js',
        coin: 250

    },
    {
        id: 2,
        name: 'c',
        coin: 0

    },
    {
        id: 3,
        name: 'c#',
        coin: 2321

    },
    {
        id: 4,
        name: 'c++',
        coin: 405

    },
    {
        id: 5,
        name: 'pythong',
        coin: 500

    },
    {
        id: 6,
        name: 'pythong',
        coin: 500

    }


]

cousers.forEach(function (couser, index) {
    console.log(couser);
});




var isFree = cousers.every(function (cousers, index) {
    return cousers.coin == 0;
    // nếu tất cả các khóa khóc free coin = 0 thì sẽ trả về true 
});  // kiểm tra tất cả trả về boolen

console.log(isFree)


var isFree2 = cousers.some(function (cousers, index) {
    return cousers.coin == 0;
    // console.log(index)
    // kiem tra chỉ cần 1 cái thỏa mãn là đc
});  // kiểm tra tất cả trả về boolen

console.log(isFree2)


var isFree3 = cousers.find(function (cousers, index) {
    return cousers.name == 'js';

});  // tìm đến cái thỏa mãn rồi ngừng

console.log(isFree3)


var isFree4 = cousers.filter(function (cousers, index) {
    return cousers.name == 'pythong';

});
// tìm cả mảng cái nào thỏa mãn là lấy

console.log(isFree4)









