function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

/// CREAMOS FUNCION QUE RECIBE UN ELEMENTO , STRING, NUM, BOOLEAN,ETC ////
function deepCopy(subject) {
  let copySubject;

  /// VALIDAMOS SI ES OBJETO O ARRAY ////
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  /// EJECUTAMOS CON EL CICLO "FOR" POR CADA UNO DE LOS ELEMENTOS DE LAS PROPIEDADES DEL ELELMENTO ////
  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

//*** CREAMOS LA CLASE ***//

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

/// CREAMOS ESTUDIANTES ////

const sebastian = deepCopy(studentBase);
//*** MODIFICAR PROPIEDAD PERO NO PERMITE ELIMINARLA ***/
//SOLUCION 1
Object.seal(sebastian);
// SOLUCION 2
// Object.defineProperty(sebastian, "name", {
//   value: "sebas",
//   configurable: false,
// });

//Object.seal(obj) -- Se usa para evitar borrar propiedades
//Object.freeze(obj) -- Se usa para evitar borrar y editar una propiedad
//Object.isSealed(obj) -- Podemos comprobar si todas las propiedades de un objeto están bloqueadas a que sean eliminadas.
