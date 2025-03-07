import Image from "../public/recipe_assets/image 26.png";
import Image2 from "../public/recipe_assets/image 28.png";
import Image3 from "../public/recipe_assets/image 29.png";
import Image4 from "../public/recipe_assets/image 30.png";
import Image5 from "../public/recipe_assets/image 32.png";
import Image6 from "../public/recipe_assets/image 34.png";
import Image7 from "../public/recipe_assets/image 317.png";

import Image1a from "../public/Blog_assets/Mask Group1.png"
import Image2a from "../public/Blog_assets/Mask Group2.png";
import Image3a from "../public/Blog_assets/Mask Group3.png";
import Image4a from "../public/Blog_assets/Mask Group4.png";
import Image5a from "../public/Blog_assets/Mask Group5.png";
import Elipse1 from "../public/Blog_assets/Ellipse 2.png";
import Elipse2 from "../public/Blog_assets/Ellipse 3.png";
import Elipse3 from "../public/Blog_assets/Ellipse 4.png";
import Elipse4 from "../public/Blog_assets/Ellipse 5.png";
import Elipse5 from "../public/Blog_assets/Ellipse 6.png";
import Elipse6 from "../public/Blog_assets/Ellipse 7.png";

import Breakfast from "../public/categories_assets/Group.png";
import Meat from "../public/categories_assets/Group.png";
import Dessert from "../public/categories_assets/Group 879 (3).png";
import Lunch from "../public/categories_assets/Group 879 (4).png";
import Chocolate from "../public/categories_assets/Group 879 (5).png";

import Imageb from "../public/header_assets/Mask Group.png";
import Logo from "../public/header_assets/image 14.png";
import Time from "../public/logo/Vector.svg";
import ForkKnife from "../public/logo/ForkKnife.png";
import Badge from "../public/logo/Badge.png";
import Image2b from "../public/header_assets/Ellipse 2.png";
import PlayCircle from "../public/logo/PlayCircle.svg";

import Post1 from "../public/Instagram/Post1.png";
import Post2 from "../public/Instagram/Post2.png";
import Post3 from "../public/Instagram/Post3.png";
import Post4 from "../public/Instagram/Post4.png";
import instagram from "../public/logo/instagram.png";

export const recipes = [
    { id: 1, image: Image, title: "Big and Juicy Wagyu Beef Cheeseburger" },
    { id: 2, image: Image2, title: "Fresh Lime Roasted Salmon with Ginger Sauce" },
    { id: 3, image: Image3, title: "Strawberry Oatmeal Pancake with Honey Syrup" },
    { id: 4, image: Image4, title: "Fresh and Healthy Mixed Mayonnaise Salad" },
    { id: 5, image: Image5, title: "Chicken Meatballs with Cream Cheese Cheese" },
    { id: 6, image: Image6, title: "Fruity Pancake with Orange & Blueberry" },
    { id: 7, image: Image7, title: "The Best Easy One Pot Chicken and Rice" },
    { id: 8, image: Image6, title: "The Creamiest Creamy Chicken and Bacon Pasta" },
    { id: 9, image: Image7, title: "The Creamiest Creamy Chicken and Bacon Pasta" },
];

export const BlogItems = [1, 2, 3, 4, 5, 6, 7];

export const BlogListDetails = [
    {
        id: 1,
        title: "Crochet Projects for Noodle Lovers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Image1a,
        author: Elipse1,
        name: "Wade Warren",
        date: "12/11/30",
    },
    {
        id: 2,
        title: "Crochet Projects for Noodle Lovers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Image2a,
        author: Elipse2,
        name: "Wade Warren",
        date: "12/11/30",
    },
    {
        id: 3,
        title: "Crochet Projects for Noodle Lovers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Image3a,
        author: Elipse3,
        name: "Wade Warren",
        date: "12/11/30",
    },
    {
        id: 4,
        title: "Crochet Projects for Noodle Lovers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Image4a,
        author: Elipse4,
        name: "Wade Warren",
        date: "12/11/30",
    },
    {
        id: 5,
        title: "Crochet Projects for Noodle Lovers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Image5a,
        author: Elipse5,
        name: "Wade Warren",
        date: "12/11/30",
    },
    {
        id: 6,
        title: "Crochet Projects for Noodle Lovers",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: Image1a,
        author: Elipse6,
        name: "Wade Warren",
        date: "12/11/30",
    },
];

export const categoriesData = [
    { id: 1, image: Breakfast, title: "Breakfast", bgColor: "from-white to-gray-100" },
    { id: 2, image: Lunch, title: "Lunch", bgColor: "from-white to-gray-100" },
    { id: 3, image: Meat, title: "Meat", bgColor: "from-white to-red-100" },
    { id: 4, image: Dessert, title: "Dessert", bgColor: "from-white to-yellow-100" },
    { id: 5, image: Lunch, title: "Lunch", bgColor: "from-white to-gray-100" },
    { id: 6, image: Chocolate, title: "Chocolate", bgColor: "from-white to-gray-100" },
];

export const headerData = {
    mainImage: Imageb,
    badgeImage: Badge,
    title: "Spicy delicious chicken wings",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
        { image: Time, description: "30 Minutes", className: "bg-custom" },
        { image: ForkKnife, description: "Chicken", className: "bg-custom" },
    ],
    actions: [
        { image: Image2b, description: "John Smith" },
        { image: PlayCircle, description: "View Recipes", className: "flex flex-row-reverse" },
    ],
    logo: { image: Logo, description: "Hot Recipes", className: "inline-flex text-blue shadow-lg rounded-3xl bg-white font-bold" },
};

export const instagramData = {
    title: "Check out @foodieland on Instagram",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    posts: [Post1, Post2, Post3, Post4],
    instagramLogo: instagram,
    buttonText: "Visit Our Instagram",
};


export const recipes1 = [
    { id: 1, image: Image, title: "Big and Juicy Wagyu Beef Cheeseburger" },
    { id: 2, image: Image2, title: "Fresh Lime Roasted Salmon with Ginger Sauce" },
    { id: 3, image: Image3, title: "Strawberry Oatmeal Pancake with Honey Syrup" },
    { id: 4, image: Image4, title: "Strawberry Oatmeal Pancake with Honey Syrup" },
    { id: 5, image: Image5, title: "Chicken Meatballs with Cream Cheese" },
    { id: 6, image: Image6, title: "Chicken Meatballs with Cream Cheese" },
    { id: 7, image: Image7, title: "The Best Easy One Pot Chicken and Rice" },
    { id: 8, image: Image6, title: "The Creamiest Creamy Chicken and Bacon Pasta" },
    { id: 9, image: Image7, title: "The Creamiest Creamy Chicken and Bacon Pasta" }
];





