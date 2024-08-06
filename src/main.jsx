import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contents from './assets/Papers/Contents.jsx'
import Mock from './assets/Mocks/Mock.jsx'
import English from './assets/Papers/Subjects/English.jsx'
import Mathematics from './assets/Papers/Subjects/Mathematics.jsx'
import Kiswahili from './assets/Papers/Subjects/Kiswahili.jsx'
import Chemistry from './assets/Papers/Subjects/Chemistry.jsx'
import French from './assets/Papers/Subjects/French.jsx'
import Geography from './assets/Papers/Subjects/Geography.jsx'
import Histrory from './assets/Papers/Subjects/History.jsx'
import Biology from './assets/Papers/Subjects/Biology.jsx'
import Business from './assets/Papers/Subjects/Business.jsx'
import Computer from './assets/Papers/Subjects/Computer.jsx'
import Physics from './assets/Papers/Subjects/Physics.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "papers",
    element: <Contents/>,
  },
  {
    path: "mocks",
    element: <Mock/>,
  },
  {
    path: "english",
    element: <English/>,
  },
  {
    path: "mathematics",
    element: <Mathematics/>,
  },
  {
    path: "kiswahili",
    element: <Kiswahili/>,
  },
  {
    path: "chemistry",
    element: <Chemistry/>,
  },
  {
    path: "physics",
    element: <Physics/>,
  },
  {
    path: "biology",
    element: <Biology/>,
  },
  {
    path: "geography",
    element: <Geography/>,
  },
  {
    path: "history",
    element: <Histrory/>,
  },
  {
    path: "computer",
    element: <Computer/>,
  },
  {
    path: "french",
    element: <French/>,
  },
  {
    path: "business",
    element: <Business/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
