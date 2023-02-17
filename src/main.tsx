import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:windi.css';
import { RouterProvider } from 'react-router-dom';
import router from '~/router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
