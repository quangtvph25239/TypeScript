// Generics
const numArray = [1,2,3,5,8,13] //Fibonacci
const numArray2 = ["Thu", "Hoàng", "Đức Anh"]
// const result2 = numArray.map(item => item * item)
// function we17317_map(arr: number[], callback: (item: number) => number): number[] {
//     const temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp;
// }

// Generic
function showStringData(a: string): string {
    return a
}

function showNumberData(a: number): number {
    return a
}

function showData<T>(a: T): T {
    return a
}

// showData<boolean>("string")

// function we17317_map<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const result2 = we17317_map(numArray2, (item, index) => {
//     return item + "-we17317" + " " + index
// })


const numArray3 = ["c","a","b"] 

// numArray3.sort((a, b) => {
//     // return a - b
//     return a - b
// })

// console.log(numArray3);
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] > arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
// }

// selectionSort(numArray3)
// console.log(numArray3);
const numArray10 = [5,2,6,8,3,12]
const numArray12 = ["c", "a", "b","d"]
function selectionSort1<T>(arr: T[], callback: ((a: T, b: T) => number)): T[] {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (callback(arr[j], arr[minIndex])<0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }
  return arr;
}
const result4 = selectionSort1(numArray10, (a,b)=>{
    return a-b
}) 
const result5 = selectionSort1(numArray12, (a, b) => a.localeCompare(b));
console.log(result4);
console.log(result5);
//chat gpt


// Dưới đây là một ví dụ về việc viết lại hàm sort bằng TypeScript với thuật toán quick sort cho nhiều kiểu dữ liệu khác nhau, bao gồm số nguyên, số thực và chuỗi:

// ```
function quickSort<T>(arr: T[], compareFn: (a: T, b: T) => number): T[] {
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue;
    const cmp = compareFn(arr[i], pivot);
    if (cmp < 0) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left, compareFn), pivot, ...quickSort(right, compareFn)];
}

// Sử dụng hàm sort cho mảng số nguyên
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const compareNumbers = (a: number, b: number): number => a - b;
// console.log(quickSort(numbers, compareNumbers));

// Sử dụng hàm sort cho mảng số thực
const decimals = [1.1, 2.2, 1.0, 3.5, 4.9, 3.3, 0.5];
const compareDecimals = (a: number, b: number): number => a - b;
// console.log(quickSort(decimals, compareDecimals));

// Sử dụng hàm sort cho mảng chuỗi
const strings = ["apple", "zebra", "banana", "orange", "pear"];
// const strings = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const compareStrings = (a: string, b: string): number => a.localeCompare(b);
// console.log(quickSort(strings, compareStrings));
// ```

// Trong ví dụ trên, chúng ta sử dụng generic type `<T>` để cho phép chuyển đổi giữa các kiểu dữ liệu khác nhau. Hàm sort có tham số thứ hai là một hàm so sánh (compare function), được sử dụng để so sánh hai phần tử của mảng. Hàm so sánh này trả về một số nguyên nhỏ hơn 0 nếu phần tử đầu tiên nhỏ hơn phần tử thứ hai, trả về 0 nếu bằng nhau và trả về một số nguyên lớn hơn 0 nếu phần tử đầu tiên lớn hơn phần tử thứ hai.

// Với hàm quickSort trên, chúng ta sử dụng thuật toán quick sort để sắp xếp mảng đầu vào. Các giá trị nhỏ hơn pivot sẽ được đưa vào một mảng bên trái, các giá trị lớn hơn pivot sẽ được đưa vào một mảng bên phải và cuối cùng ta ghép lại các mảng này lại với pivot ở giữa. Hàm quickSort sẽ đệ quy gọi chính nó để sắp xếp các mảng bên trái và bên phải.

// Các ví dụ trên sử dụng các hàm so sánh khác nhau cho từng kiểu dữ liệu tương ứng. Ví dụ với mảng số nguyên, chúng ta sử dụng hàm compareNumbers để so sánh hai giá trị nguyên. Các hàm so sánh này cần tuân thủ nguyên tắc so sánh, giống nhau cho cùng một kiểu dữ liệu và khác nhau cho các kiểu dữ liệu khác nhau (ví dụ, so sánh chuỗi theo thứ tự từ điển).


function selectionSort5<T>(array: T[], compare: (a: T, b: T) => number): T[] {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (compare(array[j], array[minIndex]) < 0) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [array[minIndex], array[i]] = [array[i], array[minIndex]];
      }
    }
    return array;
  }
  const numbers1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedNumbers = selectionSort5(numbers1, (a, b) => a - b);
// console.log(sortedNumbers);

const words = ["banana", "apple", "cherry", "date"];
const sortedWords = selectionSort5(words, (a, b) => a.localeCompare(b));
// console.log(sortedWords);

interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
const sortedPeople = selectionSort5(people, (a, b) => a.age - b.age);
// console.log(sortedPeople);