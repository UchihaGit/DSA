class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }
  hash(key, arrayLen = this.keyMap.length) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
  }
  set(key, value) {
    let idx = this.hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, value]);
  }
  get(key) {
    let idx = this.hash(key);
    let value = this.keyMap[idx].find((pair) => pair[0] === key && pair);
    return value;
  }
  keys() {
    let keys = [];
    this.keyMap.forEach((column) => {
      if (Array.isArray(column)) {
        column.forEach((pair) => keys.push(pair[0]));
      }
    });
    return keys;
  }
  values() {
    let values = [];
    this.keyMap.forEach((column) => {
      if (Array.isArray(column)) {
        column.forEach((pair) => values.push(pair[1]));
      }
    });
    return values;
  }
}

// [
//   [[1, 2]],
//   [
//     [2, 3],
//     [3, 4],
//   ],
// ];

const ht = new HashTable(4);
ht.set("name", "colt");
ht.set("name1", "colt");
ht.set("name2", "colt");
ht.set("name3", "colt");
ht.set("name4", "colt");
console.log(ht.keyMap);
console.log(ht.keys());
console.log(ht.values());
