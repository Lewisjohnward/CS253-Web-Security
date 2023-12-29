const numbers = process.argv.slice(2);
const sum = numbers.reduce((prev, current) => {
  const value = Number(current);
  return (prev += value);
}, 0);
console.log(sum);

