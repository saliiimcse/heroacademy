import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Course from './components/Course/Course';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
<<<<<<< HEAD
import RequireAuth from './components/Signup/RequireAuth';
=======
import PageNotFound from './components/PageNotFound/PageNotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
>>>>>>> a67618d (creat userContext)
import Signup from './components/Signup/Signup';


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
<<<<<<< HEAD
          element:<RequireAuth><Course></Course></RequireAuth>
=======
          element:<Course></Course>
>>>>>>> a67618d (creat userContext)

        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        },
        {
          path:'/blog',
          element:<RequireAuth><Blog></Blog></RequireAuth>
        },
        {
          path:'/*',
          element:<PageNotFound></PageNotFound>
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
