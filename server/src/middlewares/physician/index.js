export default async (ctx, next) => {
  ctx.body = ctx.db.get('physicians');
  await next();
};
