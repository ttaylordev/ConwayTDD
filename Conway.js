module.exports = function(arr) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      if (arr[i - 1] == 0 || arr[i + 1] == 0) {
        result.push(0)
      } else {
        result.push(1)
      }
    } else {
      result.push(0)
    }
  }
  return result
}
