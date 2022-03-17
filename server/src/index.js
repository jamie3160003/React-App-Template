import Koa from 'koa';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import path from 'path';
import routes from './middlewares/routes';
import initdb from './middlewares/db';

const app = new Koa();
const PORT = process.env.PORT || 8080;

app.use(serve(path.join(__dirname, '..', '..', 'ui', 'build')));
app.use(initdb);
app.use(bodyParser());
app.use(routes);

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${8080}`);
});
