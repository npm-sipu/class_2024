// let a = "hello";
// let b = a;

// dup(c);

// console.log(a);

// console.log(b);

// b = "world";

// console.log(a);
// console.log(b);

// let obj = {
//   a: "hello",
// };

// let obj2 = obj;

// console.log("obj", obj);
// console.log("obj2", obj2);

// obj2.a = "world";

// console.log("obj", obj);
// console.log("obj2", obj2);

// let a = "hello";
// let b = a;

// console.log(a);
// console.log(b);

// b = "world";

// console.log(b);
// console.log(a);

let obj = {
  a: "hello",
};

//shallow copy
let obj2 = { ...obj };

// obj2.a = "world";

// console.log("object1", obj.a);
// console.log("object2", obj2.a);

let nestedObj = {
  a: "hello",
  b: [1, 2, 3, 4, 5, 6],
};

let newObj = { ...nestedObj, b: [...nestedObj.b] };

// let newObj = JSON.parse(JSON.stringify(nestedObj));

newObj.a = "world";

newObj.b[0] = 999;

console.log(nestedObj.a);
console.log(newObj.a);

console.log(nestedObj.b); //[1, 2, 3, 4, 5, 6]
console.log(newObj.b); //[999, 2, 3, 4, 5, 6]
