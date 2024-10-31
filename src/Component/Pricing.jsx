import React from 'react'
import { pricingOptions } from '../constant'

const Pricing = () => {
  return (

          <section className='flex flex-col items-center justify-center text-center w-full my-10 py-5 m-2'>
            <div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-5xl m-5 p-5 bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text playwrite-gb-t'>Pricing</h3>
                <p className='oxanium max-w-xl '>Our pricing is based on project complexity, required features,
                  support level, and the scope of customization. We offer flexible
                  packages designed to meet different needs, from basic setups to advanced development with full maintenance and dedicated support, ensuring every client gets
                  the right level of service for their goals and budget.
                </p>
              </div>

              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-3xl my-7 italic'>Some Of Our Packages</h3>
                <ul className='flex flex-col grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
                  {pricingOptions.map((pricingOption) => (
                    <div className='bg-orange-900 w-full rounded-[50px] w-[250px] '>
                      <li className='flex flex-col items-center my-5'>{pricingOption.image}</li>
                      <li className='flex flex-col items-center justify-center my-5 playwrite-gb-t text-3xl'>{pricingOption.title}</li>
                      <li className='max-w-sm my-5 p-5 oxanium text-black'>{pricingOption.features}</li>
                      <li className='text-xl rubik-wet-paint-regular'>{pricingOption.price}/Month</li>

                      <button className='p-5 m-5 text-xl playwrite-gb-t rounded-full bg-black hover:bg-[#222]'>Get Started</button>
                    </div>
                  ))}
                </ul>
              </div>
            </div>

    </section>
  )
}

export default Pricing
