import { recents } from "../constant"

const Recents = () => {
  return (
    <section className="bg-black">
        <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl my-7 bg-gradient max-w-[350px] text-center bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text  playwrite-gb-t">
                Experience
            </h3>
            <div>
                <p className="flex flex-col justify-center items-center text-center max-w-2xl oxanium m-5">
                    With three years of experience as a website developer, I specialize in
                    creating user-friendly, responsive web applications using modern technologies.
                    My focus is on delivering scalable solutions that enhance user experience and engagement.
                </p>
                <h3 className="text-3xl my-5  bg-gradient max-w-[350px] text-center bg-gradient-to-r from-yellow-500 to-yellow-900 text-transparent bg-clip-text  playwrite-gb-t">
                    Recent works
                </h3>
            </div>
            <div className="flex flex-col items-center text-center justify-center w-2/3 ">
                <ul className="flex flex-col justify-center items-center text-center grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                    {recents.map((recent) => (
                        <li className=" m-2   rounded-[30px]  shadow-[0px_4px_12px_rgba(255,255,255,0.5)]">
                             {recent.image}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Recents
