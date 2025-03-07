import Image from '../../../public/Subscribe_assets/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png';
import Image1 from '../../../public/Subscribe_assets/Photo-plate.png';

export default function SubscribeCard() {
    return (
        <section className="mt-30 rounded-3xl bg-blue-50 ">
            <div className="text-center p-2 mt-4">
                <h1 className="font-bold text-5xl p-4">
                    Deliciousness to your inbox
                </h1>
                <p className="text-gray-600 mt-5">
                    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p className="text-gray-600">
                    et dolore magna aliquot enim ad minim.
                </p>
            </div>

            <div className="flex items-center justify-center gap-4">
                <div className="w-1/3 flex justify-start">
                    <img src={Image} alt="" className="w-[200px] h-[200px] rounded-3xl object-cover"/>
                </div>


                <div className="w-1/3 flex px-20 py-2 border border-gray-200 bg-white rounded-2xl space-x-8">
                    <input
                        type="text"
                        placeholder="Your Email Address"
                        className="focus : outline-none"
                    />
                    <button className="bg-black text-white rounded-xl p-4">
                        subscribes
                    </button>
                </div>

                {/* Image de droite */}
                <div className="w-1/3 flex justify-end">
                    <img src={Image1} alt="" className="w-[200px] h-[200px] rounded-3xl object-cover"/>
                </div>
            </div>
        </section>
    )
}
