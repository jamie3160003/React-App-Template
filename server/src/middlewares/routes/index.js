import compose from 'koa-compose';
import Router from 'koa-router';
import getAppointments from '../appointment';
import getPhysicians from '../physician';

const router = new Router({ prefix: '/api' });

router.get('/physicians', getPhysicians);
router.get('/appointments', getAppointments);

export default compose([router.routes(), router.allowedMethods()]);
