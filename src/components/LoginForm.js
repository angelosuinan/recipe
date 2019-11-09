import React from 'react'
import useForm from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function LoginForn ({ login, mutationError }) {
  const { handleSubmit, register, errors } = useForm()

  const onSubmit = ({ username, password }) => {
    login({ variables: { username, password } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mutationError && <div className='ui red message'>{JSON.stringify(mutationError)}</div>}
      <div>
        <label>Username</label>
        <input
          name='username'
          ref={register({
            required: 'Required',
          })}
        />
        {errors.username && errors.username.message}
      </div>

      <div>
        <label>Password</label>
        <input
          name='password'
          type='password'
          ref={register({
            required: 'Required',
          })}
        />
        {errors.password && errors.password.message}

      </div>

      <button type='submit'>Login</button>

      <div>
        <Link to='/register'>
          Don`t have an account. Click here
        </Link>
      </div>

    </form>
  )
}
