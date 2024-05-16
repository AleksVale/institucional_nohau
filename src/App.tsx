import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { routes } from './Routes'
import './global.css'
import 'react-toastify/dist/ReactToastify.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <HelmetProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Helmet titleTemplate="%s | NOHAU" />
      <RouterProvider router={routes} />
      <ToastContainer theme="dark" />
      </ThemeProvider>

    </HelmetProvider>

  )
}

export default App
