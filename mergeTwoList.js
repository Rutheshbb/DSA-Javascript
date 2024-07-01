var mergeTwoLists = function (list1, list2) {
  const newList = list1.concat(list2).sort();
  console.log(newList);
};

mergeTwoLists([], [0]);
