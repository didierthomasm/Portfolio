import {StrictMode} from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


import App from './App.jsx';
import Error from './pages/Error.jsx';
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";
import {Test} from "./pages/Test.jsx";



import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      // Redirect to '/AboutMe' when the base URL is hit
      {
        index: true,
        element: <Navigate to="/AboutMe" replace />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Test',
        element: <Test />,
      },
      // If you want Home to be accessible via its own path:
      {
        path: '/Home',
        element: <Home />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
