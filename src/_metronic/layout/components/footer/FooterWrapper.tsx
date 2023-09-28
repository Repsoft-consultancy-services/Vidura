import clsx from 'clsx'
import {useLayout} from '../../core'
import {Footer} from './Footer'

const FooterWrapper = () => {
  const {config} = useLayout()
  if (!config.app?.footer?.display) {
    return null
  }

  return (
    <div className='tw-bg-custom-secondary tw-px-3' id='kt_app_footer'>
      <Footer />
      {/* {config.app.footer.containerClass ? (
        <div className={clsx('app-container', config.app.footer.containerClass)}>
          <Footer />
        </div>
      ) : (
        <Footer />
      )} */}
    </div>
  )
}

export {FooterWrapper}
