import React, { useState } from 'react'
import database from './Database'

import './ShoppingList.scss'

const ShoppingListElement = props => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      className={checked ? 'ShoppingListElementChecked' : 'ShoppingListElement'}
      onClick={() => setChecked(!checked)}
    >
      {props.ingredient}
    </div>
  )
}

const ShoppingList = props => {
  let shoppingList = props.selectedRecipes.map(
    recipe => database[recipe.value]['ingredients']
  )
  if (shoppingList.length > 0) {
    shoppingList = shoppingList.flat()
    shoppingList = Array.from(new Set(shoppingList))
  }

  return (
    <div className='ShoppingList'>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        {shoppingList.map((x, idx) => (
          <ShoppingListElement key={idx} ingredient={x} />
        ))}
      </main>

      <footer>
        <button onClick={() => props.setSeeShoppingList(false)}>Back</button>
      </footer>
    </div>
  )
}

export default ShoppingList
