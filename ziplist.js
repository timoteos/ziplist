/**
 * Attempt 1: 13:23 Min
 */

function zipList(list1, list2) {
  let newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i]);
    newList.push(list2[i]);
  }
  return newList;
}

console.log("ZipList", zipList(['a','b','c'], [1,2,3]));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log("ZipListTheSimplyWay: " ,zipListTheSimpleWay(['a','b','c'], [1,2,3]));