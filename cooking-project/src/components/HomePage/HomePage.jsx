import Header from "./Header.jsx"
import Navbar from "./Navbar.jsx";
import Categories from "./Categories.jsx";
import Recipe from "./Recipe.jsx";
import LearnMore from "./LearnMore.jsx";
import Instagram from "./Instagram.jsx";
import MoreRecipe from "./MoreRecipe.jsx";
import SubscribeCard from "./SubscribeCard.jsx";
import Footer from "./Footer.jsx";

export default function HomePage() {
    return (
        <>
            <Header/>
            <main>
                <Categories/>
                <Recipe/>
                <LearnMore/>
                <Instagram/>
                <MoreRecipe/>
                <SubscribeCard/>
            </main>
        </>
    )
}


