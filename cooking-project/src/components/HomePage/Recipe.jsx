import { Link } from "react-router-dom"; // Import du composant Link
import RecipeComponant from "./RecipeComponant.jsx";
import Image from "../../../public/recipe_assets/image 26.png";
import Image2 from "../../../public/recipe_assets/image 28.png";
import Image3 from "../../../public/recipe_assets/image 29.png";
import Image4 from "../../../public/recipe_assets/image 30.png";
import Image5 from "../../../public/recipe_assets/image 32.png";
import Image6 from "../../../public/recipe_assets/image 34.png";
import Image7 from "../../../public/recipe_assets/image 317.png";

// Tableau de recettes avec id
const recipes = [
    { id: 1, image: Image, title: "Big and Juicy Wagyu Beef Cheeseburger" },
    { id: 2, image: Image2, title: "Fresh Lime Roasted Salmon with Ginger Sauce" },
    { id: 3, image: Image3, title: "Strawberry Oatmeal Pancake with Honey Syrup" },
    { id: 4, image: Image4, title: "Strawberry Oatmeal Pancake with Honey Syrup" },
    { id: 5, image: Image5, title: "Chicken Meatballs with Cream Cheese Cheese" },
    { id: 6, image: Image6, title: "Chicken Meatballs with Cream Cheese Cheese" },
    { id: 7, image: Image7, title: "The Best Easy One Pot Chicken and Rice" },
    { id: 8, image: Image6, title: "The Creamiest Creamy Chicken and Bacon Pasta" },
    { id: 9, image: Image7, title: "The Creamiest Creamy Chicken and Bacon Pasta" }
];

export default function Recipe() {
    return (
        <section className="p-8">
            <div>
                <h1 className="text-5xl text-center mt-20 mb-7 font-bold">Simple and tasty recipes</h1>
                <p className="text-center text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt</p>
                <p className="text-center text-gray-400 text-lg mb-20">ut labore et dolore magna aliqut enim ad minim</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 my-8 gap-4">
                {recipes.map((recipe) => (
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                        <RecipeComponant
                            image={recipe.image}
                            title={recipe.title}
                            buttonclassname="bg-custom"
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
