function say(data) {
  console.log('log: ', data);

  return function Out(data) {
    return data;
  }
}

module.exports = say;
