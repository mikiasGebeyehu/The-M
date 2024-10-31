import { socialMedia } from "../constant";
import { footerLinks } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-black w-full flex flex-col items-center py-10 text-white">

      <div className="w-full max-w-screen-lg px-4 flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-4xl tracking-tight rubik-wet-paint-regular bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text mb-4">
            The M
          </p>
          <p className="text-sm text-gray-400 max-w-md lg:pl-2">
            Get your website ready for the new term with our future goal. Find your perfect promotions in our giveaways and get rewarded.
          </p>
          <div className="flex gap-4 mt-6">
            {socialMedia.map((social, index) => (
              <img 
                key={index}
                src={social.src} 
                alt={social.name} 
                width={30} 
                className="bg-white rounded-full p-2 cursor-pointer transition-transform transform hover:scale-110"
              />
            ))}
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xl font-semibold text-gray-100 mb-3 bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text">
                {footerLink.title}
              </span>
              <div className="space-y-2">
                {footerLink.links.map((link, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-screen-lg mt-10 text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} The M. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
