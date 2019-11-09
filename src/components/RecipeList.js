import React from 'react'

import RecipeCard from './RecipeCard'

export default function RecipeList (props) {
  const { recipes } = props
  if (recipes.length === 0) {
    return <p>You dont have recipe yet</p>
  }
  return (
    <div>
      <ul>
        {recipes.map((p) =>
          <li key={p._id}>
            <RecipeCard recipe={p} />
          </li>)
        }
      </ul>
    </div>
  )
}
