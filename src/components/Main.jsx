import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import TableRow from './TableRow';

const Main = ({ data }) => {
    const [filterData, setFilteredData] = useState([]);

    useEffect(() => {
        if (filterData.length === 0) setFilteredData(data);
    })
    const handleSearch = (text) => {
        const filteredResults = data.filter((item) => {
            return Object.values(item).some((value) =>
                value.toString().toLowerCase().includes(text.toLowerCase())
            );
        });
        setFilteredData(filteredResults);
        setCurrentPage(1);
    };

    // pagination variables
    const [currentPage, setCurrentPage] = useState(1);
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = filterData.slice(firstIndex, lastIndex);
    const npages = Math.ceil(filterData.length / recordPerPage);
    const numbers = [...Array(npages + 1).keys()].slice(1)

    const [selectList, setSelectList] = useState([]);

    //functions
    const handleSelect = (id) => {
        if (selectList.includes(id)) setSelectList(selectList.filter((item) => item !== id));
        else setSelectList([...selectList, id]);
    };

    const handleSelectAll = () => {
        (selectList.length === records.length) ? setSelectList([]) : setSelectList(records.map((record) => { return record.id; }));
    }

    const deleteRow = (id) => {
        setFilteredData(filterData.filter((d) => id !== d.id));
    };

    const deleteAll = () => {
        const updatedArray = filterData.filter((user) => !selectList.includes(user.id));
        setFilteredData(updatedArray);
        setSelectList([]);
        document.getElementById('SelectAll').value = 'false';
    };


    return (
        <div className='main-container'>
            <SearchBar handleSearch={handleSearch} selectList={selectList} deleteAll={deleteAll} />
            <div className='table-container'>
                <div className='table-div'>
                    {/* Header */}
                    <div className='header' >
                        <input type="checkbox" className='md:w-[10%]' id='SelectAll'
                            checked={records.length === selectList.length}
                            onChange={handleSelectAll}
                        />
                        <p className='md:w-[20%]'>Name</p>
                        <p className='md:w-[20%]'>Email</p>
                        <p className='md:w-[25%]'>Role</p>
                        <p className='md:w-[25%]'>Actions</p>
                    </div>
                    {/* Entries */}
                    <div>
                        {records.map((entry, id) => {
                            return <TableRow
                                entry={entry}
                                id={id}
                                deleteRow={deleteRow}
                                handleSelect={handleSelect}
                                setSelectList={setSelectList}
                                selectList={selectList}
                                key={id}
                                filterData={filterData}
                                setFilterData={setFilteredData}
                            />;
                        })
                        }
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <Pagination
                numbers={numbers}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                npages={npages}
            />
        </div >

    )
}

export default Main