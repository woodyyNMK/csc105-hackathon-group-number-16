import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage/> },
      // { path: '/ItemDetail/:id', element: <ItemDetail/> },
    ],
  },
]);

export default router;
