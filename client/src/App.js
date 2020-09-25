import React from 'react'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import 'materialize-css'
import {AuthContext} from './context/AuthContext'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
  const {token, login, logout, userId} = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuth}}>
      <Router>
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App
