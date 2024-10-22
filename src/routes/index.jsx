import { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Layout from '../components/Layout'
import Events from '../pages/Events'
import EventDetail from '../pages/Events/components/EventDetail'
import Profile from '../pages/Profile'
import MyInfo from '../pages/Profile/components/MyInfo'
import LikedEvents from '../pages/Profile/components/LikedEvents'
import Error404 from '../pages/Errors/Error404'
import ErrorBoundary from '../components/ErrorBoundary'

const routes = [
    {
        path: '/',
        element: <Layout><Events /></Layout>,
        errorElement: <Error404 />,
    },
    {
        path: '/events/:eventId',
        element:
            <Suspense fallback={<div>Cargando...</div>}>
                <ErrorBoundary fallback={<div>Ha ocurrido un error al obtener el detalle</div>}>
                    <Layout><EventDetail /></Layout>
                </ErrorBoundary>
            </Suspense>
        ,
    },
    {
        path: '/profile',
        element: <Layout><Profile /></Layout>,
        children: [
            {
                path: '',
                element: <LikedEvents />
            },
            {
                path: 'my-info',
                element: <MyInfo />
            },
        ]
        // errorElement: ,
    },
    {
        path: '*',  // Esto captura todas las rutas no definidas
        element: <Navigate to="/" />
    }
]

const browserRouter = createBrowserRouter(routes)

const BrowserRouterProvider = () => <RouterProvider router={browserRouter} />

export default BrowserRouterProvider