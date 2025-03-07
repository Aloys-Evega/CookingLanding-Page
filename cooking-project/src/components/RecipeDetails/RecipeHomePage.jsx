import { useParams } from "react-router-dom";

import RecipeHeader from "./RecipeHeader.jsx";
import RecipeIngrediant from "./RecipeIngrediant.jsx";
import OtherRecipe from "./OtherRecipe.jsx";
import RecipeDirection from "./RecipeDirection.jsx";
import SubscribeCard from "../HomePage/SubscribeCard.jsx";
import RecommandationRecipe from "./RecommandationRecipe.jsx";



export default function RecipeHomePage() {
    return (
        <div className="">
            <RecipeHeader

            />
            <main>
                <div className="flex mt-15 space-x-10">
                    <RecipeIngrediant/>
                    <OtherRecipe/>
                </div>
                <RecipeDirection/>
                <SubscribeCard/>
                <RecommandationRecipe/>
            </main>
        </div>
    )
}