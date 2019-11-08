import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import RegisterForm from '../components/RegisterForm'
import local from '../utils/local'

const REGISTER = gql`
  mutation REGISTER($username: String!, $password: String!){
    register(username: $username, password: $password) {
      user{
        _id
        username
      }
      token
    }
  }
`

export default function Register ({ history }) {
  const [register, { error: mutationError, _loading }] = useMutation(
    REGISTER,
    {
      onCompleted ({ register: { token } }) {
        local.setToken(token)
        history.replace('/')
      },
    },
  )

  return (
    <div>
      <RegisterForm register={register} mutationError={mutationError} />
    </div>
  )
}
