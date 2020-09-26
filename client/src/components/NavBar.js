import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from './../context/AuthContext'

const NavBar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const logoutHandler = (e) => {
    e.preventDefault()
    auth.logout()
    history.push('/')
  }
  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
        <span className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Создать</NavLink>
          </li>
          <li>
            <NavLink to="/links">Ссылки</NavLink>
          </li>
          <li>
            <a onClick={logoutHandler} href="/">
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
