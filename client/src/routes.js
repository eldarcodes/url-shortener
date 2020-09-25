import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LinksPage from './components/LinksPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import AuthPage from './components/AuthPage'

export const useRoutes = (isAuth) => {
  return (
    <>
      {isAuth ? (
        <Switch>
          <Route path="/links" exact>
            <LinksPage />
          </Route>
          <Route path="/create" exact>
            <CreatePage />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailPage />
          </Route>
          <Redirect to="/create" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            <AuthPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </>
  )
}
