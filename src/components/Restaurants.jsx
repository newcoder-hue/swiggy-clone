import React, { useEffect, useState } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from 'react';

function Restaurants() {

    const [restu, setRestu] = useState([])
    const restRef = useRef(null)

    useEffect(() => {
        const getRestu = async () => {
            const response = await fetch('http://localhost:5000/restaurants')
            const data = await response.json()
            setRestu(data)
        }

        getRestu()

    }, [])

    console.log(restu[0])


    function leftbtn() {
        if (restRef.current) {
            restRef.current.scrollLeft -= 500
        }
    }

    function rightbtn() {
        if (restRef.current) {
            restRef.current.scrollLeft += 500
        }
    }






    return (
        <div className='px-36 py-5 text-xl font-semibold '>
            <div className='flex justify-between'>
                <div>
                    <h2>Discover best restaurants on Dineout</h2>
                </div>
                <div className='flex gap-3'>
                    <FiArrowLeft className='bg-gray-400 w-[30px] h-[30px] p-1 rounded-full cursor-pointer' onClick={() => {
                        leftbtn()
                    }} />
                    <FiArrowRight className='bg-gray-400 w-[30px] h-[30px] p-1 rounded-full cursor-pointer' onClick={() => {
                        rightbtn()
                    }} />
                </div>
            </div>

            <div ref={restRef} className='restaurants flex gap-4 mt-5   overflow-x-scroll scroll-smooth shadow-sm'>
                {
                    restu.map((restaurant, index) => {
                        return (
                            <div key={index} className=' shadow-xl rounded-md flex-1 min-w-[260px] min-h-[300px]'>
                                <div className='img-section relative'>
                                    <div className='black-overlay flex  justify-between text-white bottom-0'>
                                        <div className=''>{restaurant.title}</div>
                                        <div className=''> {restaurant.rating}</div>
                                    </div>
                                    <img src={restaurant.img} alt="" className='rounded-md' />

                                </div>
                                <div className='py-2 px-1  '>
                                    <div className='flex justify-between my-1  text-[14px] text-gray-700 '>
                                        <p>{restaurant.type}</p>
                                        <p>{restaurant.Prices}</p>
                                    </div>
                                    <div className='flex justify-between my-1 text-[14px] text-gray-700 '>
                                        <p>{restaurant.location}</p>
                                        <p>{restaurant.distance}</p>
                                    </div>
                                    <div className='flex  text-[14px] my-1 text-gray-700 '>
                                        <p className='bg-gray-300  px-2 rounded-lg'>{restaurant.bookingType}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Restaurants
