import React from 'react'

export default function Header() {
  return (
    <div className='tw-relative tw-overflow-hidden tw-bg-white'>
      <img
        src='/media/custom/images/header-bg.png'
        alt=''
        className='tw-w-full tw-object-cover tw-object-left tw-hidden md:tw-inline'
      />
      <img
        src='/media/custom/images/header-bg-mob.png'
        alt=''
        className='tw-w-full tw-object-cover tw-object-left tw-inline md:tw-hidden'
      />
      <div className='tw-absolute tw-inset-0 tw-h-full tw-w-full'>
        <div className='tw-max-w-screen-lg tw-h-full tw-mx-auto tw-p-3 tw-flex tw-items-center'>
          <div>
            <h1 className='tw-text-custom-secondary tw-text-5xl lg:tw-text-7xl tw-font-light tw-mb-20'>
              <span className='tw-text-custom-primary tw-font-extrabold'>Expert </span>
              in <br /> Political
              <span className='tw-text-custom-accent tw-font-extrabold'> Survey's</span>
            </h1>
            <button className='btn btn-outline custom-skeleton-button-success'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
