export default function BlogHeader() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <span className="text-4xl font-bold text-center">
                    Blog & articles
                </span>
                <span className="text-xl text-gray-500 text-center mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </span>
            </div>
            <div className="border border-gray-200 mt-20 p-4 mx-auto w-[400px] flex items-center justify-center gap-4 rounded-3xl">
                <input
                    type="text"
                    placeholder="Search, articles, news or recipe"
                    className="outline-none focus:outline-none w-[300px]"
                />
                <button className="bg-black text-white rounded-xl p-4 justify-end">
                        search
                </button>
            </div>
        </div>
    )
}