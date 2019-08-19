import React, { Suspense } from 'react'
import './App.css'
import Home from './features/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <div className="App">
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  </div>
)

export default App
