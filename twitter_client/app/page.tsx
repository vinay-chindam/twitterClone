import { FaXTwitter } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

interface sideBarItem{
  title: string;
  icon: React.ReactNode;
}


const sideBarItems: sideBarItem[] = [
  {
    title: "Home",
    icon: <FaXTwitter className="text-white text-2xl" />,
  },
  {
    title: "Explore",
    icon: <FaHashtag className="text-white text-2xl" />,
  },
  {
    title: "Notifications",
    icon: <FaBell className="text-white text-2xl" />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope className="text-white text-2xl" />,
  },
  {
    title: "Bookmarks",
    icon: <FaBookmark className="text-white text-2xl" />,
  },    
]
export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen  px-56">
      <div className="col-span-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-[#1a1a1a] cursor-pointer transition duration-200">
          <FaXTwitter className="text-white text-2xl" />
        </div>
        
        <ul>
          {sideBarItems.map((item, index) => (
            <li key={index} className="flex items-center gap-4 p-3 rounded-full hover:bg-[#1a1a1a] cursor-pointer transition duration-200 mt-4">
              {item.icon}
              <span className="text-white text-lg font-semibold">{item.title}</span>
            </li>
          ))}       
        </ul>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full shadow-sm transition duration-200">
  Tweet
</button>

          
      </div>
      

      <div className="border-r-[1px] border-l-[1px] border-gray-400 col-span-6 ">Column 2 (2/3)</div>
      <div className="col-span-3">Column 3 (1/3)</div>
    </div>
  );
}
