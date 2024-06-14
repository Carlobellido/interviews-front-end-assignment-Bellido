import React from 'react'
import ListRecipes from './ListRecipes'
import './RecipeContainer.css'

function RecipeContainer() {
  return (
    <>
    <div>
       <div className="container">
       <div className="box-1">
        <ListRecipes />
       </div>
        </div>
    </div>
       </>
  )
}

export default RecipeContainer
