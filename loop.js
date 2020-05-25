const log = console.log;
log('Arr ==============');
const arr = [1,2,3];
// arr[Symbol.iterator] = null;
let iter1 = arr[Symbol.iterator]();
iter1.next();
iter1.next();
for(const a of iter1) log(a);


log('Set ==============');
const set = new Set([1,2,3]);
for (const a of set) log(a);

log('Map ==============');
const map = new Map([['a',1], ['b',2], ['c',3]]);
let iter2 = map[Symbol.iterator]();
iter2.next();
for(const a of iter2 )log(a);

// ## 이터러블/이터레이터 프로토콜
//  - 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
//  - 이터레이터 : { value, done } 객체를 리턴하는 next() 를 가진 값
//  - 이러러블/이터레이터 프로토콜 : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

// ### 사용자 정의 이터러블을 통해 알아보기

const iterable = {
    [Symbol.iterator]() {
        let i =3;
        return {
            next() {
                return i== 0? {done: true} : {value: i-- , done: false}
            },
            [Symbol.iterator]() {return this;}
        }
    }
}
let iterator  = iterable[Symbol.iterator]();
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());

// for(const a of iterable) log(a);

// const arr2 = [1,2,3];
// let iter3 = arr2[Symbol.iterator]();
// iter3.next();
// for(const a of iter3) log(a);

// for(const a of document.querySelectorAll('*')) log(a);
// const all = document.querySelectorAll('*');
// let iter4 = all[Symbol.iterator]();
// log(iter4.next());
// log(iter4.next());
// log(iter4.next());


console.clear()
const a = [1, 2];
// a[Symbol.iterator] = null;
log(...a, ...arr, ...set, ...map.keys())