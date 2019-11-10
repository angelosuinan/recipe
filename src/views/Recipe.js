import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import Loading from '../components/Loading'
import RecipeShow from '../components/RecipeShow'

const RECIPE = gql`
  query RECIPE($id: String!){
    recipe(id:$id) {
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
        user {
          _id
          username
        }
      }
      user {
        _id
        username
      }
    }
  }
`

export default function Recipe (props) {
  const { match: { params: { id } } } = props
  const { loading, data } = useQuery(
    RECIPE,
    { variables: { id } },
  )
  if (loading) return <Loading />

  return <RecipeShow recipe={data.recipe} />
}
