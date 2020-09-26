import React from 'react'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import 'materialize-css'
import {AuthContext} from './context/AuthContext'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar'
import Loader from './components/Loader'

const App = () => {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)
  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
      <Router>
        {isAuth && <NavBar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
