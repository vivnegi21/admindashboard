import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = ({ handleSearch,selectList,deleteAll }) => {
    const [searchText, setSearchText] = useState();
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch(searchText);
    };

    return (
        <div className=' w-full flex px-10 '>
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
            
            {(selectList.length>0) && (<div className='delete-btn' onClick={deleteAll}>Delete Selected</div>)}

        </div>
    )
}

export default SearchBar