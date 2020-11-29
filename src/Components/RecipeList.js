import React from 'react'
import Select from 'react-select'

import database, { groupByType } from './Database'
import './RecipeList.scss'

const RecipeList = props => {
  const recipesGrouped = groupByType(database)
  const optionsGrouped = Object.entries(recipesGrouped).map(
    ([group, items]) => {
      return {
        label: group,
        options: items.map(x => {
          return { label: x, value: x }
        })
      }
    }
  )

  return (
    <div className='RecipeList'>
      <header>
        <h1>To buy</h1>
      </header>

      <main>
        <Select
          isMulti
          name='Recipes'
          defaultValue={props.selectedRecipes}
          options={optionsGrouped}
          className='basic-multi-select'
          classNamePrefix='select'
          onChange={selected => props.setSelectedRecipes(selected)}
        />
      </main>

      <footer>
        <button onClick={() => props.setSeeShoppingList(true)}>
          Shopping List
        </button>
      </footer>
    </div>
  )
}

export default RecipeList
