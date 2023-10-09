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
        <div className='tw-max-w-screen-xl tw-h-full tw-mx-auto tw-p-3 tw-flex tw-items-start'>
          <div className='tw-mt-10'>
            <div className='tw-flex tw-items-center tw-gap-10 tw-mb-10'>
              <div className='tw-max-w-fit tw-text-custom-primary'>
                <span className='tw-flex tw-justify-between tw-text-4xl lg:tw-text-7xl tw-font-extrabold'>
                  {'VIDURA'.split('').map((ch) => (
                    <span key={ch}>{ch}</span>
                  ))}
                </span>
                <p className='tw-mb-0 tw-whitespace-nowrap tw-font-medium tw-text-white'>
                  Indian Political analysis and Research Organization
                </p>
              </div>
              <p className='tw-text-white tw-text-3xl tw-mb-0 tw-font-semibold tw-font-[Raleway]'>
                A Wise Adviser
              </p>
            </div>
            <h1 className='tw-text-custom-secondar tw-text-4xl lg:tw-text-7xl tw-font-light tw-my-20 tw-text-white'>
              {/* <span className='tw-text-custom-primar tw-font-extrabold'>
                Indian Political analysis
              </span>
              <br />
              and
              <span className='tw-text-custom-accen tw-font-extrabold'>
                {' '}
                Research Organization
              </span> */}
              <span className='tw-font-extrabold'>Expert </span>in <br /> Political{' '}
              <span className='tw-font-extrabold'>Survey's</span>
            </h1>
            <button className='btn btn-outline custom-skeleton-button-success'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
