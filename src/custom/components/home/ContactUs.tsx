import React from 'react'

export default function ContactUs() {
  return (
    <div className='tw-max-w-screen-lg tw-mx-auto tw-px-3'>
      <h3 className='tw-text-2xl tw-font-medium tw-mb-5 tw-text-center'>
        TO REDUCE ELECTION COST & INCREASE VOTE SWINGS
      </h3>
      <div className='tw-mx-auto tw-flex tw-border-2 tw-border-custom-primary tw-rounded-full tw-max-w-fit tw-overflow-hidden tw-text-xl tw-relative'>
        <button className='tw-text-custom-primary tw-px-12 tw-py-3 font-[Poppins]'>
          Contact Us
        </button>
        <button className='tw-bg-custom-primary tw-text-white tw-px-12 tw-py-3 font-[Poppins]'>
          Connect Us
        </button>
        <div className='tw-absolute tw-h-full tw-aspect-square tw-border-2 tw-border-custom-primary tw-rounded-full tw-bg-white tw-left-1/2 -tw-translate-x-1/2 tw-grid tw-place-items-center'>
          <p className='tw-m-0 tw-text-custom-primary font-[Poppins]'>or</p>
        </div>
      </div>
    </div>
  )
}
