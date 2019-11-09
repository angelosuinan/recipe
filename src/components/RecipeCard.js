import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard (props) {
  const { recipe } = props

  return (
    <Link to={`/recipe/${recipe._id}`}>
      <div style={{ borderStyle: 'solid', marginBottom: 10, width: '50%' }}>
        <p>
          {recipe.name}
        </p>
        <p>
        - {recipe.description}
        </p>

      </div>
    </Link>

  )
}
