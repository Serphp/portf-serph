import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import ConProvider from '../context/ConProvider.jsx'
import { router } from '../router/router'

ReactDOM.createRoot(document.getElementById("main")).render(
    <React.StrictMode>
        <ConProvider>
        <RouterProvider router={router} />
        </ConProvider>
    </React.StrictMode>
);