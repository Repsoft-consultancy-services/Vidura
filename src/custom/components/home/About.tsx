import React from 'react'

export default function About() {
  return (
    <div className='tw-bg-gradient-to-br tw-from-custom-primary tw-via-white tw-to-custom-accent tw-py-16 tw-px-3'>
      <div className='tw-max-w-screen-lg tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-gap-5 tw-justify-between tw-items-center'>
        <div className='tw-w-full md:tw-w-1/2'>
          <h2 className='tw-text-4xl tw-font-light tw-text-custom-secondary tw-mb-3'>
            The <span className='tw-font-extrabold'>VIDURA SURVEY'S</span>
          </h2>
          <p className='tw-mb-0 tw-text-2xl tw-font-light tw-text-custom-secondary'>
            Unlike other Frameworks which try to cover everything, It has been built specifically
            for wordpress. Aliquam sapien est, mollis id mattis id, scelerisque sed dolor
          </p>
        </div>
        <button className='btn btn-success'>Know More</button>
      </div>
    </div>
  )
}
