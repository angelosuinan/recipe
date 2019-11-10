import React from 'react'

import Loading from '../components/Loading'
import Storage from '../utils/storage'

export default function Logout ({ history }) {
  if (!Storage.getToken()) {
    return history.replace('/')
  }

  Storage.removeToken()
  history.replace('/login')
  return (
    <Loading />
  )
}
