import React, { useRef } from "react";
import Link from "next/link";
import { bikeData } from "@/data/bikeData";
import BikeCard from "./BikeCard";

const RentingFleet = () => {
  // function hanleBookNow to handle booking
  const handleBookNow = (bikeName: string) => {
    console.log(`You clicked Book now for ${bikeName}`);
    alert(`You selected ${bikeName} for rent!`);
  };


  return (
     <section className="section-3 py-10 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 border">
          <h1 className="mx-auto text-center">Renting Fleet</h1>

          {/* {filter Options} */}
          <div className="w-1/2 mx-auto p-2 mt-1 border">
            <div className="border border-red-600 flex item-center justify-between">
              <button className="border border-green-600 p-2 cursor-pointer hover:text-[#97a8ba] transition-all duration-300">
                Show All
              </button>
              <button className="border border-green-600 p-2 cursor-pointer hover:text-[#97a8ba] transition-all duration-300">
                Bikes
              </button>
              <button className="border border-green-600 p-2 cursor-pointer hover:text-[#97a8ba] transition-all duration-300">
                Scooter
              </button>
            </div>
          </div>

          {/* Bikes Cards according to filter */}
          <div className="border border-blue-800 max-w-5xl mx-auto my-2 py-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
              {bikeData.map((bike) => (
                <BikeCard
                  key={bike.id}
                  name={bike.name}
                  pricePerHour={bike.pricePerHour}
                  image={bike.image}
                  mileage={bike.mileage}
                  type={bike.type}
                />
              ))}
            </div>
          </div>

          <div className="mx-auto text-center">
            <Link href="/bikes">
              <button className="border border-[#3c4252] rounded-2xl px-3 py-1 my-2 text-[#3c4252] font-medium cursor-pointer hover:bg-[#3c4252] hover:text-white transition-all duration-300 ">
                Show More
              </button>
            </Link>
          </div>
        </div>
      </section>
  );
};

export default RentingFleet;
