import RecipeComponant from "../HomePage/RecipeComponant.jsx";
import Image40 from "../../../public/MoreRecipes_assets/image 40.png";
import Image41 from "../../../public/MoreRecipes_assets/image 41.png";
import Image42 from "../../../public/MoreRecipes_assets/image 42.png";
import Image43 from "../../../public/MoreRecipes_assets/image 43.png";

const items =[

]

export default function RecommandationRecipe() {
    return (
        <div>
            <div className="text-center font-bold text-4xl mt-20">
                You May Like This Recipe Too
            </div>
            <div className="grid grid-cols-4 gap-4 my-8">
                <RecipeComponant image={Image40} title="Mixed Tropical Fruit Salad with Superfood Boosts "/>
                <RecipeComponant image={Image41} title="Big and Juicy Wagyu Beef Cheeseburger"/>
                <RecipeComponant image={Image42} title="Healthy Japanese Fried Rice with Asparagus"/>
                <RecipeComponant image={Image43} title="Cauliflower Walnut Vegetarian Taco Meat"/>
            </div>
        </div>
    )
}