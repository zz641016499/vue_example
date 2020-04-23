function deepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCopy(obj[key]);
    }
  }

  return result;
}


module.exports  = {
  deepCopy
}
