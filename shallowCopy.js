const obj1 = {
  a: "a",
  b: "b",
};

const stringfiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringfiedComplexObj);
