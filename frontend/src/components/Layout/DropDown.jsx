import React from 'react'
import { useNavigate } from 'react-router-dom'

const DropDown = ({categoriesData, setDropDown}) => {
    const navigate  = useNavigate();
    const SubmitHandle = (i) => {
        navigate(`/products?category=${i.title}`);
        setDropDown(false);
        window.location.reload();
    }
  return (
    <div className='pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-md'>
        {
            categoriesData ? categoriesData.map((i, index) => (
                <div key={index} onClick={() => SubmitHandle(i)} className='flex p-2 hover:bg-gray-100 cursor-pointer '>
                    {/* <img src={i.image_Url} alt={i.title} className='w-6 h-6 inline-block mr-2'/> */}
                    <h3>{i.title}</h3>
                    </div>
            )) : null
        }
    </div>
  )
}

export default DropDown