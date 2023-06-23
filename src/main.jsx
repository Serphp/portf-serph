
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';

import { RouterProvider } from "react-router-dom";
import { router } from '../router/router'
//require('dotenv').config();

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <>
    <Analytics />
    <RouterProvider router={router} />
    </>

    // </React.StrictMode>
);