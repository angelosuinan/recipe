import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard (props) {
  const { recipe } = props
  const { user } = recipe
  return (
    <Link to={`/recipe/${recipe._id}`}>
      <div style={{ borderStyle: 'solid', marginBottom: 10, width: '50%' }}>
        <p >
          <img src={`${recipe.image}`} alt='NO PHOTO' height='45' width='45' />
        </p>
        <p>
          {recipe.name}
        </p>
        <p>
        - by: {user.username}
        </p>

      </div>
    </Link>

  )
}
