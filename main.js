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

console.log(Object.getOwnPropertyDescriptors(sebastian));
