import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import Product from "../features/product/Product"
import User from "../features/user/user"

const DashboardLayout = lazy(() => import("../layout/DashboardLayout"))
const Auth = lazy(() => import("../features/auth/pages/Auth"))
const Register = lazy(() => import("../features/auth/pages/Register"))
const Login = lazy(() => import("../features/auth/pages/Login"))

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { index: true, element: <Auth /> },
        { path: "product", element: <Product /> },
        { path: "user", element: <User/> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ])
}

export default AppRoutes
