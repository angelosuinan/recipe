import React from 'react'
import useForm from 'react-hook-form'

export default function AddRecipeForm ({ addRecipe, mutationError }) {
  const { handleSubmit, register } = useForm()

  const onSubmit = (values) => {
    addRecipe({ variables: values })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mutationError && <div className='ui red message'>{JSON.stringify(mutationError)}</div>}
      <div>
        <label>Name: </label>
        <input
          name='name'
          ref={register({
            required: 'Required',
          })}
        />
      </div>

      <div>
        <label>Description: </label>
        <textarea rows='2' cols='50'
          name='description'
          ref={register({
            required: 'Required',
          })}
        />
      </div>

      <div>
        <label>Ingredients: </label>
        <textarea rows='10' cols='20'
          name='ingredients'
          ref={register({
            required: 'Required',
          })}
        />
      </div>

      <div>
        <label>Steps: </label>
        <textarea rows='10' cols='20'
          name='steps'
          ref={register({
            required: 'Required',
          })}
        />
      </div>

      <div>
        <label>Image url: </label>
        <input
          name='image'
          ref={register({
            required: 'Required',
          })}
        />
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>

    </form>
  )
}
