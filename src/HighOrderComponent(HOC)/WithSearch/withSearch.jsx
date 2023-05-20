import { useState } from "react"

export const withSearch = (Component, dataset) => {
    return () => {
        const [query, setQuery] = useState('');
        
        const handleChange = (e) => {
            setQuery(e.target.value);
        }
    
  return (
    <div>
        <input onChange={handleChange} value={ query } />
        <Component query={query} dataset={dataset}/>
    </div>
  )
  }
}
