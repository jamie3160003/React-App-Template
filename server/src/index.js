import Koa from 'koa';

const app = new Koa();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${8080}`);
});
