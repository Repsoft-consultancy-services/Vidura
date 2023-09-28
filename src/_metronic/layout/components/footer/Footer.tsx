/* eslint-disable react/jsx-no-target-blank */
import {useEffect} from 'react'
import {ILayout, useLayout} from '../../core'

const Footer = () => {
  // const {config} = useLayout()
  // useEffect(() => {
  //   updateDOM(config)
  // }, [config])
  return (
    <div className='tw-w-full tw-max-w-screen-lg tw-mx-auto tw-my-20 tw-grid tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-20'>
      <div>
        <img src='/media/custom/navbar_logo.svg' alt='' className='tw-max-h-[50px] tw-mb-5' />
        <p className='tw-text-white tw-leading-relaxed'>
          "A political survey records the individuals' attitude, opinion, mood, favoritism, and
          personal information. The data is then used to launch political campaigns to have the
          support from the maximum scalps." Generally, the political parties appoint online research
          and survey companies to set themselves in the best winning positions.
        </p>
      </div>
      <div>
        <h2 className='tw-text-white tw-text-3xl tw-font-medium tw-mb-10'>Explore</h2>
        <ul className='tw-text-white tw-m-0 tw-p-0 tw-flex tw-flex-col tw-gap-5'>
          <li>
            <a href='#about' className='tw-text-white'>
              About Us
            </a>
          </li>
          <li>
            <a href='#services' className='tw-text-white'>
              Services
            </a>
          </li>
          <li>
            <a href='#experties' className='tw-text-white'>
              Expertise
            </a>
          </li>
          <li>
            <a href='#contact' className='tw-text-white'>
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='tw-text-white tw-text-3xl tw-font-medium tw-mb-10'>Contact Us</h2>
        <ul className='tw-text-white tw-m-0 tw-p-0 tw-text-base tw-flex tw-flex-col tw-gap-5'>
          <li>
            <span className='tw-flex tw-gap-3 tw-items-start'>
              <img src='/media/custom/icons/location.svg' alt='' style={{height: '1.5rem'}} />
              <span>12-1-508/51 Laxmi Nagar, shanthi Nagar, Secunderabad- 50001 </span>
            </span>
          </li>
          <li>
            <span className='tw-flex tw-gap-3 tw-items-start'>
              <img src='/media/custom/icons/phone.svg' alt='' style={{height: '1.5rem'}} />
              <span>
                <a href='tel:+9163009792288' className='tw-text-white'>
                  +9163009792288
                </a>
              </span>
            </span>
          </li>
          <li>
            <span>
              Mon - Sat 9 am to 8 pm <br />
              Sun - 10 am to 3 pm
            </span>
          </li>
          <li>
            <span className='tw-flex tw-gap-3 tw-items-start'>
              <h3 className='tw-text-white'>@</h3>
              <span>vidura@gamil.com</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className='tw-text-white tw-text-3xl tw-font-medium tw-mb-10'>Stay Connected</h2>
        <ul className='tw-text-white tw-p-0 tw-m-0 tw-flex tw-gap-5'>
          <li>
            <img src='media/custom/icons/instagram.svg' alt='' />
          </li>
          <li>
            <img src='media/custom/icons/youtube.svg' alt='' />
          </li>
          <li>
            <img src='media/custom/icons/twitter.svg' alt='' />
          </li>
          <li>
            <img src='media/custom/icons/facebook.svg' alt='' />
          </li>
        </ul>
      </div>
    </div>
  )
}

const updateDOM = (config: ILayout) => {
  if (config.app?.footer?.fixed?.desktop) {
    document.body.classList.add('data-kt-app-footer-fixed', 'true')
  }

  if (config.app?.footer?.fixed?.mobile) {
    document.body.classList.add('data-kt-app-footer-fixed-mobile', 'true')
  }
}

export {Footer}
