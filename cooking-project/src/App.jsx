import HomePage from "./components/HomePage/HomePage.jsx";
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import RecipeHomePage from "./components/RecipeDetails/RecipeHomePage.jsx";
import Navbar from "./components/HomePage/Navbar.jsx";
import BlogHomePage from "./components/BlogLandingPage/BlogHomePage.jsx";
import Footer from "./components/HomePage/Footer.jsx";


function App() {

  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/recipe/:id" element={<RecipeHomePage/>} />
            <Route path="blog" element={<BlogHomePage/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
