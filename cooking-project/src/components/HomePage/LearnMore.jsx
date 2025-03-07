import LearnMores from "../../../public/LearnMore_assets/Group 880.png"

export default function LearnMore() {
    return (
        <section className="p-8 flex ">
            <div className="w-1/2 flex flex-col justify-center p-8">
                <h1 className="text-4xl font-bold" >
                    Everyone can be a
                </h1>
                <h1 className="text-4xl font-bold mb-8">
                    chef in their own kitchen
                </h1>
                <p className="text-lg mb-8 text-gray-400">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
                </p>
                <p className="rounded-xl text-white bg-black px-12 py-4 self-start">
                    learn more
                </p>
            </div>
            <img src={LearnMores} alt="Learn more" className="w-1/2 " />
        </section>
    )
}