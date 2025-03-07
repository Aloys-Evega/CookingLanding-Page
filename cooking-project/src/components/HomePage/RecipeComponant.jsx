import HeaderComposant from "./HeaderComposant.jsx";
import Time from "../../../public/logo/Vector.svg";
import ForkKnife from '../../../public/logo/ForkKnife.png'

export default function RecipeComponant({image, title, classname, buttonclassname}) {
    return (
        <div className={`p-4 rounded-3xl bg-gradient-to-b from-white to-blue-50 text-black${classname}`}>
            <img src={image} alt="Recipe Componant" className="rounded-3xl" />
            <h2 className="text-xl font-bold my-4">{title}</h2>
            <div className=" flex flex-row space-x-4">
                <HeaderComposant image={Time} description="30 Minutes" classname={buttonclassname}/>
                <HeaderComposant image={ForkKnife} description="Chicken" classname={buttonclassname}/>
            </div>
        </div>
    )
}