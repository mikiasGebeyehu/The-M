import  service_1  from "../assets/service_1.svg"
import  service_2  from "../assets/service_2.svg"
import  service_3  from "../assets/service_3.svg"

import  work_1  from "../assets/work_1.svg"
import  work_2  from "../assets/work_2.svg"
import  work_3  from "../assets/work_3.svg"
import  work_4  from "../assets/work_4.svg"
import  work_5  from "../assets/work_5.svg"
import  work_6  from "../assets/work_6.svg"

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import price_1 from "../assets/price_1.svg"
import price_2 from "../assets/price_2.svg"
import price_3 from "../assets/price_3.svg"

import { facebook, instagram,  twitter } from "../assets/icons";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const Skills =[
  { label: "Development",
     per:"90%",
    draw:
      <div class="flex w-full h-2 rounded-full">
        <div class="bg-orange-500 w-[90%] h-full rounded-l-full"></div>
        <div class="bg-white w-[10%] h-full rounded-r-full"></div>
      </div>
  },
  { label: "UI/UX Design",
     per:"74%",
     draw:
      <div class="flex w-full h-2 rounded-full">
        <div class="bg-yellow-500 w-[74%] h-full rounded-l-full"></div>
        <div class="bg-white w-[26%] h-full rounded-r-full"></div>
      </div>
  },
  { label: "APP Development",
     per:"35%",
     draw:
     <div class="flex w-full h-2 rounded-full">
       <div class="bg-red-500 w-[35%] h-full rounded-l-full"></div>
       <div class="bg-white w-[65%] h-full rounded-r-full"></div>
     </div>
    }
]

export const services =[
  { image: <img src={service_1} alt="Design" width={30}/>,
    label:"UI/UX Design",
    intro: <p>
       I create intuitive , enhanced usability
       and  from wireframes to
       prototypes.
    </p>
  },

  { image: <img src={service_3} alt="Consultancy" width={30}/>,
    label:"Consultancy",
    intro: <p>
       I provide agile project , technical consulting and clear documentation.
    </p>
 },

 { image: <img src={service_2} alt="Development" width={30}/>,
    label:"Web Development",
    intro: <p>
      I build responsive, user-friendly websites with seamless
       functionality.
    </p>
}
]

export const recents = [
  {
    image: <a href=""> 
      <img src={work_1} alt="works" className="hover:bg-orange-500  p-2 rounded-[30px] inline-block"/>
     </a> 
  },
  {
    image: <a href="">
       <img src={work_2} alt="works" className="hover:bg-orange-500 p-2 rounded-[30px] inline-block"/>
    </a>
  },
  {
    image: <a href="">
      <img src={work_3} alt="works" className="hover:bg-orange-500 p-2 rounded-[30px] inline-block"/>
    </a> 
  },
  {
    image: <a href="">
       <img src={work_4} alt="works" className="hover:bg-orange-500 p-2 rounded-[30px] inline-block"/>
    </a>
  },
  {
    image: <a href="">
      <img src={work_5} alt="works" className="hover:bg-orange-500 p-2 rounded-[30px] inline-block"/>
    </a> 
  },
  {
    image: <a href="">
      <img src={work_6} alt="works" className="hover:bg-orange-500 p-2 rounded-[30px] inline-block"/>
    </a> 
  },  
]

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: <img src={user1} alt="" width={120} className="rounded-full flex flex-col justify-center items-center"/>,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: <img src={user2} alt="" width={120} className="rounded-full flex flex-col justify-center items-center"/>,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: <img src={user3} alt="" width={120} className="rounded-full flex flex-col justify-center items-center"/>,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: <img src={user4} alt="" width={120} className="rounded-full flex flex-col justify-center items-center"/>,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: <img src={user5} alt="" width={120} className="rounded-full flex flex-col justify-center items-center"/>,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: <img src={user6} alt="" width={120} className="rounded-full flex flex-col justify-center items-center"/>,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    image: <img src={price_1} alt="" width={60} className="bg-orange-500 rounded-full p-2"/>,
    features: [
      "Basic setup for small projects with simple layout adjustments, basic SEO, and limited support",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    image: <img src={price_2} alt="" width={50} className="bg-orange-500 rounded-full p-2"/>,
    features: [
      "Custom development for up to 5 pages, including animations, interactivity, SEO optimization, and priority support.",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    image: <img src={price_3} alt="" width={50} className="bg-orange-500 rounded-full p-2"/>,
    features: [
      "Full-scale, complex development with advanced features, performance optimization, and dedicated 24/7 support.",
    ],
  },
];

export const footerLinks = [
  {
      title: "Products",
      links: [
          { name: "Air Force 1", link: "/" },
          { name: "Air Max 1", link: "/" },
          { name: "Air Jordan 1", link: "/" },
          { name: "Air Force 2", link: "/" },
          { name: "Nike Waffle Racer", link: "/" },
          { name: "Nike Cortez", link: "/" },
      ],
  },
  {
      title: "Help",
      links: [
          { name: "About us", link: "/" },
          { name: "FAQs", link: "/" },
          { name: "How it works", link: "/" },
          { name: "Privacy policy", link: "/" },
          { name: "Payment policy", link: "/" },
      ],
  },
  {
      title: "Get in touch",
      links: [
          { name: "mikiasgebeyehu441@gmail.com", link: "mikiasgebeyehu441@gmail.com" },
          { name: "+251-941-048-686", link: "tel:+251-941-048-686" },
      ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];