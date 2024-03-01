import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { AppContext } from "../context/AppContext";
import { useContext} from "react";

export default function Header() {

  return (
    <header className=" py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <h1 className="font-bold text-3xl uppercase text-center">Tech Blogs</h1>
    </header>
  ); 
}

// <div className="absolute top-5 right-4 flex">
      
//       {
//         nightMode ? ( <IoMoonOutline fontSize='1.5rem' onClick={toggleTheme}/>):( <FiSun fontSize='1.5rem' 
//         onClick={toggleTheme}
//         />)
//       }
//     </div>