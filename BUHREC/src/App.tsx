import Client from "./Layout/Client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    errorElement: "",
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
