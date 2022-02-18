import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

import Landing from './Landing'
import Pricing from './Pricing'

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            {/* change */}
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}

export default App
