const { callback, promiseRes, generatorRes, asyncAwait, event } = require('../index.js');

// test('callback', done => {
//   callback();
//   // 延迟一秒结束
//   setTimeout(done, 1000);
// });

// test('promise', done => {
//   promiseRes();
//   // 延迟一秒结束
//   setTimeout(done, 1000);
// });

// test('Generator', done => {
//   generatorRes;
//   // 延迟一秒结束
//   setTimeout(done, 1000);
// });

// test('AsyncAwait', done => {
//   asyncAwait();
//   // 延迟一秒结束
//   setTimeout(done, 1000);
// });

it('event', (done) => {
  event();
  // 延迟一秒结束
  setTimeout(done, 1000);
});
