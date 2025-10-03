"use client";
import React from 'react';
import Image from 'next/image';

const MainSection = () => {
  return (
    <main className='border-2 border-gray-950'>
        <section className='section-1'>
             <div className="main-box h-[390px] border border-gray-800 m-1 flex justify-between items-center">
            <div className="booking-bike w-[750px] h-[350px] border border-green-500 ml-7">
                <h2 className='border border-gray-950 text-xl m-2 p-1'>Two wheelers Rental</h2>
                <h1 className='border border-gray-600 text-2xl font-medium m-2 p-1'>Book Your RideNow</h1>
                <p className='border border-gray-900 m-2 p-1'>Start your jounery with easy and smooth with us.</p>

                {/* Search booking box */}
                <div className='border border-e-gray-950 w-[480px] h-[140px] m-2'>
                    <div className='border border-green-950 m-2 h-[120px]' >
                        <h3 className='m-2'>Search your next ride</h3>
                        <div className='w-[423px] h-[50px] border border-blue-900 flex justify-center items-center'>
                            <input type="datetime"
                                name='start'
                                placeholder='start Date & Time'
                                required
                                className='border w-[150px] text-center'

                            />
                            <input 
                                type="datetime" 
                                name="end" 
                                placeholder='end date&time'
                                className='border w-[150px] text-center'
                            />
                            <button type='button' className='ml-3 px-1 hover:bg-gray-300 border border-gray-950 cursor-pointer'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-box w-[610px] h-[350px] border border-red-800 mr-7 relative">
                <Image
                    src='/TVS Jupiter.jpg'
                    alt='Bike image'
                    fill
                    className=' style={{objectFit: "cover"}}'  
                />
            </div>
        </div>
        </section>
       

        {/* Bikes Features badges */}
       <section className='section-2 bg-white py-10'>
        <div className='max-w-7xl border mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3  h-[50px]'>
                {/* feature 1 */}
                <div className='border flex items-center justify-center rounded-2xl shadow-md gap-2.5'>
                    <i className='text-xl text-cyan-500'>🌐</i>
                    <span className='text-sm'>Govnt. Complaint Vehicles</span>
                </div>
                {/* feature 2 */}
                <div className='flex border items-center justify-center gap-2.5 bg-white'>
                    <i className='text-xl text-cyan-500'>🏠</i>
                    <span className='text-sm'>Doorstep Delivery of Vehicles</span>
                </div>
                {/* feature 3 */}
                <div className='flex border items-center justify-center gap-2.5 bg-white'>
                    <i className='text-xl text-cyan-500 '>🔐</i>
                    <span className='text-sm'>Instant & Secure Payment</span>
                </div>
                {/* feature 4 */}
                <div className='flex border items-center justify-center gap-2.5 bg-white'>
                    <i className='text-xl text-cyan-500'>🧑‍🔧</i>
                    <span className='text-sm'>Service & Maintenance</span>
                </div>
                {/* feature 5 */}
                <div className='flex border items-center justify-center gap-2.5 bg-white'>
                    <i className='text-xl text-cyan-500'>🛴</i>
                    <span className='text-sm'>Sanitized Vehicles</span>
                </div>
            </div>

        </div>

       </section>
       
    </main>
  )
}

export default MainSection
