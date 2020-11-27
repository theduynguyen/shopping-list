import React from 'react'
import { Link } from 'react-router-dom'

import database from './Database'

const IngredientListElement = props => {
  return <div className='IngredientListElement'>{props.ingredient}</div>
}

const IngredientList = props => {
  const selectedRecipes = props.location.selectedRecipes
    ? props.location.selectedRecipes
    : []

  let shoppingList = selectedRecipes.map(
    recipe => database[recipe.value]['ingredients']
  )
  if (shoppingList.length > 0) {
    shoppingList = shoppingList.flat()
    shoppingList = Array.from(new Set(shoppingList))
  }

  return (
    <main>
      {shoppingList.map((x, idx) => (
        <IngredientListElement key={idx} ingredient={x} />
      ))}
      <Link to='/'>Back</Link>
    </main>
  )
}

export default IngredientList
