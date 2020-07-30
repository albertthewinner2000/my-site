// //function distanse

// let points = [
//     {x:0, y:0},
//     {x:1, y:1}
// ];

// //console.log(points[0].x);

// points.dist = function() {
//     let p1= this[0];
//     let p2= this[1];
//     let a = p2.x - p1.x;
//     let b = p2.y - p1.y;
//    return Math.sqrt(a*a + b*b);
// };

// //console.log(points.dist());

// //function abs

// function abs(x) {
//     if (x>=0) {
//         return x;
//     }
//     else {
//         return -x;
//     }
// }

// //console.log(abs(5)=== abs(-5))

// //finction sum 

// array1 = [1,2,4,5,13,8]

// function sum(array) {
//     let sum = 0;
//     for (let x of array) {
//         sum += x;
//     }
//     return sum;
// }

// //function factorial

// function factorial(n) {
//     let product = 1;
//     while (n > 1) {
//         product *= n;
//         n --;
//     }
//     return product;
// }

// function factorial2(n) {
//     let i, product = 1;
//     for(i=2; i <= n; i++) {
//         product*=i
//     }
//     return product;
// }

// //class Point

// class Point {
//     constructor(x,y) {
//         this.x=x;
//         this.y=y;

//     }
//     distance () {
//         return Math.sqrt(
//             this.x*this.x + this.y*this.y
//         );
//     }
// }

// let p = new Point(1,1);

// console.log(p.distance());
// //console.log("\u{1F600}"); 

// let arr = [1,3,4, 4, 13, 4, 2, 4, 5]

// arr[2] = 16

// console.log(arr[2])


// let number = 3

// number = true

// number = 'hello world'

// //console.log(number)


//  smthnew = 1 + 1;

// //console.log(smthnew)

// let word = 'hello';

// let number105 = 15
// let number110 = Number.MAX_SAFE_INTEGER

// let q = 'hello';

// let now = new Date()
// let number115 = number105*number110

// let ms = now.getTime();
// //console.log(ms)

// let string01 = 'Hello, World'
// let string02 = 'abcde'


// console.log(string01)
// //console.log(Math.round(number105*10))

// let filename  = 'distance.js';

// let quantity = 3; 

// let string = '';

// for (let index = 0; index < quantity; index++) {
//     string = string + `\u2719\n`
// }

// let errorMassage  = `${string}  Hi`;

// console.log(errorMassage);

// let regularExpressin = /d+/g;

// let text ='HTML if good 123 56 78'

// console.log(text.match(regularExpressin));


// let a = 10;
// let b = 5;

// console.log(`Fifteen is ${a+b} and not ${a-b}.`);

// let stri = [0];

// stri[1] = 13;

// stri[2] = 17;

// console.log(stri);


// console.log('Fifteen is ' + (a+b) + ' and not ' + (a-b) + '.')
//let output = myTag`That`

// function myTeg2 (personExp, ageExp ) {
//     let ageStatus
//     if (ageExp > 99) {
//         ageStatus = 'centenarian'
//     } else {
//         ageStatus = 'youngster'
//     }

//     return `This ${personExp} is a ${ageStatus}`
// }

// console.log(myTeg2(person, age))

// let person = 'Ervin'
// let age = 120;

// function myTag(strings, personExp, ageExp) {
//     let str0 = strings[0];
//     let str1 = strings[1];
//     let str2 = strings[2];

//     let ageStr;
//     if (ageExp > 99) {
//         ageStr = 'centenarian'
//     } else {
//         ageStr = 'youngster'
//     }

//     return `${str0}${personExp}${str1}${ageStr}${str2}`
// }

// let choice = 'false'

// console.log(output);

// let array_1 = [1, 3, 5]
// let variable;
// console.log(variable)

// let a; 
// function smth (a) {
//      a = a + 1;
//  }


//  let b = '';

// console.log(smth(a));

// let o = {}
// let strname = 'string1';
// let symname1 = Symbol('symstring');
// let symname2 = Symbol('symstring');

// o[strname] = 12;
// o[symname1] = 9;
// o[symname2] = 9;

// console.log(o)

// let a = globalThis

// console.log(a)

// Copy an array


// let c = a
// for (let index = 0; index < a.length; index++) {
//     b[index] = a[index];
// }
// let d = Array.from(b)
// console.log(d);

//Compare array's values
let a = [1, 5, 3, 14, 4, 5];
let b = [1, 5, 3, 14, 4, 5];

function equalArrays(arr1,arr2) {
    let isEqual = true;
    if (arr1.lenght == arr2.lenght) {
        let i = 0;
        for (i = 0; i < arr1.length; i++) {
            if (a[i] === b[i]) {
                isEqual = true;
            } else {
                i = i + arr1.length;
                isEqual = false;
            }
        }
    } else {
        isEqual = false;
    }
    return (isEqual);
}

// console.log(equalArrays(a,b));

//Characters frequency

let str_1 = 'Hi, my friend. How are you?';
str_1 = 'fff gg a rr thtt';
function charFreq(str) {
    let o = {};
    let i = 0;
    let lenght = str.lenght
    for (i; i < str.length; i++) {
        if (o[str[i]] == null) { //creation of element 
            o[str[i]] = 1; //element created
        } else {
            o[str[i]] = o[str[i]] + 1; //element iterated
        }
    }
    
    return o;
}


let charFreqVal = charFreq(str_1);
//console.log(charFreqVal);


// equalArrays function(from book D.F.) 
let arr__1 = [1, 3, 5];
let arr__2 = [1, 3, 5];

function equalArrays(a, b) {
    if (a === b) return true; 
    
    if (a.length !== b.length) return false;
    
    for(let i = 0; i < a.length; i++) { 
    
        if (a[i] !== b[i]) return false; 
    }
    return true;
}
    

console.log(equalArrays(arr__1, arr__2));

console.log(typeof(null));

//Convertions, methods 

let n = 11341.34;

let newValue = n.toString();

console.log(newValue);
console.log(typeof(newValue));

let obj = {
    first:'one',
    first:'one'
}

console.log(toString(obj));
console.log(typeof(obj));

