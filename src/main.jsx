import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './component/AddCoffe.jsx';
import UpdateCoffe from './component/UpdateCoffe.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'/addedcoffe',
    element:<AddCoffe></AddCoffe>
  },
  {
    path:'/updateCoffe',
    element:<UpdateCoffe></UpdateCoffe>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
