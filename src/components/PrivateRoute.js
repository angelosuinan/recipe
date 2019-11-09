import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import Storage from '../utils/storage'

const PrivateRoute = props => {
  const { component: Component, ...rest } = props
  const render = props =>
    Storage.getToken() ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect to='/login' />
    )
  return <Route {...rest} render={render} exact />
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
}

export default PrivateRoute
