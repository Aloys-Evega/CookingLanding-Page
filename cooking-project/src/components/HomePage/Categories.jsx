import CategoriesElement from "./CategoriesElement.jsx";
import Breakfast from "../../../public/categories_assets/Group.png"
import Meat from "../../../public/categories_assets/Group.png"
import Dessert from "../../../public/categories_assets/Group 879 (3).png"
import Lunch from "../../../public/categories_assets/Group 879 (4).png"
import Chocolate from "../../../public/categories_assets/Group 879 (5).png"

export default function Categories() {
    return(
        <section className="p-8 mt-20">
            <div className=" flex justify-between my-10">
                <h1 className="text-4xl">
                    Categories
                </h1>
               <button className="rounded-2xl bg-blue-100 p-4">
                   View all Categories
               </button>
            </div>
            <div className="grid grid-cols-6 gap-10 my-8">
                <CategoriesElement image={Breakfast} title="Breakfast" classname=" flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 justify-center p-2 rounded-3xl shadow-lg"/>
                <CategoriesElement image={Lunch} title="Lunch"  classname="flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 justify-center p-2 rounded-3xl shadow-lg"/>
                <CategoriesElement image={Meat} title="Meat"  classname="flex flex-col justify-center items-center bg-gradient-to-b from-white to-red-100 justify-center p-2 rounded-3xl shadow-lg"/>
                <CategoriesElement image={Dessert} title="Dessert"  classname="flex flex-col justify-center items-center bg-gradient-to-b from-white to-yellow-100 justify-center p-2 rounded-3xl shadow-lg"/>
                <CategoriesElement image={Lunch} title="Lunch"  classname="flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 justify-center p-2 rounded-3xl shadow-lg"/>
                <CategoriesElement image={Chocolate} title="Chocolate"  classname="flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 justify-center p-4 rounded-3xl shadow-lg"/>
            </div>
        </section>
    )
}