import React from 'react'

import ReviewList from './ReviewList'

export default function RecipeShow (props) {
  const { recipe } = props

  return <div>
    <div>
      <img src={`${recipe.image}`} alt='NO PHOTO' height='200' width='200' />
    </div>
    <div>
      <p>Name: {recipe.name}</p>
    </div>
    <div>
      <p>User: {recipe.user.username}</p>
    </div>
    <div>
      <p>Description: {recipe.description}</p>
    </div>
    <div>
      <p>Steps: {recipe.steps}</p>
    </div>
    <div>
      <p>Ingredients: {recipe.ingredients}</p>
    </div>
    <br />
    <div>
      Reviews: <ReviewList reviews={recipe.reviews} />
    </div>

  </div>
}
