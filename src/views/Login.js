import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import LoginForm from '../components/LoginForm'
import Storage from '../utils/storage'

const LOGIN = gql`
  mutation LOGIN($username: String!, $password: String!){
    login(username: $username, password: $password) {
      user{
        _id
        username
      }
      token
    }
  }
`

export default function Login ({ history }) {
  const [login, { error: mutationError, _loading }] = useMutation(
    LOGIN,
    {
      onCompleted ({ login: { token } }) {
        Storage.setToken(token)
        history.replace('/')
      },
    },
  )

  return (
    <div>
      <LoginForm login={login} mutationError={mutationError} />
    </div>
  )
}
