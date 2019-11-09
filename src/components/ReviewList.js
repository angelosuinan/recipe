import React from 'react'

import ReviewItem from './ReviewItem'

export default function ReviewList (props) {
  const { reviews } = props
  return <ul>
    {reviews.map((p) => <ReviewItem key={p._id} {...p} />)}
  </ul>
}
