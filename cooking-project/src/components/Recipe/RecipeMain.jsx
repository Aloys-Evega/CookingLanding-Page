import RecipeHeader from "./Recipe Header.jsx";
import Recipe2 from "./Recipe2.jsx";

export default function RecipeMain() {
    return (
        <div className="recipe">
            <RecipeHeader/>
            <main>
                <Recipe2/>
            </main>
        </div>
    )
}