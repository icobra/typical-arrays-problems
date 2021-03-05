
exports.min = function min (array) {
  if(typeof array == "undefined" || array.length == 0)
  {
    return 0;
  }
  return Math.min.apply(0,array);
}

exports.max = function max (array) {
  if(typeof array == "undefined" || array.length == 0)
  {
    return 0;
  }
  return Math.max.apply(0,array);
}

exports.avg = function avg (array) {
  if(typeof array == "undefined" || array.length == 0){
    return 0;
  }
  let average = 0;
  for(x=0; x < array.length; x++){
     average += array[x];
  }
  return average/array.length;
}
