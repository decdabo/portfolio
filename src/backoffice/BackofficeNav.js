import React from 'react'
import { Link } from 'react-router-dom'

export const BackofficeNav = ({ active }) => {
  return (
    <nav className='content__nav animate__animated animate__fadeIn'>
      <Link to="/home" className={ `nav__link-backoffice ${active === "/home" ? "nav__link-active" : ""}` }>Home Image</Link>
      <Link to="/about" className={ `nav__link-backoffice ${active === "/about" ? "nav__link-active" : ""}` }>About Image</Link>
      <Link to="/skills" className={ `nav__link-backoffice ${active === "/skills" ? "nav__link-active" : ""}` }>Skills Image</Link>
      <Link to="/contact" className={ `nav__link-backoffice ${active === "/contact" ? "nav__link-active" : ""}` }>Contact Image</Link>
      <div className='nav__relleno-nav' />
    </nav>
  )
}
