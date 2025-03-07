import BlogHeader from "./BlogHeader.jsx";
import BlogList from "./BlogList.jsx";
import OtherRecipe from "../RecipeDetails/OtherRecipe.jsx";
import SubscribeCard from "../HomePage/SubscribeCard.jsx";
import { BlogItems } from "../../data.js";

export default function BlogHomePage() {
    return (
        <div>
            <BlogHeader />
            <div className="flex space-x-10 mt-20">
                <BlogList />
                <OtherRecipe />
            </div>
            <div className="flex mt-10 space-x-10 justify-center items-center mx-auto mb-30">
                {BlogItems.map((item, index) => (
                    <div key={index} className="bg-white border border-gray-100 py-2 px-6 text-xl rounded-xl">
                        {item}
                    </div>
                ))}
            </div>
            <SubscribeCard />
        </div>
    );
}
