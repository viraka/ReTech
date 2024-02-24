import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import './App.css'
import { PrivateRoute } from './services/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Search from './pages/Search/Search';

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/home",
      element: <PrivateRoute />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "var(--border)",
              color: "var(--foreground)",
            },
          },
          error: {
            style: {
              background: "var(--border)",
              color: "var(--foreground)",
            },
          },
        }}
      />
    </>
  )
}

export default App
