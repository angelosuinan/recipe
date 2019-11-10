import React from 'react'
import './App.css'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Router } from 'react-router-dom'

import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'
import history from './utils/history'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/Dashboard'
import Home from './views/Home'
import Profile from './views/Profile'
import AddRecipe from './views/AddRecipe'
import Recipe from './views/Recipe'
import Logout from './views/Logout'

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

const routes = [
  { path: '/', component: Home },
  { path: '/recipe/:id', component: Recipe },
  { path: '/profile', component: Profile },
  { path: '/add', component: AddRecipe },
  { path: '/logout', component: Logout },
]

function App () {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/register' component={Register} />
        <PrivateRoute path='/' component={Dashboard} routes={routes} />
      </Switch>
    </Router>
  )
}

const AppContainer = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

export default AppContainer
