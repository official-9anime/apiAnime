const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(3000, '192.168.1.17');

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`\n🚀 ... Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});