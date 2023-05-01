import React from "react";
import Home from '../pages/home/index.jsx'
import About from '../pages/about/index.jsx'
import Portfolio from '../pages/portofolio/index.jsx'
import Layout from "../components/layout/index.jsx";

import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            }
        ]
    }

]);

export default router