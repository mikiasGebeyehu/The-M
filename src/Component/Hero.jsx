import avatar from "../assets/avatar.svg";
import { Skills } from "../constant";

const Hero = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center m-4 ml-4'>
        <div className='flex flex-col gap-10 w-full justify-center items-center ml-4 p-4 gap-5'>
            <h3 className='m-5 text-4xl '>About <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-5xl font-bold">Me</span> </h3>
            <p className="max-w-xl text-center oxanium">I'm Mikias Gebeyhu, a third-year University of Gondar student specializing in full-stack development. With skills in both front
                and back-end, I create responsive, user-friendly websites that are both functional and visually engaging. I'm driven to keep
                learning and delivering quality digital experiences.</p>
            <div className="lg:flex m-4  gap-16 ">
                <div className="flex flex-col w-full lg:w-1/4  items-center justify-center py-5">
                     <img src={avatar} alt="profile" width={200} height={200}/>
                </div>
                
                <div className="flex flex-col lg:flex-row bg-gray-800/60 p-6 rounded-lg shadow-lg my-5">
               
                <p className="text-gray-300 text-sm lg:text-base lg:w-1/2 w-full mb-4 lg:mb-0 lg:pr-6 flex items-center text-center lg:text-left">
                    I’m a web developer who crafts responsive, user-friendly websites. I love turning ideas into smooth digital experiences and am continuously improving my skills.
                </p>

               
                <ul className="lg:w-1/2 w-full flex flex-col gap-4">
                    {Skills.map((skill, index) => (
                    <li key={index} className="flex flex-col bg-gray-700 p-4 rounded-md shadow-md">
                        <div className="flex justify-between items-center mb-2">
                        <p className="text-white font-semibold">{skill.label}</p>
                        <p className="text-gray-400 text-sm font-semibold">{skill.per}</p>
                        </div>
                        
                  
                        <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                        <div
                            style={{ width: skill.per }}
                            className="h-full bg-gradient-to-r from-orange-500 to-orange-800 rounded-full"
                        ></div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero
