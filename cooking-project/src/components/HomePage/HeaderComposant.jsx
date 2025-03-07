

export default function HeaderComposant({image, description, classname, ...props}) {
    return (
        <div {...props}>
            <div className={`flex flex-row p-4 rounded-full bg-black-500 space-x-2 ${classname}`}>
                <img src={image} alt="image" className=""/>
                <h4>{description}</h4>
            </div>
        </div>
    )
}