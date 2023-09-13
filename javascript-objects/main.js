function sumAllSalaries(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    sum += salaries[salary];
  }
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  pete: 130,
};

console.log(sumAllSalaries(salaries));
