const items = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet"
]

const items2 = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
]

export default function RecipeIngrediant(props) {
    return (
        <div className="w-2/3">
            <div>
                <p className="text-4xl font-bold">
                    Ingrediants
                </p>
                <p className="text-xl font-bold mt-10">
                    For Main Dish
                </p>
            </div>
            <div className="mt-5">
                {
                    items.map((item, index) =>
                        (
                            <div key={index} className="border-b border-gray-200 p-6 space-x-4 ">
                                <input
                                    type="checkbox"
                                    className="focus: outline-none rounded-full"
                                />
                                <span className="text-xl">
                                    {item}
                                </span>
                            </div>
                        ))
                }
            </div>
            <div>
                <p className="text-xl font-bold mt-10">
                    For Main Dish
                </p>
            </div>
            <div className="mt-5">
                {
                    items2.map((item, index) =>
                        (
                            <div key={index} className="border-b border-gray-200 p-6 space-x-4 ">
                                <input
                                    type="checkbox"
                                    className="focus: outline-none rounded-full"
                                />
                                <span className="text-xl">
                                    {item}
                                </span>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}