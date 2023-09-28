import React from 'react'

const experties = [
  {
    icon: '/media/custom/icons/analyzing.svg',
    title: 'analyzing',
    description: 'Analyzing the Political Situation & trend Accurately',
  },
  {
    icon: '/media/custom/icons/advices_ex.svg',
    title: 'advises',
    description: 'Best Advises according to the Political Situation',
  },
  {
    icon: '/media/custom/icons/voter.svg',
    title: 'Voter',
    description: 'Taking Deep Into the Voters the Positive of the Candidate Extensively ',
  },
]

export default function Experties() {
  return (
    <div className='tw-max-w-screen-lg tw-mx-auto tw-px-3'>
      <div className='tw-text-center tw-mb-6 lg:tw-mb-20'>
        <h2 className='tw-uppercase tw-text-custom-primary tw-text-5xl md:tw-text-6xl tw-font-extrabold tw-mb-5'>
          Expeties
        </h2>
        <h3 className='tw-uppercase tw-mb-0 tw-text-2xl tw-font-light'>
          TO REDUCE ELECTION COST & INCREASE VOTE SWINGS
        </h3>
      </div>
      <div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-10'>
        {experties.map((experty) => (
          <div key={experty.title}>
            <img
              src={experty.icon}
              alt=''
              className='tw-max-w-[48px] lg:tw-max-w-[100px] tw-mx-auto tw-mb-8'
            />
            <div className='tw-text-center'>
              <h3 className='tw-text-custom-accent tw-text-3xl lg:tw-text-4xl tw-font-bold tw-mb-6 tw-uppercase'>
                {experty.title}
              </h3>
              <p className='tw-text-custom-secondary tw-text-2xl tw-font-[400] tw-mb-0'>
                {experty.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
