import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Welcome from './pages/Welcome'
import Challengr from './pages/Challengr'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<Welcome />
  },
  {
    path:'/challenge',
    element:<Challengr />
  }
])



function App() {
 
return (
    <RouterProvider  router={routes} />
  )
}

export default App
