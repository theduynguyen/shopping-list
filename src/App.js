import React, { useState } from 'react'
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
    </div>
  )
}

export default App
