import React from 'react'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}
    style={{
        backgroundImage: `url("https://weblium.com/blog/wp-content/uploads/2019/10/photo-1495085461086-ae0ad0a8fd74-1344x734.jpeg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}>
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`} >
            <h1 className="text-black text-4xl font-semibold ">
                Best Collection for <br/> Your Home
            </h1>
            <p className="text-black text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Vestibulum in nisi eu arcu tempus elementum.
            </p>
            <Link to="/products" className="mt-4 inline-block">
                <div className={`${styles.button} bg-black text-white`}>
                    <span className='font-[poppins] text-[18px'>
                        Shop Now
                    </span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Hero