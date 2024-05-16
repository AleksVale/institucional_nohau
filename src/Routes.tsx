import { createBrowserRouter } from 'react-router-dom'
import { Expert } from './Expert'
import { Home } from './Home'

export const routes = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/expert', element: <Expert /> },
])
