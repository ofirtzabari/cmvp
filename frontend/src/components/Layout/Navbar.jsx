import React from 'react'
import styles from '../../styles/styles'
import { navItems } from '../../static/data'
import { Link } from 'react-router-dom'

const Navbar = ({active}) => {
  return (
    <div className={styles.normalFlex}>
        {navItems && navItems.map((i, index) => (
           <div className='flex'>
                <Link to={i.link}
                    className={`${active === index+1 ? "text-red-600": "text-white"} font-[500] px-6 cursor-pointer`}/>
                    {i.title}
           </div>
        ))}
    </div>
  )
}

export default Navbar