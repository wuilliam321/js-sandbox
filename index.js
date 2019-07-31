const convert = require('./romans/romans');
const pert = require('./pert-estimations/pert')['pert'];

console.log(convert(4));
for (let i = 0; i < 100; i++) {
  const o = parseInt((Math.random() * 3) + 1)
  const n = parseInt((Math.random() * 6) + 4)
  const p = parseInt((Math.random() * 8) + 6)
  console.log([o, n, p], pert(o, n, p));
}
console.log([Infinity, Infinity, Infinity], pert(Infinity, Infinity, Infinity));