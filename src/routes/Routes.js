import React, {lazy} from "react";

import { Navigate } from 'react-router-dom';

// ---------Layouts---------------
const FullLayout = lazy(()=> import('../components/layouts/FullLayout'))
const BlankLayout = lazy(()=> import('../components/layouts/BlankLayout') )


// ---------Pages---------------
const Dashboard = lazy(()=> import('../pages/Dashboard'))
const Setups = lazy(()=> import('../pages/Setups'))
const ClientManagement = lazy(()=> import('../components/ClientManagement'))
const Allowances = lazy(()=> import('../components/Allowances'))
const NewAllowances = lazy(()=> import('../components/NewAllowances'))
const SignIn = lazy(()=> import('../pages/SignIn') )
const EventTypeSetup = lazy(()=> import('../components/Setups/EventTypeSetup'))
const GeoMappingInterval = lazy(()=> import('../components/Setups/GeoMappingInterval'))
const RemoveVehicle = lazy(()=> import('../components/Setups/RemoveVehicle'))
const SupplierList = lazy(()=> import('../components/Setups/SuppliesList'))
const TaskOutcomeTarget = lazy(()=> import('../components/Setups/Task-Outcome-TargetSetup'))
const TicketID = lazy(()=> import('../components/Setups/TicketID'))
const Posts = lazy(()=> import('../components/Posts/Posts'))



const Router =  [
    
      {
        path:"/",
        element: <FullLayout />,
        children: [
            { path: "/",  element:<Navigate to="/dashboard"/>},
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/Setups", element: <Setups/> },
            { path: "/clientmanagement", element: <ClientManagement /> },
            { path: "/allowances", element: <Allowances /> },
            { path: "/newallowances", element: <NewAllowances /> },
            { path: "/eventtypesetup", element: <EventTypeSetup /> },
            { path: "/geomappinginterval", element: <GeoMappingInterval /> },
            { path: "/removevehicle", element: <RemoveVehicle /> },
            { path: "/supplierlist", element: <SupplierList /> },
            { path: "/taskoutcometarget", element: <TaskOutcomeTarget /> },
            { path: "/ticketID", element: <TicketID /> },
            { path: '*', element: <Navigate to="/dashboard" /> },
            // { path: '/Posts', element: <Posts /> },
            
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
