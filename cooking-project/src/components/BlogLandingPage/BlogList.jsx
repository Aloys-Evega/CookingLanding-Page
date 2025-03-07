import { BlogListDetails } from "../../data.js";

export default function BlogList() {
    return (
        <div className="flex flex-col w-2/3">
            {BlogListDetails.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}

function BlogCard({ blog }) {
    return (
        <div className="flex space-x-8 p-4">
            <img src={blog.image} alt={blog.title} className="w-[300px] h-auto rounded-4xl" />
            <div className="w-2/3 flex flex-col space-y-4">
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <p className="text-xl text-gray-600">{blog.description}</p>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <img src={blog.author} alt={blog.name} className="w-[50px] h-[50px] rounded-full" />
                        <span className="text-lg text-gray-600">{blog.name}</span>
                    </div>
                    <span className="border-l border-gray-200 pl-4">{blog.date}</span>
                </div>
            </div>
        </div>
    );
}
