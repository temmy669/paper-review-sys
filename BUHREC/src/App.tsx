import { Client, DashBoardLayout } from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Login,
  AdminLogin,
  Reviewer,
  Submit,
  ErrorPage,
  Upload,
  PendingSubmissions,
  PastSubmissions,
} from "./pages/index";
import { ProtectedRoute } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          // <ProtectedRoute>
          <Home />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          // <ProtectedRoute>
          <About />
          // </ProtectedRoute>
        ),
      },
      {
        path: "/Submit",
        element: (
          <ProtectedRoute>
            <Submit />
          </ProtectedRoute>
        ),
      },
      // { path: "/certificate", element: <Certificate /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: "",
  },
  {
    path: "ReviewerLogin",
    element: <Reviewer />,
    errorElement: "",
  },
  {
    path: "AdminLogin",
    element: <AdminLogin />,
    errorElement: "",
  },
  {
    path: "/Dashboard",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Dashboard/Upload",
        element: (
          <ProtectedRoute>
            <Upload />
          </ProtectedRoute>
        ),
        errorElement: "",
      },
      {
        path: "/Dashboard/PastSubmissions",
        element: (
          <ProtectedRoute>
            <PastSubmissions />
          </ProtectedRoute>
        ),
        errorElement: "",
      },
      {
        path: "/Dashboard/Pending",
        element: (
          <ProtectedRoute>
            <PendingSubmissions />
          </ProtectedRoute>
        ),
        errorElement: "",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
