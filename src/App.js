import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import database, { groupByType } from './Database'
import RecipeList from './RecipeList'
import IngredientList from './IngredientList'

import './App.scss'

const App = props => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={RecipeList} exact />
        <Route path='/shopping' component={IngredientList} />
      </Switch>
    </div>
  )
}

export default App
