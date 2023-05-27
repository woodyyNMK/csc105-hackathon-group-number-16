import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import MenuDetail from './MenuDetail';
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage/> },
      { path: '/MenuDetail', element: <MenuDetail/> },
    ],
  },
]);

export default router;
