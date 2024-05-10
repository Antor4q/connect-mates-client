import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/Root';
import Home from './pages/Home/Home/Home';
import Assignments from './pages/Assignments/Assignments';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AuthContext from './routes/AuthContext';
import CreateAssignments from './pages/CreateAssignments/CreateAssignments';
import PendingAssignments from './pages/PendingAssignments/PendingAssignments';
import AttempedAssignments from './pages/AttempedAssignments/AttempedAssignments';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/assignments",
        element: <Assignments></Assignments>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/create",
        element: <CreateAssignments></CreateAssignments>
      },
     {
      path: "/pending",
      element: <PendingAssignments></PendingAssignments>
     },
     {
      path: "/attempted",
      element: <AttempedAssignments></AttempedAssignments>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
