function isSameType(value1, value2) {
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    return isNaN(value1) && isNaN(value2) || !isNaN(value1) && !isNaN(value2);
  }
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));