import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectDetail from "../components/ProjectDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/skills',
        element: <Skills></Skills>
      }
    ]
  },
  {
    path: '/project/:id',
    element: <ProjectDetail></ProjectDetail>
  }
]);

export default router;