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
          <li>About Us</li>
          <li>Services</li>
          <li>Experties</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h2 className='tw-text-white tw-text-3xl tw-font-medium tw-mb-10'>Contact Us</h2>
        <ul className='tw-text-white tw-m-0 tw-p-0 tw-text-base tw-flex tw-flex-col tw-gap-5'>
          <li>
            <span className='tw-flex tw-gap-3 tw-items-start'>
              <img src='/media/custom/icons/location.svg' alt='' style={{height: '1.5rem'}} />
              <span>Abou71 Pilgrim Avenue, Chevy Chase,MD 20815t us</span>
            </span>
          </li>
          <li>
            <span className='tw-flex tw-gap-3 tw-items-start'>
              <img src='/media/custom/icons/phone.svg' alt='' style={{height: '1.5rem'}} />
              <span>
                (226) 906-272 <br />
                (671) 925-1352
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