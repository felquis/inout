function add(num) {
  num = num || 1;

  return function Out(data) {
    return data + num;
  }
}

module.exports = add;
