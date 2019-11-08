import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import Storage from '../utils/storage'

const PublicRoute = props => {
  const { component: Component, ...rest } = props
  const render = props =>
    Storage.getToken() ? (
      <Redirect to='/' />
    ) : (
      <Component {...rest} {...props} />
    )
  return <Route {...rest} render={render} />
}

PublicRoute.propTypes = {
  component: PropTypes.func,
}

export default PublicRoute
