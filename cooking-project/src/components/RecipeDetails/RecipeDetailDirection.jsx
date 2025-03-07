import Image from "../../../public/recipes_Details_assets/Rectangle 23.png";

const RecipeDirectionDetails = [
    {
        id: 1,
        title : "RecipeMain Direction",
        description1 : "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        image : Image,
        description2 : "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        id: 2,
        title : "RecipeMain Direction",
        description1 : "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        description2 : ""
    },
    {
        id: 3,
        title : "RecipeMain Direction",
        description1 : "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        description2 : ""
    },
]

export default function RecipeDetailDirection() {
    return (
        <div className="w-2/3 mt-30">
            <p className="text-4xl font-bold">
                Directions
            </p>
            <div className="mt-8">
                {
                    RecipeDirectionDetails.map((items) => (
                        <div key={items.id} className="border-b border-gray-500 py-8">
                            <div className="flex space-x-2 mb-4">
                                <input
                                type="checkbox"
                                />
                                <span className="text-2xl font-bold">
                                    {items.id}.
                                </span>
                                <span className="text-2xl font-bold">
                                    {items.title}
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg text-gray-600">
                                    {items.description1}
                                </span>
                                {
                                    items.image && (
                                        <img src={items.image} alt={items.title} className="my-8 rounded-4xl w-[850px] h-[500px]" />
                                    )
                                }
                                {
                                    items.description2 && (
                                        <span className="text-lg text-gray-600">
                                            {items.description2}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}