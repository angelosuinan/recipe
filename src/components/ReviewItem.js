import React from 'react'

export default function ReviewItem (props) {
  const { rating, comment, user: { username } } = props
  return (
    <li>
      <div>
        user: {username}
      </div>
      <div>
        rating: {rating}
      </div>
      <div>
        comment: {comment}
      </div>

    </li>
  )
}
