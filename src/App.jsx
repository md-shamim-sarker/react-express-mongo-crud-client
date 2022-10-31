import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DisplayData from './components/DisplayData';
import ErrorPage from './components/ErrorPage';
import InsertData from './components/InsertData';
import UpdateData from './components/UpdateData';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => fetch(`http://localhost:5000/users/`),
      element: <DisplayData></DisplayData>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/insertData',
      element: <InsertData></InsertData>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/update/:id',
      loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
      element: <UpdateData></UpdateData>,
      errorElement: <ErrorPage></ErrorPage>
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;