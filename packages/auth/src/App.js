import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Switch, Route, Router } from 'react-router-dom'

import Signin from './Signin'
import Signup from './Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
})

const App = ({ history, onSignin }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path='/auth/signin'>
              <Signin onSignin={onSignin} />
            </Route>
            <Route path='/auth/signup'>
              <Signup onSignin={onSignin} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App
