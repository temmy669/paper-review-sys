import { Client } from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Login } from "./pages/index";
import { ProtectedRoute } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      // { path: "/about", element: <About /> },
      // { path: "/about", element: <About /> },
      // { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: "",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
