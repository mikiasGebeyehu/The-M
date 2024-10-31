import { services } from "../constant"



const Services = () => {
  return (
    <section className='flex flex-col justify-center items-center m-3 w-full'>
      <div className="flex flex-col justify-center items-center ">
        <h3 className="text-4xl my-5  bg-gradient max-w-[350px] text-center bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text  playwrite-gb-t">Services that we Offered</h3>
        <p className="flex flex-col justify-center items-center text-center max-w-2xl oxanium m-5">
           I specialize in creating responsive websites, ensuring fast performance
           and seamless user experiences. From front-end design to back-end development,
           I provide end-to-end web solutions tailored to your needs</p>
      </div>

      <div className="flex my-6">
        <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-5 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center bg-black rounded-[30px] p-4 shadow-[0px_4px_12px_rgba(255,255,255,0.5)]"
            >
              <p className="playwrite-gb-s p-4 m-2">{service.label}</p>
              <div>{service.image}</div>
              <p className="max-w-[250px] text-center oxanium m-3 p-3">
                {service.intro}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Services
