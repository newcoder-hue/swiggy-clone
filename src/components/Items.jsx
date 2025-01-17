import React, { useRef, useEffect, useState } from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

function Items() {

    const [items, setItems] = useState([])
    const itemsRef = useRef(null)

    useEffect(() => {
        const getItems = async () => {
            const response = await fetch('http://localhost:5000/items')
            const data = await response.json()
            setItems(data)

        }

        getItems()
    }, [])

    // Items Scroll Events  

    function handleScroll() {
        return itemsRef.current.scrollLeft;
    }


    function ItemLeftArrow() {
        if (itemsRef.current) {
            itemsRef.current.scrollLeft -= 300
        }

    }
    function ItemRightArrow() {
        if (itemsRef.current) {
            itemsRef.current.scrollLeft += 300
        }
    }



    return (
        <div className='px-36 py-5 text-xl font-semibold'>
            <div className='flex justify-between'>
                <div>
                    <h2>What is on your mind?</h2>
                </div>
                <div className='flex gap-3'>
                    <FiArrowLeft className='bg-gray-400 w-[30px] h-[30px] p-1 rounded-full' onClick={ItemLeftArrow} />
                    <FiArrowRight className='bg-gray-400 w-[30px] h-[30px] p-1 rounded-full' onClick={ItemRightArrow} />
                </div>
            </div>
            <div ref={itemsRef} className='what-is-on-your-mind-items  flex gap-4 mt-3  overflow-x-scroll scroll-smooth shadow-sm'

                onScroll={handleScroll}
            >
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className='cursor-pointer '>
                                <img src={item.img} alt="item" className='' style={{ maxWidth: "170px" }} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Items
