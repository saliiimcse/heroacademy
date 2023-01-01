import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Course from './components/Course/Course';
import CourseData from './components/CourseData/CourseData';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
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
          loader:() => fetch('https://server-saliiimcse.vercel.app/book'),
          element:<Course></Course>

        },
        {
          path:'/course/:bookId',
          loader: async ({params}) =>{
            return fetch(`https://server-saliiimcse.vercel.app/book/${params.bookId}`);
         },
         element:<RequireAuth><CourseData></CourseData></RequireAuth>
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
          element:<Blog></Blog>
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
