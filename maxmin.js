var arr = [8, 9, 6, 2, 1, 4, 7, 8, 5];
function maxmin(...arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  return console.log(`max is ${max} and min is ${min}`);
}
maxmin(...arr);
