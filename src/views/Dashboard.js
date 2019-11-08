import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'

const renderPrivateRouter = routes => (
  <Switch>
    {routes.map(({ path, component }) => (
      <PrivateRoute exact key={path} path={path} component={component} />
    ))}
  </Switch>
)

export default function Dashboard (props) {
  const { routes } = props

  return (
    <div className='dashboard-view'>
      hello - world
      <main className='app-main'>
        {renderPrivateRouter(routes)}
      </main>

    </div>
  )
}
