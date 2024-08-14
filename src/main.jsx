import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import {
  RouterProvider,
} from "react-router-dom";
import WebPaths from './Routes/WebPaths.jsx'
import ContextApi from './AllContext/ContextApi.jsx';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ContextApi>
      <React.StrictMode>
        <RouterProvider router={WebPaths} />
        <Toaster />
      </React.StrictMode>
    </ContextApi>
  </QueryClientProvider>
)
