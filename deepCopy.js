const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAA";
  },
};

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
