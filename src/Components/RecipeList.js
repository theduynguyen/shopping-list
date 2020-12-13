import React from 'react'
import Select from 'react-select'

import { groupByType } from './Database'
import { APP_STATES } from './AppStates'

import './RecipeList.scss'

const RecipeList = props => {
  const recipesGrouped = groupByType(props.database)
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
        <button
          onClick={() =>
            props.setAppState(APP_STATES.PRELIMINARY_SHOPPING_LIST)
          }
        >
          Next
        </button>
      </footer>
    </div>
  )
}

export default RecipeList
