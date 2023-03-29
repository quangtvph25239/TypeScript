// Array
const arr: Array<string> = ["a","b","c"]

// Nested Array
const arr3: Array<Array<string>> =[["a","b","c"], ["d","e","f"]]
const arr6: string[][] =[["a","b","c"], ["d","e","f"]]

const arr5: string[] = ["a","b","c"]

// Tuple
const arr2: [string, number, boolean] = ["a", 1 , true]
// console.log(typeof arr2);

const arr4: Array<[string, number, boolean]> = [["a", 1 , true], ["a", 1 , true]]

// Enum
enum STATUS {PENDING, REJECTED, FULFILLED}
const trangthai1: STATUS = STATUS.FULFILLED

// console.log(trangthai1);

enum CODE {SUCCESS = 200, CLIENT_ERROR, SERVER_ERROR}

