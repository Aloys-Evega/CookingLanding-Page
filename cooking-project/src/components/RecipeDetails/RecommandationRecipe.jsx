import RecipeComponant from "../HomePage/RecipeComponant.jsx";
import Image40 from "../../../public/MoreRecipes_assets/image 40.png";
import Image41 from "../../../public/MoreRecipes_assets/image 41.png";
import Image42 from "../../../public/MoreRecipes_assets/image 42.png";
import Image43 from "../../../public/MoreRecipes_assets/image 43.png";
import {Link} from "react-router-dom";

const recipes = [
    { id: 1, image: Image40, title: "Mixed Tropical Fruit Salad with Superfood Boosts" },
    { id: 2, image: Image41, title: "Big and Juicy Wagyu Beef Cheeseburger" },
    { id: 3, image: Image42, title: "Healthy Japanese Fried Rice with Asparagus" },
    { id: 4, image: Image43, title: "Cauliflower Walnut Vegetarian Taco Meat" }
];

export default function RecommendationRecipe() {
    return (
        <div className="p-8">
            <h2 className="text-center font-bold text-4xl mt-20">You May Like This Recipe Too</h2>

            {recipes.length > 0 ? (
                <div className="grid grid-cols-4 gap-4 my-8">
                    {recipes.map((recipe) => (
                        <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                            <RecipeComponant
                                image={recipe.image}
                                title={recipe.title}
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No recommended recipes available.</p>
            )}
        </div>
    );
}
