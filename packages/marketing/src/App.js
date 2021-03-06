import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Switch, Route, Router } from 'react-router-dom'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

import Landing from './Landing'
import Pricing from './Pricing'

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}

export default App
