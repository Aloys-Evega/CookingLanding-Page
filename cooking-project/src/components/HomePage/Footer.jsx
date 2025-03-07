import Foodieland from '../../../public/logo/Foodieland..svg'

export default function Footer() {
    return (
        <footer className="mt-20 mb-10">

            <div className="flex justify-between items-center border-b border-gray-600 p-8">

                <div className="flex flex-col  text-left space-x-4">
                    <img src={Foodieland} alt="Logo" className="h-6 w-auto items-center"/>
                    <p className="text-xl">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                </div>

                <div className="flex space-x-8">
                    <a href="#" className="hover:text-gray-400">Blog</a>
                    <a href="#" className="hover:text-gray-400">Recipes</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                    <a href="#" className="hover:text-gray-400">About Us</a>
                </div>
            </div>


            <div className="text-center py-4">
                <p className="text-sm">© 2025 YourCompany. All rights reserved.</p>
            </div>
        </footer>

    )
}