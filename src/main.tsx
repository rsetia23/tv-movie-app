import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotFound from './NotFound.tsx'
import MovieDetail from './MovieDetail.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {path: "/", element: <App />}, 
    {path: "*", element: <NotFound />},
    {path: "/movie/:id", element: <MovieDetail />}
  ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
