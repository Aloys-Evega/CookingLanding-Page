import { instagramData } from "../../data.js";

export default function Instagram() {
    return (
        <section className="mt-40 bg-gradient-to-b from-white to-blue-50 w-full p-8">
            <h1 className="text-5xl font-bold text-center mb-10">
                {instagramData.title}
            </h1>
            <p className="text-lg text-center text-gray-400">
                {instagramData.description}
            </p>
            <div className="grid grid-cols-4 gap-4 mt-10">
                {instagramData.posts.map((post, index) => (
                    <img key={index} src={post} alt={`Instagram post ${index + 1}`} />
                ))}
            </div>
            <div className="flex items-center justify-center mt-20">
                <button className="bg-black text-white px-8 py-4 rounded-xl flex items-center space-x-2">
                    <span>{instagramData.buttonText}</span>
                    <img src={instagramData.instagramLogo} alt="Instagram" className="w-6 h-6"/>
                </button>
            </div>
        </section>
    );
};
