import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,
  Route,
  createRoutesFromElements,Navigate,
  RouterProvider} from 'react-router-dom';
import MainPags from './Page/MainPags.jsx';
import LoginPage from './Page/login/LoginPage.jsx'
import AdminPage from './Page/Admin/AdminPage.jsx';

const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<MainPags />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/admin" element={isLoggedIn() ? <AdminPage /> : <Navigate to="/login" replace />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
