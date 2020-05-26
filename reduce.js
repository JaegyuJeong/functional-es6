const log = console.log

const nums = [1, 2, 3, 4, 5]
let total = 0;

for (const n of nums) {
    total = total + n;
}
log(total);


const reduce = (f,acc, iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc=iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc,a);
    }
    return acc;
}

const add = (a, b) => a + b;

log(reduce(add, 0, [1, 2, 3, 4, 5]));

log(add(add(add(add(add(0,1),2),3),4),5));

log(reduce(add, [1,2,3,4,5]));