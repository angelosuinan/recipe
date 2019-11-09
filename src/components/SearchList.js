import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import RecipeList from './RecipeList'

const RECIPES = gql`
query RECIPES($search: String){
  recipes(search: $search) {
    _id
    name
    description
    steps
    image
    ingredients
    user {
      _id
      username
    }
  }
}
`

export default function SearchList () {
  const [searchTerm, setSearchTerm] = React.useState('')

  const { _error, data } = useQuery(
    RECIPES,
    { variables: { search: searchTerm } },
  )

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  const recipes = data ? data.recipes : []

  return (
    <div className='search-bar ui segment'>
      <div className='field'>
        <input
          type='text'
          placeholder='search a recipe'
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          <RecipeList recipes={recipes} />
        </ul>
      </div>
    </div>
  )
}
