"use client"
import React, { useState } from 'react'
import Search from '../components/search';
import DisplayGrid from '../components/DisplayGrid';
// import DisplayGrid from '../components/DisplayGrid';

const gif = async() => {
  const [q,setQ] = useState("trending");
  // const data = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=burgerlimit=10`);
  // const res = await data.json();
  // console.log(res.data);

  return (
    <div>
      <h1>Gif App</h1>
      {/* <input type='text' placeholder='search' /> */}
      <Search setQ={setQ} />
      <DisplayGrid q={q} />
    {/* {res ? res.data.map(gifs => <img src={gifs.images.original.url} /> ) : <h1>empty</h1>}  */}
    </div>
  )
}

export default gif;