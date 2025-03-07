
import Image from '../../../public/header_assets/Mask Group.png'
import Logo from '../../../public/header_assets/image 14.png'
import Time from '../../../public/logo/Vector.svg'
import ForkKnife from '../../../public/logo/ForkKnife.png'
import Badge from '../../../public/logo/Badge.png'
import Image2 from '../../../public/header_assets/Ellipse 2.png'
import PlayCircle from '../../../public/logo/PlayCircle.svg'

import HeaderComposant from "./HeaderComposant.jsx";

export default function Header() {
    return(
        <div className="mb-10 p-8 ">
           <header className=" flex flex-row rounded-4xl">
               <div className="w-1/2 p-6 bg-header rounded-l-4xl">
                   <HeaderComposant image={Logo} description="Hot Recipes"  className="inline-flex text-blue shadow-lg rounded-3xl bg-white font-bold" />
                   <h1 className="mt-6 font-bold text-6xl">
                       Spicy delicious chicken wings
                   </h1>
                   <h3 className="my-6">
                       Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                   </h3>
                   <div className=" flex flex-row mb-8 space-x-4">
                       <HeaderComposant image={Time} description="30 Minutes" classname="bg-custom" />
                       <HeaderComposant image={ForkKnife} description="Chicken" classname="bg-custom"/>
                   </div>
                   <div className=" flex flex-row mt-20 space-x-12 items-stretch ">
                       <HeaderComposant image={Image2} description="John Smith" />
                       <HeaderComposant image={PlayCircle} description="View Recipes" classname="flex flex-row-reverse" />
                   </div>
               </div>
               <div className="w-1/2">
                   <img src={Image} alt=""/>
               </div>
               <img
                   src={Badge}
                   alt="Image"
                   className="absolute top-3/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover border-4 border-white rounded-full"
               />
           </header>
        </div>
    )
}