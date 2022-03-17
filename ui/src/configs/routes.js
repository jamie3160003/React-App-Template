import loadable from 'react-loadable';
import PageLoading from '../components/PageLoading';

const getLoadable = (loader) =>
  loadable({
    loader,
    loading: PageLoading,
  });

const routes = [
  {
    path: '/',
    Component: getLoadable(() => import('../screens/Home')),
  },
];

export default routes;
