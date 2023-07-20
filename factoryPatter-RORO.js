function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private["_name"];
    },
    set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos un caracter");
      }
    },
    // readName() {
    //   return private["_name"];
    // },
    // changeName(newName) {
    //   private["_name"] = newName;
    // },
  };

  // Object.defineProperty(public, "readName", {
  //   writable: false,
  //   configurable: false,
  // });

  // Object.defineProperty(public, "changeName", {
  //   writable: false,
  //   configurable: false,
  // });

  return public;
}

const sebastian = createStudent({ email: "sebas@gmail.co", name: "sebas" });
