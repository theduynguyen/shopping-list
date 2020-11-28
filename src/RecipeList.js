import React from 'react'
import Select from 'react-select'

import database, { groupByType } from './Database'

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

      <button onClick={() => props.setSeeShoppingList(true)}>
        Shopping List
      </button>
    </main>
  )
}

export default RecipeList
