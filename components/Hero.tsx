"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Hero = () => {

    const handleScroll = () =>{}

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, or rent a car - quickly and easily!
            </h1>
            <p className='hero__subtitle'>
                Streamline your car rental experience with our effortles booking process.
            </p>

            <CustomButton 
                title="Explore cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
                type='button'
            />

        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <img 
                    src="/hero.png"
                    alt='hero'
                    className='object-contain'
                />
                <div className='hero__image-overlay'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero