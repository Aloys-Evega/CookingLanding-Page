
import Post1 from "../../../public/Instagram/Post1.png";
import Post2 from "../../../public/Instagram/Post2.png";
import Post3 from "../../../public/Instagram/Post3.png";
import Post4 from "../../../public/Instagram/Post4.png";
import instagram from '../../../public/logo/instagram.png'

export default function Instagram(){
    return (
        <section className="mt-40 bg-gradient-to-b from-white to-blue-50 w-full p-8">
            <h1 className="text-5xl font-bold text-center mb-10">
                Check out @foodieland on Instagram
            </h1>
            <p className="text-lg text-center text-gray-400">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
            </p>
            <p className="text-lg text-center mb-20 text-gray-400">
                magna aliqut enim ad minim
            </p>
            <div className="">
                <div className="grid grid-cols-4 gap-4">
                    <img src={Post1} alt="Vite"/>
                    <img src={Post2} alt="Vite"/>
                    <img src={Post3} alt="Vite"/>
                    <img src={Post4} alt="Vite"/>
                </div>
                <div className="flex items-center justify-center mt-30">
                    <button className="bg-black text-white px-8 py-4 rounded-xl flex ">
                        Visit Our Instagram
                        <img src={instagram} alt="Vite"/>
                    </button>

                </div>
            </div>
        </section>
    )
};