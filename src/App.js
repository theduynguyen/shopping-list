import React, { useState, useEffect } from 'react'
import Select from 'react-select'

import database from './Database'

import './App.scss'

const RecipeList = props => {
  const options = Object.keys(database).map(recipe => {
    return { value: recipe, label: recipe }
  })

  return (
    <main>
      <Select
        isMulti
        name='Recipes'
        options={options}
        className='basic-multi-select'
        classNamePrefix='select'
        onChange={selected => props.setRecipes(selected)}
      />
    </main>
  )
}

const IngredientListElement = props => {
  return (
    <main>
      {props.ingredientList.map(x => (
        <div>{x}</div>
      ))}
    </main>
  )
}

const IngredientList = props => {
  return (
    <main>
      {props.selectedRecipes.map(recipe => (
        <IngredientListElement ingredientList={database[recipe.value]} />
      ))}
    </main>
  )
}

const App = props => {
  const [selectedRecipes, setSelectedRecipes] = useState([])

  useEffect(() => {
    console.log(selectedRecipes)
  }, [selectedRecipes])

  return (
    <div className='App'>
      <RecipeList setRecipes={setSelectedRecipes} />
      <IngredientList selectedRecipes={selectedRecipes} />
    </div>
  )
}

export default App
