import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import ReviewItem from './ReviewItem'
import AddReviewForm from './AddReviewForm'

const ADD_REVIEW = gql`
mutation ADD_REVIEW($recipe: String!, $rating: String!, $comment: String!){
  addReview(recipe: $recipe, rating: $rating, comment: $comment) {
    _id
    rating
    comment
    user {
      _id
      username
    }
  }
}
`
export default function ReviewList (props) {
  const { reviews, recipeId } = props
  const [addReview, { error: mutationError }] = useMutation(
    ADD_REVIEW,
    {
      onCompleted () {
        window.location.reload()
      },
    })

  return (
    <div>
      <ul>
        {reviews.map((p) => <ReviewItem key={p._id} {...p} />)}

      </ul>

      <div style={{ marginLeft: 20 }}>
        <AddReviewForm
          addReview={addReview}
          mutationError={mutationError}
          recipeId={recipeId}
        />
      </div>

    </div>
  )
}
