
import Image3 from "../../../public/recipe_assets/image 29.png"
import Image4 from "../../../public/recipe_assets/image 30.png"
import Image5 from "../../../public/recipe_assets/image 32.png"
const OtherRecipeDetails =[

    {id :1, image : Image3, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
    {id :2, image : Image4, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
    {id :3, image : Image5, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
    {id :4, image : Image5, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
    {id :5, image : Image5, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
    {id :6, image : Image5, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
    {id :7, image : Image5, title : "Chicken Meatball with Creamy Chees...",subTitle : "By Andreas Paula"},
]


export default function OtherRecipe() {
      return(

          <div className="RecipeDetails w-1/3">
              <p className="text-4xl font-bold">
                  Other Recipe
              </p>
              <div className="mt-5 space-y-4">
                  {
                      OtherRecipeDetails.map((item)=>
                          (
                              <div key={item.id} className="flex space-x-4">
                                  <img className="w-[160px] h-[100px] rounded-3xl" src={item.image} alt="OtherRecipe"/>
                                  <div className="w-1/2 flex flex-col">
                                      <p className=" text-xl font-bold">
                                          {item.title}
                                      </p>
                                      <span className="text-lg text-gray-600 mt-2">
                                            {item.subTitle}
                                      </span>
                                  </div>
                              </div>
                          ))
                  }
              </div>

          </div>
      )
}