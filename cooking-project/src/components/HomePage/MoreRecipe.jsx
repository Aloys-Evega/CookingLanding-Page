import RecipeComponant from "./RecipeComponant.jsx";
import {recipes} from "../../data.js";
import {Link} from "react-router-dom";

export default function Recipe() {
    return (
        <section className="p-8">
            <div>
                <h1 className="text-5xl text-center mt-20 mb-7 font-bold">Simple and tasty recipes</h1>
                <p className="text-center text-gray-400 text-lg">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt
                </p>
                <p className="text-center text-gray-400 text-lg mb-20">
                    ut labore et dolore magna aliqut enim ad minim
                </p>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 my-8 gap-4">
                {recipes.map((recipe) => (
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`} >
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
