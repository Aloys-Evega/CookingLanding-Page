export default function BlogHeader() {
    return (
        <div className="flex flex-col items-center">
            <HeaderText />
            <SearchBar />
        </div>
    );
}

function HeaderText() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold">Blog & Articles</h1>
            <p className="text-xl text-gray-500 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
        </div>
    );
}

function SearchBar() {
    return (
        <div className="border border-gray-200 mt-20 p-4 w-[400px] flex items-center gap-4 rounded-3xl">
            <input
                type="text"
                placeholder="Search articles, news, or recipes"
                className="outline-none w-full px-3"
                aria-label="Search"
            />
            <button className="bg-black text-white rounded-xl px-6 py-2" aria-label="Search button">
                Search
            </button>
        </div>
    );
}
