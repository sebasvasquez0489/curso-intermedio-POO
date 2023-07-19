const sebastian = {
  name: "Sebas",
  age: 34,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    // `this` se usa para hacer referencia a la propiedad `approvedCourses`
    // del objeto en cuestión.
    this.approvedCourses.push(newCourse);
  },
};

// console.log(Object.keys(sebastian));
// console.log(Object.getOwnPropertyNames(sebastian));
// console.log(Object.entries(sebastian));

//Object.seal(sebastian);
Object.freeze(sebastian);

// Object.defineProperty(sebastian, "navigator", {
//   value: "Chrome",
//   enumerable: false,
//   writable: true,
//   configurable: true,
// });

// Object.defineProperty(sebastian, "editor", {
//   value: "VScode",
//   enumerable: true,
//   writable: false,
//   configurable: true,
// });

// Object.defineProperty(sebastian, "terminal", {
//   value: "WSL",
//   enumerable: true,
//   writable: true,
//   configurable: false,
// });

// Object.defineProperty(sebastian, "pruebaNASA", {
//   value: "extraterrestres",
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

console.log(Object.getOwnPropertyDescriptors(sebastian));
