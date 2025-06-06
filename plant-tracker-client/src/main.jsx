import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import AddPlants from './Components/AddPlants/AddPlants.jsx';
import AuthProvider from './Contexts/AuthProvider.jsx';
import AllPlants from './Components/AllPlants/AllPlants.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import MyPlants from './Components/MyPlants/MyPlants.jsx';
import UpdatePlants from './Components/UpdatePlant/UpdatePlant.jsx';
import PlantDetails from './Components/PlantDetails/PlantDetails.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Error from './Components/Error/Error.jsx';

// const allPlantsPromise = fetch('https://plant-tracker-server-phi.vercel.app/allplants')

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: 'addplants',
        element: <PrivateRoute><AddPlants></AddPlants></PrivateRoute>
      },
      {
        path: 'allplants',
        Component: AllPlants
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: 'home',
        Component: Home
      },
      {
        path: 'myplants',
        element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
      },
      {
        path: 'updateplant/:id',
        loader: ({ params }) => fetch(`https://plant-tracker-server-phi.vercel.app/allplants/${params.id}`),
        Component: UpdatePlants
      },
      {
        path: 'plantdetails/:id',
        loader: ({ params }) => fetch(`https://plant-tracker-server-phi.vercel.app/allplants/${params.id}`),
        Component: PlantDetails
      },
      {
        path: '*',
        Component: Error
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
