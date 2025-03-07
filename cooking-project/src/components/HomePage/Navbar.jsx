import Twitter from '../../../public/logo/Twiter.svg'
import Facebook from '../../../public/logo/facebook.svg'
import Instagram from '../../../public/logo/instagram.png'
import Foodieland from '../../../public/logo/Foodieland..svg'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex mx-auto  justify-between items-center p-8 border-b border-gray-200 mb-15">
            <img src={Foodieland} alt="image"/>
            <nav>
                <ul className="flex space-x-10">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="recipe">Recipes</Link></li>
                    <li><Link to="blog">Blog</Link></li>
                    <li>Contact</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <div>
                <ul className="flex space-x-10">
                    <li>
                        <img src={Facebook} alt="Facebook image"/>
                    </li>
                    <li>
                        <img src={Twitter} alt="Twitter image "/>
                    </li>
                    <li>
                        <img src={Instagram} alt="IG image"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}