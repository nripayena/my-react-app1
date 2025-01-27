import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // No need for createRoutesFromElements
import './index.css';
import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import Y2k from './components/Y2k/Y2k.jsx';
import DarkFem from './components/DarkFem/DarkFem.jsx';
import CottageCore from './components/CottageCore/CottageCore.jsx';
import OldMoney from './components/OldMoney/OldMoney.jsx';

// Define the routes directly using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />  // Home page has its own layout
  },
  {
    path: "/",
    element: <Layout />,  // Layout for the rest of the app
    children: [
      {
        path: "y2k",  // Y2k page is nested under Layout
        element: <Y2k />
      },
      {
        path: "darkfem",  // Baddie page is nested under Layout
        element: <DarkFem />
      },
      {
        path: "oldmoney",  // OldMoney page is nested under Layout
        element: <OldMoney />
      },
      {
        path: "cottagecore",  // CottageCore page is nested under Layout
        element: <CottageCore />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
