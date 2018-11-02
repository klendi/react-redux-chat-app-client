import React from 'react'
import store from '../store'
import { data } from '../data/contact-data'

const getContacts = query => {}

const SearchContacts = props => {
  return (
    <div>
      <h1>Hello</h1>
      <input
        autoFocus
        type="text"
        className="search-input"
        placeholder="Search for other people"
      />
    </div>
  )
}

export default SearchContacts
