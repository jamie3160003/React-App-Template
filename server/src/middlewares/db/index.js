import NodeCache from 'node-cache';

const cache = new NodeCache();

// mock existing data in the db
cache.set('test', []);

const initdb = async (ctx, next) => {
  ctx.db = cache;
  await next();
};

export default initdb;
