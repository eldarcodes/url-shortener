import React from 'react'
import 'materialize-css'
import {useRoutes} from './routes'

const App = () => {
  const routes = useRoutes(true)
  return <div className="container">{routes}</div>
}

export default App
