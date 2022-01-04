import React, { useState } from 'react'

const Input = ({ showDiv }) => {
  const [searchWord, setSearchWord] = useState('')

  const handleChange = (e) => {
    setSearchWord(e.target.value)
  }
  return (
    <div>
      <input
        type='text'
        data-testid='searchBar'
        placeholder='Search...'
        onChange={handleChange} />
      <h1 data-testid="displaySearch">{searchWord}</h1>
      {showDiv && (
        <div data-testid="divWeWantToShow">
          Hey My name is Robert
        </div>
      )}
    </div>
  )
}

export default Input
