import DefaultLayout from "./layout/DefaultLayout"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import Contacts from "./pages/Contacts"
import Movie from "./pages/movies/movie"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

    return (<>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/books/:id' element={<Movie />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
