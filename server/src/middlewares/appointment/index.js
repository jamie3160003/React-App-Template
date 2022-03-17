import { parse } from 'querystring';

export default async (ctx, next) => {
  const {
    request: { querystring },
  } = ctx;

  ctx.assert(querystring !== '', 400, 'Please provide a physician id');

  const { physicianId } = parse(querystring);
  ctx.assert(physicianId, 400, 'Please provide a physician id');

  const physicians = ctx.db.get('physicians');
  const index = physicians.findIndex((d) => d.id === parseInt(physicianId, 10));
  ctx.assert(index > -1, 400, 'Physician not found');

  const { appointments } = physicians[index];
  ctx.body = appointments;
  await next();
};
