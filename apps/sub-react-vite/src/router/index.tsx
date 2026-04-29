import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import config from '../config'

const router = createBrowserRouter([
  {
    path: '/react/home',
    element: <Home />
  },
  {
    path: '/react/about',
    element: <About />
  }
], {
  basename: config.basePath
})

export default router
