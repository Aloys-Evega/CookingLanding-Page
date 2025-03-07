import { Link } from "react-router-dom";
import { recipes1 } from "../../data.js";
import RecipeComponant from "./RecipeComponant.jsx";

export default function Recipe() {
    return (
        <section className="p-8">
            <div className="text-center">
                <h1 className="text-5xl font-bold mt-20 mb-7">Simple and tasty recipes</h1>
                <p className="text-gray-400 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-gray-400 text-lg mb-20">Ut labore et dolore magna aliqua enim ad minim.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {recipes1.map(({ id, image, title }) => (
                    <Link key={id} to={`/recipe/${id}`}>
                        <RecipeComponant image={image} title={title} buttonclassname="bg-custom" />
                    </Link>
                ))}
            </div>
        </section>
    );
}
