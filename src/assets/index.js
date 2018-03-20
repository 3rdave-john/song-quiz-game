const context = require.context('./images', true, /.png$/);

const obj = {};
context.keys().forEach((key) => {
  const imageCode = key.split('./').pop() // remove the first 2 characters
    .substring(0, key.length - 6); // remove the file extension
  obj[imageCode] = context(key);

});

export default obj;