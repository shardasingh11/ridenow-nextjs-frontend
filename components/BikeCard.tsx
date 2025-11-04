// "use client";
import React from 'react'
import Image from "next/image";

interface BikeCardProps {
  name: string,
  pricePerHour: number,
  image: string,
  mileage: string,
  type: string,
  // onBookNow: (bikeName: string) => void;
}

const BikeCard: React.FC<BikeCardProps> = ({name, pricePerHour, image, mileage, type}) => {
   
  return (
    <div className='border border-green-700 rounded-xl shadow-md hover:shadow-lg transition p-3 flex flex-col items-center '>
        <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            className=' object-cover rounded-md w-full h-40 mb-3'
        />
        <h2 className='text-lg font-semibold'>{name}</h2>
        <p className='text-gray-600 text-sm'>{type}</p>
        <p className='text-gray-800 font-medium mt-2'>₹{pricePerHour}/hr</p>
        <p className='text-gray-500 text-sm'>Mileage: {mileage}</p>
        <button  className='mt-3 bg-blue-600 text-white py-1.5 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer}' >Book Now</button>


      
    </div>
  )
}

export default BikeCard
