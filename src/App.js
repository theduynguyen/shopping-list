import React, { useState, useEffect } from 'react'
import RecipeList from './Components/RecipeList'
import {
  PreliminaryShoppingList,
  ShoppingList
} from './Components/ShoppingList'
import database from './Components/Database'
import { APP_STATES } from './Components/AppStates'

import './App.scss'

const App = props => {
  const [selectedRecipes, setSelectedRecipes] = useState([])
  const [shoppingList, setShoppingList] = useState({})
  const [appState, setAppState] = useState(APP_STATES.RECIPE_LIST)

  // update checkable shopping list every time the recipes change
  useEffect(() => {
    const tempShoppingList = selectedRecipes.reduce((acc, recipe) => {
      let ingredients = database[recipe.value]['ingredients']
      if (ingredients.length > 0) {
        ingredients = ingredients.flat()
        ingredients = Array.from(new Set(ingredients))
      }

      ingredients.map(x => {
        acc[x] = false
        return false
      })
      return acc
    }, {})
    console.log(tempShoppingList)
    setShoppingList(tempShoppingList)
  }, [selectedRecipes])

  const toggleIngredient = ingredient => {
    if (ingredient in shoppingList) {
      let s = { ...shoppingList }
      s[ingredient] = !shoppingList.ingredient
      setShoppingList(s)
    }
  }

  let mainComponent = null
  switch (appState) {
    case APP_STATES.RECIPE_LIST:
      mainComponent = (
        <RecipeList
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
          setAppState={setAppState}
        />
      )
      break
    case APP_STATES.PRELIMINARY_SHOPPING_LIST:
      mainComponent = (
        <PreliminaryShoppingList
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
          setAppState={setAppState}
          toggleIngredient={toggleIngredient}
        />
      )
      break
    case APP_STATES.SHOPPING_LIST:
      mainComponent = (
        <ShoppingList shoppingList={shoppingList} setAppState={setAppState} />
      )
      break
    default:
      mainComponent = (
        <RecipeList
          selectedRecipes={selectedRecipes}
          setSelectedRecipes={setSelectedRecipes}
          setAppState={setAppState}
        />
      )
  }

  return <div className='App'>{mainComponent}</div>
}

export default App
