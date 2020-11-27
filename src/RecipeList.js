import React, { useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import database, { groupByType } from './Database'

const RecipeList = props => {
  const [selectedRecipes, setSelectedRecipes] = useState([])

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
        options={optionsGrouped}
        className='basic-multi-select'
        classNamePrefix='select'
        onChange={selected => setSelectedRecipes(selected)}
      />
      <Link
        to={{
          pathname: '/shopping',
          selectedRecipes: selectedRecipes
        }}
      >
        Shopping List
      </Link>
    </main>
  )
}

export default RecipeList
