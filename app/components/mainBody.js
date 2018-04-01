import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Popular from './popular'
import Favorite from './favorite'

const MainBody = () => (
  <div className='main-body'>
    <Switch>
      <Route exact path='/' component={Popular}/>
      <Route path='/favorite' component={Favorite}/>
    </Switch>
  </div>
)

export default MainBody
