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
import AssignmentDetails from './pages/AssignmentDetails/AssignmentDetails';
import UpdateAssignment from './pages/UpdateAssignment/UpdateAssignment';
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
     },
     {
      path: "/assignmentDetails/:id",
      element: <AssignmentDetails></AssignmentDetails>,
      loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/createAssignment`)
     },
     {
      path: "/updateAssignment/:id",
      element: <UpdateAssignment></UpdateAssignment>
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
