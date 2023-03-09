var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
問題1
以下のようなオブジェクトが格納された配列があります。
const data = [
  { id: 3, name: 'Alice', age: 24 },
  { id: 1, name: 'Bob', age: 32 },
  { id: 2, name: 'Charlie', age: 18 },
];
この配列を、idの昇順にソートしてください。

*/
var data1 = [
    { id: 3, name: "Alice", age: 24 },
    { id: 1, name: "Bob", age: 32 },
    { id: 2, name: "Charlie", age: 18 },
];
var newArr1 = __spreadArray([], data1, true).sort(function (a, b) {
    return a.id < b.id ? -1 : 1;
});
console.log(newArr1);
/*
問題2
以下のようなオブジェクトが格納された配列があります。
const data = [
  { id: 1, name: 'Alice', age: 24 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 18 },
];
この配列から、idが2のオブジェクトを削除し、削除後の配列を表示してください。
*/
var data2 = [
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charlie", age: 18 },
];
for (var i = 0; i < data2.length; i++) {
    if (data2[i].id === 2) {
        data2.splice(i, 1);
        i--;
    }
}
console.log(data2);
/*
問題3
以下のようなオブジェクトが格納された配列があります。
const data = [
  { id: 1, name: 'Alice', age: 24 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 18 },
  { id: 4, name: 'David', age: 28 },
];

この配列から、ageが25未満のオブジェクトのみを抽出した配列を表示してください。

*/
var data3 = [
    { id: 1, name: "Alice", age: 24 },
    { id: 2, name: "Bob", age: 32 },
    { id: 3, name: "Charlie", age: 18 },
    { id: 4, name: "David", age: 28 },
];
var newArr3 = data3.filter(function (v) { return v.age < 25; });
console.log(newArr3);
