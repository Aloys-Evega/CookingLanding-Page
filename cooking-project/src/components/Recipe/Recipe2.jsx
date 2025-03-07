import Image from "../../../public/recipe_assets/image 26.png";
import Image2 from "../../../public/recipe_assets/image 28.png";
import Image3 from "../../../public/recipe_assets/image 29.png";
import Image4 from "../../../public/recipe_assets/image 30.png";
import Image5 from "../../../public/recipe_assets/image 32.png";
import Image6 from "../../../public/recipe_assets/image 34.png";
import Image7 from "../../../public/recipe_assets/image 317.png";
import RecipeComponant from "../HomePage/RecipeComponant.jsx";
import {Link} from "react-router-dom";

const recipes = {
    1: { image: Image, description: "Big and Juicy Wagyu Beef Cheeseburger" },
    2: { image: Image2, description: "Fresh Lime Roasted Salmon with Ginger Sauce" },
    4: { image: Image3, description: "Strawberry Oatmeal Pancake with Honey Syrup" },
    5: { image: Image4, description: "Strawberry Oatmeal Pancake with Honey Syrup" },
    6: { image: Image5, description: "Chicken Meatballs with Cream Cheese Cheese" },
    7: { image: Image6, description: "The Best Easy One Pot Chicken and Rice" },
    8: { image: Image7, description: "The Creamiest Creamy Chicken and Bacon Pasta" },
    9: { image: Image6, description: "The Creamiest Creamy Chicken and Bacon Pasta" },
};

export default function Recipe2() {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 mt-20">
                {
                    Object.entries(recipes).map(([id, recipe]) => (
                        <Link key={id} to={`/recipe/${id}`}>
                            <RecipeComponant
                                image={recipe.image}
                                title={recipe.description} // Correction : `description` au lieu de `title`
                                buttonclassname="bg-custom"
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
