import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

/* Layouts */
import MainLayout from "./layout/MainLayout";

/* Pages */
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Drawings from "./pages/Drawings";
import Prints from "./pages/Prints";
import Photographs from "./pages/Photographs";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import PhotoSlider from './components/PhotoSlider';
import Modal from './components/Modal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />

      <Route path="the-garden" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="drawings" element={<Drawings />} />

        <Route path="photographs">
          <Route index element={<Photographs />} />
          <Route path="street" element={<Modal />} />
          <Route path="landscapes" element={<Modal />} />
          <Route path="misc" element={<Modal />} />
        </Route>

        <Route path="prints" element={<Prints />} />
        <Route path="store" element={<Store />} />
      </Route>

      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </>
  )
)

function App() {

  return (
   <RouterProvider router={router} />
  )
}

export default App
