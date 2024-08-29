import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-14 lg:px-24 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <h3 className="text-xl font-semibold text-red-600">E-shop</h3>
          <p className="">your one step for all your needs . Shop with use and exproences the best online shopping experiences</p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 ">
            <li className="hover:underline"><Link to="/">Home</Link></li>
            <li className="hover:underline"><Link to="/shop">Shop</Link></li>
            <li className="hover:underline"><Link to="/about">About</Link></li>
            <li className="hover:underline"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400"><FaFacebook /></a>
            <a href="" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="" className="hover:text-gray-400"> <FaGithub /></a>
            <a href="" className="hover:text-gray-400"><FaInstagram></FaInstagram></a>
            <a href="" className="hover:text-gray-400"> <FaLinkedin /></a>

          </div>
          <form action="" className="flex items-center justify-center mt-8">
            <input type="email" name="" id="" placeholder="Enter Email"  className="w-full p-2 rounded-l-lg border-gray-800 bg-gray-600 "/>
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg  ">Subscibe</button>
          </form>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 e-shop Sujiyan Maruf All  rights are reserved </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline">Privacy Policy</a>
            <a href="" className="hover:underline">Terms & Conditions</a>

          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
