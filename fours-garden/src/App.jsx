import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

/* Layouts */
import MainLayout from "./layouts/MainLayout";
import ArtworkLayout from './layouts/ArtworkLayout';

/* Pages */
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Drawings from "./pages/Drawings";
import Paintings from "./pages/Paintings";
import Prints from "./pages/Prints";
import Photographs from "./pages/Photographs";
import Misc from "./pages/Misc";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />

      <Route path="the-garden" element={<MainLayout />} >
        <Route index element={<Home />} />
      </Route>

      <Route path="artwork" element={<ArtworkLayout />} >
        <Route path="drawings" element={<Drawings />} />
        <Route path="paintings" element={<Paintings />} />
        <Route path="prints" element={<Prints />} />
        <Route path="photographs" element={<Photographs />} />
        <Route path="misc" element={<Misc />} />
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
