import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, createRoutesFromElements, Navigate, RouterProvider } from 'react-router-dom';
import MainPags from './Page/MainPags.jsx';
import LoginPage from './Page/login/LoginPage.jsx';
import AdminPage from './Page/Admin/AdminPage.jsx';
import EditImagePage from './Page/EditImages/EditImagePage.jsx';
import EditSectionPage from './Page/EditSection/EditSectionPage.jsx';
import AddImagePage from './Page/AddImage/AddImagePage.jsx';
import AddSectionPage from './Page/AddSection/AddSectionPage.jsx';
import AddCardPage from './Page/Card/AddCardPage.jsx';
import EditCardPage from './Page/Card/EditCardPage.jsx';
import DeleteCardPage from './Page/Card/DeleteCardPage.jsx';
import DeleteSectionPage from './Page/DeleteSection/DeleteSectionPage.jsx';
import DeleteImagePage from './Page/DeleteImage/DeleteImagePage.jsx';
import ContactUs from './Components/Contact/ContactUs.jsx';
import AboutUs from './Components/About/AboutUs.jsx';
import FirstAdPage from './Page/FirstAd/FirstAdPage.jsx';
import NewPage from './Page/NewEdit/NewPage.jsx';

const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<MainPags />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/ad" element={<FirstAdPage />} />
      <Route path="/new" element={<NewPage />} />
      
      <Route path="/admin" element={isLoggedIn() ? <AdminPage /> : <Navigate to="/login" replace />} />
      <Route path="/edit-images" element={isLoggedIn() ? <EditImagePage /> : <Navigate to="/login" replace />} />
      <Route path="/edit-section" element={isLoggedIn() ? <EditSectionPage /> : <Navigate to="/login" replace />} />
      <Route path="/add-image" element={isLoggedIn() ? <AddImagePage /> : <Navigate to="/login" replace />} />
      <Route path="/add-section" element={isLoggedIn() ? <AddSectionPage /> : <Navigate to="/login" replace />} />
      <Route path="/add-card" element={isLoggedIn() ? <AddCardPage /> : <Navigate to="/login" replace />} />
      <Route path="/edit-cards" element={isLoggedIn() ? <EditCardPage /> : <Navigate to="/login" replace />} />
      <Route path="/delete-cards" element={isLoggedIn() ? <DeleteCardPage /> : <Navigate to="/login" replace />} />
      <Route path="/delete-section" element={isLoggedIn() ? <DeleteSectionPage /> : <Navigate to="/login" replace />} />
      <Route path="/delete-images" element={isLoggedIn() ? <DeleteImagePage /> : <Navigate to="/login" replace />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
