hightlight = ([first, ...strings], ...values) => {
  return values.reduce(
    (acc, curent) => [...acc, `<span>${curent}</span>`, strings.shift()],
    [first]
  );
};
// ham shift se xoa di phan tu dau tien va tra lai chinh no
var brand = "f8";
var course = "javascript";

const html = hightlight`Hoc lap trinh ${course} tai ${brand} !`;
console.log(html);
