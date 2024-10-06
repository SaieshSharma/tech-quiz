
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
;
import Home from './pages/Home';
import Quiz from './pages/Quiz';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      </>
  )
);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
);