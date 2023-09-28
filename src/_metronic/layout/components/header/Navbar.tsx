import clsx from 'clsx'
import Dropdown from 'react-bootstrap/Dropdown'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'

const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'fs-1'

const Navbar = () => {
  const {config} = useLayout()
  const links = [
    {label: 'Home', link: '#'},
    {label: 'Services', link: '#services'},
    {label: 'Experties', link: '#experties'},
    {label: 'Contact Us', link: '#contact'},
  ]
  return (
    <nav className='app-navbar tw-ms-auto tw-items-center'>
      <Dropdown className='tw-inline md:tw-hidden mx-2 tw-my-3'>
        <Dropdown.Toggle
          className='btn btn-icon btn-lg btn-success tw-my-auto after:tw-hidden'
          id='dropdown-autoclose-true'
        >
          <i className='bi bi-list tw-text-2xl'></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {links.map((link) => (
            <Dropdown.Item key={link.label} href={link.link} className='font-[Poppins]'>
              {link.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <ul className='tw-items-center tw-mb-0 tw-gap-10 tw-text-2xl tw-font-semibold tw-hidden md:tw-flex'>
        {links.map((link) => (
          <li key={link.label} className='font-[Poppins] '>
            <a href={link.link} className='tw-text-white hover:tw-text-custom-accent'>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export {Navbar}
