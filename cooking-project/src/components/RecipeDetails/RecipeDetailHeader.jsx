import { useParams } from "react-router-dom";
import HeaderComposant from "../HomePage/HeaderComposant.jsx";
import Time from "../../../public/logo/Vector.svg";
import Fork from "../../../public/logo/ForkKnife.png";

import Printer from "../../../public/recipes_Details_assets/printer.png";
import Share from "../../../public/recipes_Details_assets/share.png";
import Image from "../../../public/recipe_assets/image 26.png"
import Image2 from "../../../public/recipe_assets/image 28.png"
import Image3 from "../../../public/recipe_assets/image 29.png"
import Image4 from "../../../public/recipe_assets/image 30.png"
import Image5 from "../../../public/recipe_assets/image 32.png"
import Image6 from "../../../public/recipe_assets/image 34.png"
import Image7 from "../../../public/recipe_assets/image 317.png"

const items = [
    { text: "Calories", num: 279, unit: "Kcal" },
    { text: "Protein", num: 8, unit: "g" },
    { text: "Fat", num: 12, unit: "g" },
    { text: "Carbs", num: 36, unit: "g" },
];

const headerComposants = [
    { id: 1, image: Time, description: "30 Minutes" },
    { id: 2, image: Fork, description: "2 Servings" },
    { id: 3, image: Time, description: "Quick & Easy" },
    { id: 4, image: Fork, description: "Healthy" },
];

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

export default function RecipeDetailHeader() {
    const { id } = useParams();
    const recipe = recipes[id];


    if (!recipe) {
        return <p>RecipeMain not found!</p>;
    }

    return (
        <div className="recipe-header">
            <div className="flex mb-15">
                <div className="w-2/3">
                    <p className="text-5xl font-bold">{recipe.description}</p>
                    <div className="flex space-x-4 mt-10">
                        {headerComposants.map((item) => (
                            <HeaderComposant
                                key={item.id}
                                image={item.image}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-1/3 flex space-x-4 justify-end">
                    <div className="rounded-full bg-blue-50 self-end p-6">
                        <img src={Printer} alt="Printer" />
                    </div>
                    <div className="rounded-full bg-blue-50 self-end p-6">
                        <img src={Share} alt="Share" />
                    </div>
                </div>
            </div>
            <div className="flex mb-15 gap-8">
                <div className="w-2/3">
                    <img src={recipe.image} alt="RecipeMain" className="w-[900px] h-[550px] rounded-4xl" />
                </div>
                <div className="w-1/3 bg-blue-50 rounded-2xl flex flex-col p-4">
                    <p className="text-2xl font-bold">Nutrition Information</p>
                    <div>
                        {items.map((item, index) => (
                            <div key={index} className="border-b border-black flex w-full space-x-70 mt-5">
                                <div className="self-start">
                                    <p>{item.text}</p>
                                </div>
                                <div className="self-end">
                                    <span className="self-end">{item.num}</span>
                                    <span className="self-end">{item.unit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto mb-5">
                        <p className="text-gray-400 text-center">
                            adipiscing elit, sed do eiusmod tempor
                        </p>
                        <p className="text-gray-400 text-center">
                            incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}
