export default function CategoriesElement({image, title, classname}) {
    return (
        <div className={classname}>
            <div>
                <img src={image} alt={title} className=""/>
            </div>
            <p className="mt-6 font-bold text-lg">{title}</p>
        </div>
    )
}