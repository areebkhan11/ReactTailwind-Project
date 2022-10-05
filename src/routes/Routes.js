import React, {lazy} from "react";

import { Navigate } from 'react-router-dom';

// ---------Layouts---------------
const FullLayout = lazy(()=> import('../components/layouts/FullLayout'))
const BlankLayout = lazy(()=> import('../components/layouts/BlankLayout') )


// ---------Pages---------------
const Dashboard = lazy(()=> import('../pages/Dashboard'))
const SignIn = lazy(()=> import('../pages/SignIn') )
const Posts = lazy(()=> import('../components/Posts/Posts'))



const Router =  [
    
      {
        path:"/",
        element: <FullLayout />,
        children: [
            { path: "/",  element:<Navigate to="/dashboard"/>},
            { path: "/dashboard", element: <Dashboard /> },
            { path: '*', element: <Navigate to="/dashboard" /> },
            { path: '/Posts', element: <Posts /> },
            
          ]
        }
    
  ]


  export const unAuthRoute = [
    {
      element: <BlankLayout />,
      path:"/",
      children: [
          { path: "/",  element:<Navigate to="/signin"/>},
          { path: "/signin", element: <SignIn /> },
          { path: '*', element: <Navigate to="/signin" /> },
          
        ]
      }
  ]

  export default Router;
