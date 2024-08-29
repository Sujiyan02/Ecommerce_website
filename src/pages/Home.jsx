import { Categories, mockData } from "../assets/mockData";
import Hero from "../assets/Images/offer_img.jpg";
import InfoSection from "../Components/InfoSection";
import CategoriesSection from "../Components/CategoriesSection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCart from "./ProductCart";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);  // Corrected to state.product.items

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);  // Corrected dependency array

  return (
  <div>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          {/* Sidebar for the categories */}
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">Shop by categories</div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={Hero} alt="" className="h-full w-full" />
          <div className="absolute top-16 left-8">
            <p className="text-gray-800 mb-4">Hello</p>
            <h2 className="text-3xl font-bold">WELCOME TO E-SHOP</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS+ PRODUCTS</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">SHOP</button>
          </div>
        </div>
      </div>

      <InfoSection />
      <CategoriesSection />

      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center"> Top Product</h2>
        <div className="grid grid-col-1 sm:grid-col-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0, 5).map((product) => (
            // eslint-disable-next-line react/jsx-key
            <ProductCart product={product} />
          ))}
        </div>
      </div>
     
    </div>
    <Shop />
    </div>
  );
};

export default Home;
