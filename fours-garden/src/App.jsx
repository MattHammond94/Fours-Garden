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
import OtherProjects from "./pages/OtherProjects";
import Store from "./pages/Store";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SliderPage from "./pages/SliderPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />

      <Route path="the-garden" element={<MainLayout />} >
        <Route index element={<Home />} />
        
        <Route path="drawings" element={<Drawings />} />

        <Route path="photographs">
          <Route index element={<Photographs />} />
          <Route path="street" element={<SliderPage variant="street" />} />
          <Route path="landscapes" element={<SliderPage variant="landscapes"/>} />
          <Route path="misc" element={<SliderPage variant="misc" />} />
        </Route>

        <Route path="prints" element={<Prints />} />
        <Route path="other" element={<OtherProjects />} />
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
