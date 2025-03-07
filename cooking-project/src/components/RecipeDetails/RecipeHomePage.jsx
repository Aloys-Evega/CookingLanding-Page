import { useParams } from "react-router-dom";

import RecipeDetailHeader from "./RecipeDetailHeader.jsx";
import RecipeIngrediant from "./RecipeIngrediant.jsx";
import OtherRecipe from "./OtherRecipe.jsx";
import RecipeDetailDirection from "./RecipeDetailDirection.jsx";
import SubscribeCard from "../HomePage/SubscribeCard.jsx";
import RecommandationRecipe from "./RecommandationRecipe.jsx";



export default function RecipeHomePage() {
    return (
        <div className="">
            <RecipeDetailHeader

            />
            <main>
                <div className="flex mt-15 space-x-10">
                    <RecipeIngrediant/>
                    <OtherRecipe/>
                </div>
                <RecipeDetailDirection/>
                <SubscribeCard/>
                <RecommandationRecipe/>
            </main>
        </div>
    )
}