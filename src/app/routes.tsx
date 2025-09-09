import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import Product from "../features/product/Product"
import Users from "../features/users/Users"


const DashboardLayout = lazy(() => import("../layout/DashboardLayout"))
const Auth = lazy(() => import("../features/auth/pages/Auth"))
const Register = lazy(() => import("../features/auth/pages/Register"))
const Login = lazy(() => import("../features/auth/pages/Login"))

const AppRoutes = () => {
  return (
    useRoutes([
      {
        path: "/", element: <Auth />, children: [
          {
            path: '/',
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <Product/>
              },
              {
                path: 'user',
                element: <Users />
              },
            ]
          }
        ]
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ])
  )}

  export default AppRoutes
