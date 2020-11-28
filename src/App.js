import React, { useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import database, { groupByType } from './Database'
import RecipeList from './RecipeList'
import ShoppingList from './ShoppingList'

import './App.scss'

const App = props => {
  const [selectedRecipes, setSelectedRecipes] = useState([])
  const [seeShoppingList, setSeeShoppingList] = useState(false)

  return (
    <div className='App'>
      {seeShoppingList ? (
        <ShoppingList
          selectedRecipes={selectedRecipes}
          setSeeShoppingList={setSeeShoppingList}
        />
      ) : (
        <RecipeList
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
          setSeeShoppingList={setSeeShoppingList}
        />
      )}

      {/* <Switch>
        <Route path='/' component={RecipeList} exact />
        <Route path='/shopping' component={IngredientList} />
      </Switch> */}
    </div>
  )
}

export default App
