import React from 'react'
import { Link } from 'react-router-dom'

const items = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/add',
    label: 'Add Recipe',
  },
  {
    path: '/profile',
    label: 'Profile',
  },
  {
    path: '/logout',
    label: 'Logout',
  },
]

function NavItem ({ path, label }) {
  return <li>
    <Link to={path} className='mc-navbar-link'>
      {label}
    </Link>
  </li>
}

export default function Navbar () {
  return (
    <nav
    >
      <ul>
        {items.map((p) => <NavItem key={p.label} {...p} />)}
      </ul>
    </nav>
  )
}
