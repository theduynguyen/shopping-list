import React, { useState } from 'react'
import database from './Database'
import { APP_STATES } from './AppStates'

import './ShoppingList.scss'

export const PreliminaryShoppingList = props => {
  return (
    <div className='ShoppingList PreliminaryShoppingList'>
      <header>
        <h1>Preliminary Shopping List</h1>
      </header>
      <main>
        {Object.entries(props.shoppingList).map(
          ([ingredient, checked], idx) => (
            <div
              className={
                checked ? 'ShoppingListElementChecked' : 'ShoppingListElement'
              }
              onClick={() => props.toggleIngredient(ingredient)}
            >
              {ingredient}
            </div>
          )
        )}
      </main>

      <footer>
        <button onClick={() => props.setAppState(APP_STATES.RECIPE_LIST)}>
          Back
        </button>
        <button onClick={() => props.setAppState(APP_STATES.SHOPPING_LIST)}>
          Next
        </button>
      </footer>
    </div>
  )
}

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

export const ShoppingList = props => {
  return (
    <div className='ShoppingList'>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        {Object.entries(props.shoppingList).map(
          ([ingredient, checked], idx) => {
            if (!checked)
              return (
                <ShoppingListElement key={ingredient} ingredient={ingredient} />
              )
            else return null
          }
        )}
      </main>

      <footer>
        <button
          onClick={() =>
            props.setAppState(APP_STATES.PRELIMINARY_SHOPPING_LIST)
          }
        >
          Back
        </button>
      </footer>
    </div>
  )
}
