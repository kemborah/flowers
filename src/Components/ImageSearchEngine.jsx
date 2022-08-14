import React, { useState, useEffect } from 'react';

export function ImageSearchEngine() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');
  
    useEffect(() => {
      async function fetchMyAPI() {
        let result = await fetch("https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q="+ query.replace(' ', '+')+'+flower'+"&image_type=photo&pretty=true&safesearch=true")
        result = await result.json()
        setItems(result.hits);
      }
      fetchMyAPI()
    }, [query])
      return (
        <div className='m-5 p-2 flex flex-col justify-items-center content-center'>
        <input type="search" id="search-dropdown" className="block mx-2 p-3 text-sm text-gray-900 bg-gray-50 rounded-l-lg rounded-r-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" onChange={(e)=>setQuery(e.target.value)} value={query} placeholder='Search...'/>
        <div className='grid grid-cols-4 gap-4 mt-3'>
          {items.splice(0,8).map(item => (
             <div className='border flex justify-items-center content-center' key={item.id}  >
             <img  className='object-fill' src={item.largeImageURL}/>
             </div>
          ))}
        </div>
        </div>     
      );
    
  }