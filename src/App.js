import React from 'react'
import './App.css'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    })
  },
})

function App () {
  return (
    <div className='App'>
      Hello World
    </div>
  )
}

const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default AppContainer
