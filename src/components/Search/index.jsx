import { useState } from 'react'
import './Search.css'

const Search = ({ onSearch }) => {
    const [searchedText, setSearchedText] = useState('')

    const handleOnChange = event => {
        setSearchedText(event.target.value)
        console.log(searchedText)
    }

    const handleOnKeyDown = event => {
        if (event.key === 'Enter') {
            console.log('Enter Key...')
            onSearch(searchedText)
        }
    }

    return <div className='search-container'>
        <p>Busca tu evento favorito: </p>
        <input 
            placeholder="Busca un evento" 
            className='search-input' 
            onKeyDown={handleOnKeyDown} 
            value={searchedText} 
            onChange={handleOnChange}            
        />
    </div>
}

export default Search