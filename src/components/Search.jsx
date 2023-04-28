import React,{useState} from 'react'

const Search = () => {
    const [url,setUrl]=useState("")
    const [search,setSearch]=useState("");

    
  return (
    <div>
    <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onClick={searchMarvel}/>
    </div>
  )
}

export default Search