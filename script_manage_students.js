const students = [{
  name : 'Tavo',
  grade: 80
}];

/* Add Students */
function addStudents (name, grade) {
  students.push({
    name,
    grade
  });
}

const arr = ['ana', 'pedro', 'mario', 'marcos']

/* Remove students by name */
function removeStudents (students, name) {
 /* Ubicar la posicion del nombre */
 const index = students.findIndex(student => student.name === name);
  
  if (index !== -1) {
    students.splice(index, 1);
    console.log(name, 'has been removed');
  } else {
    console.log('was not found');
  }

}

/* Filter students by grade */

function filterTopStudents (students, minGrade) {
  return students.filter(student => student.grade > minGrade);
}

/* Format students in formated list */
function formatStudentsList (students) {
    return students.map((student) => `${student.name} - Grade: ${student.grade}`);
}


/* Start */
console.log("students =", students);

/* Add students */

addStudents('Alice', 85);
addStudents('Carlos', 100);
addStudents('Jhon', 70);
addStudents('Lulu', 95);
addStudents('David', 60);
addStudents('Emma', 92);

console.log(formatStudentsList(students));

console.log(filterTopStudents(students, 80));

console.log(removeStudents(students, 'Lulu'));

console.log(students);
