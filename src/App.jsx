import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home } from './Pages/Home'
import { Analysis } from './Pages/Analysis'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/analysis",
    element: <Analysis />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App