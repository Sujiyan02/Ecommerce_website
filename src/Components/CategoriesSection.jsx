import Man from "../assets/Images/man.jpg";
import Women from "../assets/Images/Women.jpg";
import kids from "../assets/Images/Hero.jpg";


const cat_Sections = [
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
];
const CategoriesSection = () => {
  return (
    
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 cursor-pointer ">
      {
        cat_Sections.map((category,index) => (
          <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <img src={category.imageurl} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
              <div className="absolute top-20 left-12 ">
                <p className="text-xl font-bold">{category.title}</p>
                <p className="text-gray-600">View All</p>
              </div>
            </div>

        ))
      }
    </div>
  )
}

export default CategoriesSection
