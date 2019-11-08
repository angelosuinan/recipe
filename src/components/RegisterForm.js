import React from 'react'
import useForm from 'react-hook-form'

export default function RegisterForm ({ register, mutationError }) {
  const { handleSubmit, register: formRegister, errors } = useForm()

  const onSubmit = ({ username, password }) => {
    register({ variables: { username, password } })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mutationError && <div className='ui red message'>{JSON.stringify(mutationError)}</div>}
      <label>Username</label>
      <input
        name='username'
        ref={formRegister({
          required: 'Required',
        })}
      />
      {errors.username && errors.username.message}
      <label>Password</label>
      <input
        name='password'
        type='password'
        ref={formRegister({
          required: 'Required',
        })}
      />
      {errors.password && errors.password.message}

      <button type='submit'>Submit</button>
    </form>
  )
}
