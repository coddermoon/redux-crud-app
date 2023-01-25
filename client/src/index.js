import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
 <RouterProvider router={routes} />
 </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
