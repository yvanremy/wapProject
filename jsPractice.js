(function() {
  "use strict";

  let arrayValue = [1, 2, 3, 4, 5, 9];

  window.onload = function() {
    console.log("Below is Array into List Function");
    console.log(arrayIntoList([1, 2, 3, 4, 5]));
    console.log(
      "List into Array with listIntoArray(0,arrayIntoList([1,2,3,4])) :==>  " +
        listIntoArray(0, arrayIntoList([1, 2, 3, 4]))
    );
    console.log(
      "Reverse Array [1, 2, 3, 4, 5, 9] :==> " +
        reverseArray([1, 2, 3, 4, 5, 9])
    );
    console.log(
      "Reverse Array in place called arrayValue [1, 2, 3, 4, 5, 9] :==> " +
        reverseArrayInPlace(arrayValue)
    );
    console.log(
      "Below is Prepend Function --prependList(10, prependList(20, null))"
    );
    console.log(prependList(10, prependList(20, null)));

    //console.log("Nth Function :===> " + nth(arrayIntoList([10, 20, 30]), 1));
    console.log("Comparison");

    let obj = { c: { is: "an" }, object: 2 };

    console.log(deepEqual(obj, obj));

    console.log(deepEqual(obj, { c: 1, object: 2 }));

    console.log(deepEqual(obj, { c: { is: "an" }, object: 2 }));
  };

  //---------------Reverse an Array ------------
  function reverseArray(arr) {
    let rev = [];
    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      rev[count] = arr[i];
      count++;
    }
    return rev;
  }
  function reverseArrayInPlace(array) {
    var i = 0,
      n = array.length,
      middle = Math.floor(n / 2),
      temp = null;
    for (; i < middle; i += 1) {
      temp = array[i];
      array[i] = array[n - 1 - i];
      array[n - 1 - i] = temp;
    }
    return array;
  }
  //reverseArrayInPlace(arrayValue);
  //console.log("the inplace values: " + arrayValue);

  //------------------ A LIST -----------------------------

  // Array into List
  function arrayIntoList(array) {
    let list = {};
    if (array.length < 1) {
      return array;
    }

    if (array.length < 2) {
      return {
        value: array[0],
        rest: null
      };
    }

    list.value = array[0];
    list.rest = arrayIntoList(array.slice(1));

    return list;
  }

  // List into Array

  let array = [];
  function listIntoArray(counter, list) {
    if (list !== null) {
      array[counter] = list.value;
      listIntoArray(counter + 1, list.rest);
    }
    return array;
  }

  // Prepend Function

  function prependList(el, list) {
    let node = {};
    node.value = el;
    node.rest = list;
    return node;
  }

  //nth function

  function nth(n, list) {
    let array = listIntoArray(list);
    return arr[num];
  }

  // Deep Equal Function ** worked in group, shared idea with another student**
  function deepEqual(val1, val2) {
    let v1 = typeof val1;
    let v2 = typeof val2;

    if (val1 === val2) {
      return true;
    }

    if (v1 === "object" && v2 === "object") {
      if (!val1 || !val2) {
        return false;
      }
      let keys1 = Object.keys(val1);
      let keys2 = Object.keys(val2);

      if (keys1.length !== keys2.length) {
        return false;
      } else {
        return keys1.every(function(key) {
          return deepEqual(val1[key], val2[key]);
        });
      }
    } else {
      return false;
    }
  }
})();
