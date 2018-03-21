module.exports = function(promise) {
  return promise.then(res => {
    return [null, res];
  })
    .catch(err => [err]);
};

