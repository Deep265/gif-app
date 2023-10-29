"use client"
import React from 'react'

const Search = ({setQ}) => {
  

  return (
    <div>search
    <input type='text' placeholder='search' onChange={(e) => setQ(e.target.value)} />
    </div>
  )
}

export default Search