import { Menu, X } from "lucide-react";
import { navItems } from "../constant";
import { useState } from "react"; // Ensure this is imported

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  // Reusable nav items
  const renderNavItems = () => (
    <ul className="flex flex-col lg:flex-row gap-6 ">
      {navItems.map((navItem, index) => (
        <li key={index} className="mt-5 lg:mt-0">
          <a href="">{navItem.label}</a>
        </li>
      ))}
    </ul>
  );

  const renderAuthButtons = () => (
    <div className="flex gap-2 mt-5 lg:mt-0">
      <a href="">
        <button className="border-2 px-3 py-2">Contact Me</button>
      </a>
      <a href="">
        <button className="bg-gradient-to-r from-orange-500 to-orange-900 p-2 rounded-md">
          Get In Touch
        </button>
      </a>
    </div>
  );

  return (
    <nav className="flex justify-between items-center w-full p-2 bg-black/40 backdrop-blur-md mx-8 border-b sticky top-0 ">
     
      <div className="flex-col items-center flex-shrink-0">
        <p className="text-4xl tracking-tight rubik-wet-paint-regular bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          The M
        </p>
        <p className="playwrite-gb-s text-lg pl-2 text-yellow-500 ">theMikias</p>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        {renderNavItems()}
        
      </div>

       <div className="hidden  lg:flex">
       {renderAuthButtons()}
       </div>

      {/* Mobile Menu Toggle Button */}


      <div className="lg:hidden ">
      <button onClick={toggleNavbar} className="bg-orange-500 p-2 rounded-md">
              {mobileDrawerOpen ?<X />: <Menu />}
            </button>

            {mobileDrawerOpen && (
                <div className="w-full absolute justify-center z-20 flex items-center right-0 p-12 bg-black/40 backdrop-blur-md mt-4">
                  <div className="flex-col ">
                    <div className="flex items-center ml-12 px-12 ">
                        <ul className="flex-col items-center">
                          {navItems.map((navItem) => (
                             <a href=""> <li className="mt-5">{navItem.label}</li></a>
                          ))}
                        </ul>
                    </div>
                    
                    <div className='mt-5'>
                        <a href=""><button className='border-2 px-3 py-2 m-2'>Contact Me</button></a> 
                        <a href=""><button className='bg-gradient-to-r from-orange-500 to-orange-900 p-2 rounded-md m-2'>Get In Touch</button></a>
                    </div>

                  </div>
                 
                </div>
              
            )}
      </div>

      
    </nav>
  );
};

export default Navbar;
