import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState();
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch(searchText);
    };

    return (
        <div>
            <div className='search-container'>
                <input
                    type="text"
                    placeholder="Search..."
                    className='searchbar-input'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress} />

                <Search className='searchbar-icon' onClick={() => handleSearch(searchText)} />
            </div>
        </div>
    )
}

export default SearchBar