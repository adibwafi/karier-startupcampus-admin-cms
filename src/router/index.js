import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../layouts/Layout";
import LayoutCMS from "../layouts/LayoutCMS";
import LandingPage from "../views/LandingPage";
import LoginPage from "../views/LoginPage";
import RegisterUser from "../views/RegisterUser";
import Dashboard from "../views/Dashboard";
import ListJobPage from "../views/ListJobPage";
import AddJobPage from "../views/AddJobPage";
import EditJobPage from "../views/EditJobPage";
import ListApplicationPage from "../views/ListApplicationPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register-user",
        element: <RegisterUser />,
      },
    ],
  },
  {
    element: <LayoutCMS />,
    // loader: () => {
    //   if (!localStorage.getItem("access_token")) {
    //     throw redirect("/login");
    //   } else {
    //     throw redirect("/admin");
    //   }
    // },
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/list-job",
        element: <ListJobPage />,
      },
      {
        path: "/admin/list-application",
        element: <ListApplicationPage />,
      },
      {
        path: "/admin/add-job",
        element: <AddJobPage />,
      },
      {
        path: "/admin/edit-job/:id",
        element: <EditJobPage />,
      },
    ],
  },
]);

export default router;
