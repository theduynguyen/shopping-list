import React from 'react'
import database from './Database'

import './ShoppingList.scss'

const ShoppingListElement = props => {
  return <div className='ShoppingListElement'>{props.ingredient}</div>
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
      {shoppingList.map((x, idx) => (
        <ShoppingListElement key={idx} ingredient={x} />
      ))}

      <button onClick={() => props.setSeeShoppingList(false)}>Back</button>
    </div>
  )
}

export default ShoppingList
