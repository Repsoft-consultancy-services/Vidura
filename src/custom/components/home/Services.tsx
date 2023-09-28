import React from 'react'

const services = [
  {
    service: 'Election Campaign Management',
    icon: '/media/custom/icons/management.svg',
  },
  {
    service: 'Public Opinion Survey',
    icon: '/media/custom/icons/survey.svg',
  },
  {
    service: 'Best Advices',
    icon: '/media/custom/icons/advices.svg',
  },
  {
    service: 'Digital Media Support',
    icon: '/media/custom/icons/support.svg',
  },
]
export default function Services() {
  return (
    <div className='tw-max-w-screen-lg tw-mx-auto tw-p-3'>
      <div className='tw-mb-6 lg:tw-mb-20'>
        <h2 className='tw-text-5xl md:tw-text-6xl tw-text-custom-primary tw-font-extrabold tw-mb-3'>
          Services
        </h2>
        <h3 className='tw-mb-0 tw-text-2xl tw-font-light'>
          TO REDUCE ELECTION COST & INCREASE VOTE SWINGS
        </h3>
      </div>
      <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-10'>
        {services.map((service) => (
          <div
            key={service.service}
            className='tw-flex tw-justify-between tw-items-center tw-gap-5'
          >
            <div className='tw-p-10 tw-border-2 tw-border-custom-accent tw-rounded-full tw-max-w-fit'>
              <img src={service.icon} alt='' />
            </div>
            <div>
              <h4 className='tw-text-xl tw-font-light tw-text-custom-secondary tw-mb-6'>
                {service.service}
              </h4>
              <p className='tw-mb-0 tw-text-custom-secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium quis
                sed. Nulla dolor nostrum, excepturi vero temporibus ipsa eaque!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
