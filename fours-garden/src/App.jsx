import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />

      <Route path="the-garden" element={<Home />} />

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
