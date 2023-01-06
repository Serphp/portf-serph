
import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import ConProvider from '../context/ConProvider.jsx'
import { router } from '../router/router'
//require('dotenv').config();

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <ConProvider>
        <RouterProvider router={router} />
        </ConProvider>
    // </React.StrictMode>
);