import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import AddRecipeForm from '../components/AddRecipeForm'

const CREATE_RECIPE = gql`
  mutation CREATE_RECIPE(
    $name: String!,
    $description: String!
    $image: String!
    $steps: String!
    $ingredients: String!
    ){
      createRecipe(
        name: $name
        description: $description
        image: $image
        steps: $steps
        ingredients: $ingredients
        ) {
          _id
          name
          description
          steps
          image
          ingredients
          user {
            _id
            username
          }
          reviews {
            _id
            rating
            comment
          }
        }
    }
`

export default function AddRecipe ({ history }) {
  const [addRecipe, { error: mutationError }] = useMutation(
    CREATE_RECIPE,
    {
      onCompleted ({ createRecipe }) {
        history.replace(`/recipe/${createRecipe._id}`)
      },
    })
  return <div>
    <div>
      <p>Add your own Recipe</p>
    </div>
    <br />
    <AddRecipeForm addRecipe={addRecipe} mutationError={mutationError} />
  </div>
}
