import React from 'react'
import { testimonials } from '../constant'

const Review = () => {
  return (
    <section className='flex flex-col justify-center items-center text-center my-10'>
        <div className='flex flex-col justify-center items-center'>
                <div className='my-5 py-5'>
                    <h3 className='playwrite-gb-t text-5xl mt-10 '>What <span className='bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>
                        Our Customres</span>  say?</h3>
                   <p className='text-xl p-5 oxanium '>
                        Hear genuine stories from our satisfied customers
                        about their exceptional experiences with us.                   
                   </p>
                </div>
                <ul>
                    <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
                        {testimonials.map((testimonial) => (
                        <div className='bg-black p-5 rounded-[50px] shadow-[0px_4px_12px_rgba(255,255,255,0.5)]'>
                            <li className='flex flex-col items-center justify-center m-2 playwrite-gb-t bg-gradient-to-r from-orange-500 to-orange-900 text-transparent bg-clip-text'>{testimonial.user}</li>
                            <li className='flex flex-col items-center justify-center p-2 '>{testimonial.image}</li>
                            <li className='flex flex-col items-center justify-center playwrite-gb-t p-2  bg-gradient-to-r from-yellow-500 to-yellow-900 text-transparent bg-clip-text'>FROM : {testimonial.company}</li>
                            <li className='oxanium max-w-sm'>{testimonial.text}</li>
                        </div>
                        ))}
                    </div>
                </ul>
        </div>
    </section>
  )
}

export default Review
