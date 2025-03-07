import { headerData } from "../../data.js";

export default function Header() {
    return (
        <div className="mb-10 p-8">
            <header className="flex flex-row rounded-4xl">

                <div className="w-1/2 p-6 bg-header rounded-l-4xl">
                    <HeaderComposant {...headerData.logo} />
                    <h1 className="mt-6 font-bold text-6xl">{headerData.title}</h1>
                    <h3 className="my-6">{headerData.description}</h3>

                    <div className="flex flex-row mb-8 space-x-4">
                        {headerData.tags.map((tag, index) => (
                            <HeaderComposant key={index} {...tag} />
                        ))}
                    </div>

                    <div className="flex flex-row mt-20 space-x-12 items-stretch">
                        {headerData.actions.map((action, index) => (
                            <HeaderComposant key={index} {...action} />
                        ))}
                    </div>
                </div>

                <div className="w-1/2">
                    <img src={headerData.mainImage} alt="Recipe" />
                </div>

                <img
                    src={headerData.badgeImage}
                    alt="Badge"
                    className="absolute top-3/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover border-4 border-white rounded-full"
                />
            </header>
        </div>
    );
}

function HeaderComposant({image, description, classname, ...props}) {
    return (
        <div {...props}>
            <div className={`flex flex-row p-4 rounded-full bg-black-500 space-x-2 ${classname}`}>
                <img src={image} alt="image" className=""/>
                <h4>{description}</h4>
            </div>
        </div>
    )
}