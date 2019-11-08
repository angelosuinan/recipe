import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import local from '../utils/local'

const PrivateRoute = props => {
  const { component: Component, ...rest } = props
  const render = props =>
    local.getToken() ? (
      <Component {...rest} {...props} />
    ) : (
      <Redirect to='/login' />
    )
  return <Route {...rest} render={render} />
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
}

export default PrivateRoute
