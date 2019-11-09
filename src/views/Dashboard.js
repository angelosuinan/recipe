import React from 'react'
import { Switch } from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import Navbar from '../components/Navbar'

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
      <Navbar />
      <hr />
      <main className='app-main'>
        {renderPrivateRouter(routes)}
      </main>

    </div>
  )
}
