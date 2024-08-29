import { FaShippingFast,FaHeadset,FaMoneyBillWave,FaLock, FaTag} from "react-icons/fa"
import Man from "./Images/man.jpg";
import Women from "./Images/Women.jpg";
import kids from "./Images/Hero.jpg";


import Image1 from "./Images/Image1.jpg";
import Image2 from "./Images/Image2.jpg";
import Image10 from "./Images/Image10.jpg";
import Image3 from "./Images/Image3.png";
import Image4 from "./Images/Image4.png";
import Image5 from "./Images/Image5.png";
import Image6 from "./Images/Image6.png";
import Image7 from "./Images/Image7.jpg";
import Image8 from "./Images/Image8.jpg";
import Image9 from "./Images/Image9.jpg";



export const Categories =[
    "Electronics",
    "Fashion",
    "Home And Kitchen",
    "Beauty",
    "Sports",
    "Automotive",
];


export const infoItem =[
    {
        icons: <FaShippingFast className="text-3xl text-red-600 "></FaShippingFast>,
        title:"Free shipping",
        description:'Get your orders delivered with no extra cost',

    },
    {
        icons: <FaHeadset className="text-3xl text-red-600 "></FaHeadset>,
        title:"Support 24/7",
        description:'We are here to assist you anytime',

    },
    {
        icons: <FaMoneyBillWave className="text-3xl text-red-600 "></FaMoneyBillWave>,
        title:"100% Money Back ",
        description:'Full refubs if you are bir satisfied',

    },
    {
        icons: <FaLock className="text-3xl text-red-600 "></FaLock>,
        title:"Payment Secure ",
        description:'Your payment information is safe with us ',

    },
    {
        icons: <FaTag className="text-3xl text-red-600 "></FaTag>,
        title:"Discount ",
        description:'Enjoy the best price on our product',

    },

]

export const cat_Sections = [
    {
        title: 'Men',
        imageurl:Man,
    },
    {
        title: 'Womens',
        imageurl:Women,
    },
    {
        title: 'Kids',
        imageurl:kids,
    },
]

export const mockData =[
    {
        id:1,
        image:Image1,
        name:"Product1",
        price:299.90,
    },
    {
        id:2,
        image:Image2,
        name:"Product2",
        price:299.90,
    },
    {
        id:3,
        image:Image3,
        name:"Product3",
        price:299.90,
    },
    {
        id:4,
        image:Image4,
        name:"Product4",
        price:299.90,
    },
    {
        id:5,
        image:Image5,
        name:"Product5",
        price:299.90,
    },
    {
        id:6,
        image:Image6,
        name:"Product6",
        price:299.90,
    },
    {
        id:7,
        image:Image7,
        name:"Product7",
        price:299.90,
    },
    {
        id:8,
        image:Image8,
        name:"Product8",
        price:299.90,
    },
    {
        id:9,
        image:Image9,
        name:"Product9",
        price:299.90,
    },
    {
        id:10,
        image:Image10,
        name:"Product10",
        price:299.90,
    },

]