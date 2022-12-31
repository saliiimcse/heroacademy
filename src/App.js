import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Course from './components/Course/Course';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/course',
          element:<Course></Course>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
