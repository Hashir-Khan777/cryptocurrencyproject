import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Backers,
  Home,
  Login,
  Project,
  Satrtup,
  Category,
  Analytics,
  Profile,
} from "./../pages";
import { Box } from "@chakra-ui/react";
import Layout from "../layout";

const styles = { container: { flex: 1 } };

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Box sx={styles.container}>
            <Home />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/login",
        element: (
          <Box sx={styles.container}>
            <Login />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/project/:id",
        element: (
          <Box sx={styles.container}>
            <Project />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/startup",
        element: (
          <Box sx={styles.container}>
            <Satrtup />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/backers",
        element: (
          <Box sx={styles.container}>
            <Backers />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/categories",
        element: (
          <Box sx={styles.container}>
            <Category />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/project/analytics/:id",
        element: (
          <Box sx={styles.container}>
            <Analytics />
          </Box>
        ),
        caseSensitive: true,
      },
      {
        path: "/profile",
        element: (
          <Box sx={styles.container}>
            <Profile />
          </Box>
        ),
        caseSensitive: true,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
