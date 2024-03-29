"use strict";
// /*
// 以下は、TypeScriptでの簡易なコーディングテストの例です。このテストは、30分程度で解決できるように設計されており、主に配列操作・オブジェクト操作の知識を問うものです。
// 1 配列の要素を2倍にする関数を実装してください。
// 2 与えられた配列の要素を逆順にする関数を実装してください。
// 3 オブジェクトから指定されたキーの値を取り出す関数を実装してください。
// 4 オブジェクトのプロパティの値を全て加算した結果を返す関数を実装してください。
// 5 配列内の重複した要素を取り除いた配列を返す関数を実装してください。
// このようなテストを解くことで、TypeScriptにおける配列操作・オブジェクト操作の基本的な知識を確認することができます。
// */
// //1
// function doubleArray(array: number[]): number[] {
//   return array.map((num) => num * 2);
// }
// //2
// function reverse(arr: []): any[] {
//   return arr.reverse();
// }
// // 3
// const obj = {
//   id: 1,
//   name: "Tanaka",
//   age: 30,
//   sex: "Male",
// };
// function getValueByKey(obj: { [key: string]: any }, key: string): any {
//   return obj[key];
// }
// //4
// const ob = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
//   e: 5,
//   f: 6,
//   g: 7,
// };
// function sumObjectValues(obj: { [key: string]: number }): number {
//   let sum: number = 0;
//   Object.values(obj).forEach((value) => (sum += value));
//   return sum;
// }
// console.log(sumObjectValues(ob));
// // // // 5
// // function removeDuplicates(array: any[]): any[] {
// //   return Array.from(new Set(array));
// // }
