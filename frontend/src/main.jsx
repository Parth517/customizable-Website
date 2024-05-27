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
import EditImagePage from './Page/EditImages/EditImagePage.jsx';
import EditSectionPage from './Page/EditSection/EditSectionPage.jsx';
import AddImagePage from './Page/AddImage/AddImagePage.jsx';
import AddSectionPage from './Page/AddSection/AddSectionPage.jsx';
import AddCardPage from './Page/Card/AddCardPage.jsx';
import EditCardPage from './Page/Card/EditCardPage.jsx'
import DeleteCardPage from './Page/Card/DeleteCardPage.jsx';
import DeleteSectionPage from './Page/DeleteSection/DeleteSectionPage.jsx';
import DeleteImagePage from './Page/DeleteImage/DeleteImagePage.jsx';


const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<MainPags />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/admin" element={isLoggedIn() ? <AdminPage /> : <Navigate to="/login" replace />}></Route>
      <Route path="/edit-images" element={isLoggedIn() ? <EditImagePage /> : <Navigate to="/login" replace />}></Route>
      <Route path="/edit-section" element={isLoggedIn() ? <EditSectionPage />: <Navigate to="/login" replace />}></Route>
      <Route path="/add-image" element={isLoggedIn() ? <AddImagePage />: <Navigate to="/login" replace />}></Route>
      <Route path="/add-section" element={isLoggedIn() ? <AddSectionPage />: <Navigate to="/login" replace />}></Route>
      <Route path="/add-card" element={isLoggedIn() ? <AddCardPage />: <Navigate to="/login" replace />}></Route>
      <Route path="/edit-cards" element={isLoggedIn() ? <EditCardPage />: <Navigate to="/login" replace />}></Route>
      <Route path="/delete-cards" element={isLoggedIn() ? <DeleteCardPage />: <Navigate to="/login" replace />}></Route>
      <Route path="/delete-section" element={isLoggedIn() ? <DeleteSectionPage />: <Navigate to="/login" replace />}></Route>
      <Route path="/delete-images" element={isLoggedIn() ? <DeleteImagePage />: <Navigate to="/login" replace />}></Route>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
