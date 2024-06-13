import React from 'react'
import ReactDOM from 'react-dom/client'
import RecipePage from './routes/RecipePage'
import Errorpage from './routes/Errorpage'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipePage />,
    errorElement: <Errorpage />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
);
