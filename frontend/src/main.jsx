import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';
import MainPags from './Page/MainPags.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<MainPags />}></Route>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
