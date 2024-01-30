//function to return an array of student names who have scored above the threshold.

const students = [
  {
    name: "Alice",
    score: 85,
  },
  {
    name: "Bob",
    score: 60,
  },
  {
    name: "Charlie",
    score: 92,
  },
  {
    name: "David",
    score: 75,
  },
];

function getStudentsAboveThreshold(students = [], threshold = 0) {
  let names = [];
  for (let i = 0; i < students.length; i++) {
    //checking if score is greater than threshold
    if (students[i].score > threshold) {
      names.push(students[i].name);
    }
  }
  return names;
}

console.log(getStudentsAboveThreshold(students, 70));
