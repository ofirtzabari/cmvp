import React, { useEffect } from 'react'
import { productData } from '../../../static/data'
import styles from '../../../styles/styles'
import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'

const BestDeals = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
        const bestDeals = d.slice(0, 5);
        setData(bestDeals)
    }, [])
  return (
    <div className='w-11/12 mx-auto'>
        <div className={`${styles.section} `}>
            <div className={`${styles.heading}`}>
                <h1 className='text-white'>Best Deals</h1>
            </div>
            <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap[20px] xl:grid-cols-5 xl:gap-[30px]'>
                {
                    data && data.map((i, index) =>{
                        return(
                            <ProductCard data={i} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BestDeals