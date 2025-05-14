
import './App.css';
import AdoptAPet from './components/Adoptapet';
import Communities from './components/Communities';

import Events from './components/Events';
import NotFound from './components/NotFound';
import UnleashBody1 from './components/unleash-body1'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {
 
   const router=createBrowserRouter([
    {
      path:'/',
      element:<UnleashBody1/>,
      errorElement:<NotFound/>
    },{
      path:'/adoptions',
      element:<AdoptAPet/>,
      errorElement:<NotFound/>
    },{
      path:'/events',
      element:<Events/>,
      errorElement:<NotFound/>
    },{
      path:'/communities',
      element:<Communities/>,
      errorElement:<NotFound/>
    }
   ])
  return (
    <> 
    <RouterProvider router={router}/>
       
    </>
  )
}

export default App
