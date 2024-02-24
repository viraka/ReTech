import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import './App.css'

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
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/",
      element: <Home />,
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
