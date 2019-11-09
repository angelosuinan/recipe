import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import RecipeList from '../components/RecipeList'
import Loading from '../components/Loading'

const RECIPE_BY_CURRENT_USER = gql`
query RECIPE_BY_CURRENT_USER {
  recipesByCurrentUser {
    _id
    name
    description
    steps
    image
    ingredients
    reviews {
      _id
      rating
      comment
    }
  }
}
`
export default function Profile () {
  const { loading, _error, data } = useQuery(
    RECIPE_BY_CURRENT_USER,
  )

  if (loading) return <Loading />
  return <div>
    <div>
      <p>My Recipes</p>
    </div>
    <RecipeList recipes={data.recipesByCurrentUser} />
  </div>
}
