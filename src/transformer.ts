const cachedTable = console.table;
console.table = (...stuff) => console.log(stuff);
setTimeout(() => {
  console.table = cachedTable;
}, 10000);