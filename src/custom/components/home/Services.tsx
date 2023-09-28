import React from 'react'

const services = [
  {
    service: 'Election Campaign Management',
    icon: '/media/custom/icons/management.svg',
    description:
      'Election campaign management involves planning, messaging, and mobilization to promote a candidate or party and secure electoral success. It includes fundraising, grassroots organizing, and strategic outreach to engage voters effectively. Efficient campaign management is critical for achieving electoral objectives.',
  },
  {
    service: 'Public Opinion Survey',
    icon: '/media/custom/icons/survey.svg',
    description:
      'Public opinion surveys collect data to gauge public sentiments on various issues, candidates, or policies. They involve designing unbiased questions, selecting representative samples, and analyzing responses to inform political decisions, policies, and campaigns. Accurate survey methodology and interpretation are crucial for understanding and responding to public sentiment.',
  },
  {
    service: 'Best Advices',
    icon: '/media/custom/icons/advices.svg',
    description:
      'Integrity Matters: Uphold ethical principles, transparency, and honesty in all political endeavors to earn trust and credibility. Active Engagement: Engage with constituents, listen to their concerns, and work collaboratively to address pressing issues effectively. Long-Term Vision: Focus on long-term, sustainable solutions rather than short-term gains, ensuring a better future for your constituency and society as a whole.',
  },
  {
    service: 'Digital Media Support',
    icon: '/media/custom/icons/support.svg',
    description:
      "Digital media support involves leveraging online platforms and tools to enhance brand visibility, engage audiences, and achieve marketing goals. It encompasses content creation, social media management, and data-driven strategies to optimize online presence and performance. Effective digital media support is essential in today's digital landscape for reaching and connecting with a wide and diverse audience.",
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
            <div className='tw-p-8 tw-border-2 tw-border-custom-accent tw-rounded-full tw-max-w-fit'>
              <img src={service.icon} alt='' className='tw-w-[200px]'/>
            </div>
            <div>
              <h4 className='tw-text-xl tw-font-light tw-text-custom-secondary tw-mb-6'>
                {service.service}
              </h4>
              <p className='tw-mb-0 tw-text-custom-secondary'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
