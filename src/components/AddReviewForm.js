import React from 'react'
import useForm from 'react-hook-form'

export default function AddReviewForm ({ mutationError, addReview, recipeId }) {
  const { handleSubmit, register } = useForm()
  const onSubmit = (values) => {
    addReview({ variables: { ...values, recipe: recipeId } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mutationError && <div className='ui red message'>{JSON.stringify(mutationError)}</div>}
      <p>
        Add your review
      </p>
      <select
        name='rating'
        ref={register({
          required: 'Required',
        })}
      >
        <option value='5'>5</option>
        <option value='4'>4</option>
        <option value='3'>3</option>
        <option value='2'>2</option>
        <option value='1'>1</option>
      </select>
      <textarea rows='2' cols='50'
        name='comment'
        ref={register({
          required: 'Required',
        })}
        placeholder='Your comment'
      />

      <div>
        <button type='submit'>Submit</button>
      </div>

    </form>

  )
}
