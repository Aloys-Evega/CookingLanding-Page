
import { categoriesData } from "../../data.js";

export default function Categories() {
    return (
        <section className="p-8 mt-20">

            <div className="flex justify-between my-10">
                <h1 className="text-4xl">Categories</h1>
                <button className="rounded-2xl bg-blue-100 p-4">View all Categories</button>
            </div>

            <div className="grid grid-cols-6 gap-10 my-8">
                {categoriesData.map((category) => (
                    <CategoriesElement
                        key={category.id}
                        image={category.image}
                        title={category.title}
                        classname={`flex flex-col justify-center items-center bg-gradient-to-b ${category.bgColor} p-4 rounded-3xl shadow-lg`}
                    />
                ))}
            </div>
        </section>
    );
}

function CategoriesElement({image, title, classname}) {
    return (
        <div className={classname}>
            <div>
                <img src={image} alt={title} className=""/>
            </div>
            <p className="mt-6 font-bold text-lg">{title}</p>
        </div>
    )
}
