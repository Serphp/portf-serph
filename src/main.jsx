
import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from "react-router-dom";
import { router } from '../router/router'
//require('dotenv').config();

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
);