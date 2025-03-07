import Image1 from "../../../public/Blog_assets/Mask Group1.png"
import Image2 from "../../../public/Blog_assets/Mask Group2.png"
import Image3 from "../../../public/Blog_assets/Mask Group3.png"
import Image4 from "../../../public/Blog_assets/Mask Group4.png"
import Image5 from "../../../public/Blog_assets/Mask Group5.png"

import Elipse1 from "../../../public/Blog_assets/Ellipse 2.png"
import Elipse2 from "../../../public/Blog_assets/Ellipse 3.png"
import Elipse3 from "../../../public/Blog_assets/Ellipse 4.png"
import Elipse4 from "../../../public/Blog_assets/Ellipse 5.png"
import Elipse5 from "../../../public/Blog_assets/Ellipse 6.png"
import Elipse6 from "../../../public/Blog_assets/Ellipse 7.png"


const BlogListDetails = [
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        description : "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        image : Image1,
        author : Elipse1,
        name : "Wade Warren",
        date : "12/11/30",

    },
    {
        id: 2,
        title: "Crochet Projects for Noodle Lovers",
        description : "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        image : Image2,
        author : Elipse2,
        name : "Wade Warren",
        date : "12/11/30",

    },
    {
        id: 3,
        title: "Crochet Projects for Noodle Lovers",
        description : "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        image : Image3,
        author : Elipse3,
        name : "Wade Warren",
        date : "12/11/30",

    },
    {
        id: 4,
        title: "Crochet Projects for Noodle Lovers",
        description : "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        image : Image4,
        author : Elipse4,
        name : "Wade Warren",
        date : "12/11/30",

    },
    {
        id: 5,
        title: "Crochet Projects for Noodle Lovers",
        description : "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        image : Image5,
        author : Elipse5,
        name : "Wade Warren",
        date : "12/11/30",

    },
    {
        id: 6,
        title: "Crochet Projects for Noodle Lovers",
        description : "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
        image : Image1,
        author: Elipse6,
        name : "Wade Warren",
        date : "12/11/30",

    }
]


export default function BlogList(){
    return (
        <div className="flex flex-col w-2/3">
            <div className="">
                {
                    BlogListDetails.map((items) =>
                        (
                            <div key={items.id} className=" flex space-x-8 p-4 ">
                                <img src={items.image} alt="OtherRecipe" className="w-[300px] h-auto rounded-4xl"/>
                                <div className="w-2/3 flex flex-col space-y-4">
                                <span className="text-2xl font-bold">
                                    {items.title}
                                </span>
                                    <span className="text-xl text-gray-600 ">
                                    {items.description}
                                </span>
                                    <div className="flex  ">
                                        <div className="flex p-4 justify-center items-center space-x-2">
                                            <img src={items.author} alt={items.title}
                                                 className="w-[50px] h-[50px] rounded-full"/>
                                            <span className="text-lg text-gray-600  ">
                                            {items.name}
                                        </span>
                                        </div>
                                        <span className="border-l border-gray-200 p-4 mt-3">
                                        {items.date}
                                    </span>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>

        </div>
    )
}