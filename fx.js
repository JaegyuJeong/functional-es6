const log = console.log

const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
})

const filter = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        if (f(a)) res.push(a);
    }
    return res;
})

const reduce = curry((f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
})

//
// const products = [
//     {name: '반팔티', price: 15000},
//     {name: '긴팔티', price: 20000},
//     {name: '핸드폰케이스', price: 15000},
//     {name: '후드티', price: 30000},
//     {name: '바지', price: 25000},
// ]

const add = (a, b) => a + b;

// # go, pipe

const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

go(
    add(0, 1),
    a => a + 10,
    a => a + 100,
);

const f = pipe(
    (a, b) => a + b,
    a => a + 10,
    a => a + 100
);





// ## curry ==> 받은함수를 원하는 시점에 평가하는 함수


const mult = curry((a, b) => a * b);