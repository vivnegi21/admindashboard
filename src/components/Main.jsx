import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Main = ({ data }) => {
    const [filterData, setFilteredData] = useState([]);
    // console.log(data);
    useEffect(() => {
        if (filterData.length === 0) setFilteredData(data);
    }, [data])

    const handleSearch = (text) => {
        const filteredResults = data.filter((item) => {
            return Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(text.toLowerCase())
            );
        });
        setFilteredData(filteredResults);
        setCurrentPage(1);

    }
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = filterData.slice(firstIndex, lastIndex);
    const npages = Math.ceil(filterData.length / recordPerPage);
    const numbers = [...Array(npages + 1).keys()].slice(1)

    return (
        <div className='main-container'>
            <SearchBar handleSearch={handleSearch} />
            <div className='table-container'>
                <div className='table-div'>
                    {/* Header */}
                    <div className='header' >
                        <input type="checkbox" className='md:w-[10%]' id='SelectAll'
                            onChange={() => {
                                for (let i = 0; i < records.length; i++) {
                                    if (document.getElementById('SelectAll').selected) filterData[records[i].id].checked = true;
                                    else records[i].checked = false;
                                    document.getElementById(`${records[i]['id']}`).click();
                                }
                            }}
                        />
                        <p className='md:w-[20%]'>Name</p>
                        <p className='md:w-[20%]'>Email</p>
                        <p className='md:w-[25%]'>Role</p>
                        <p className='md:w-[25%]'>Actions</p>
                    </div>
                    {/* Entries */}
                    <div>
                        {records.map((entry, id) => {
                            return (
                                <div className='row-container' key={id}>
                                    <input type="checkbox" className='md:w-[10%]' id={entry.id} selected={filterData[entry?.id]?.checked} />
                                    <p className='md:w-[20%]'>{entry.name}</p>
                                    <p className='md:w-[20%]'>{entry.email}</p>
                                    <p className='md:w-[25%]'>{entry.role}</p>
                                    <p className='md:w-[25%]'>Actions</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <Pagination numbers={numbers} setCurrentPage={setCurrentPage} currentPage={currentPage} npages={npages} />
        </div >

    )
}

export default Main