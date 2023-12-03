import { Check, FileEditIcon, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const TableRow = ({ entry, id, deleteRow, handleSelect, setSelectList, selectList, filterData, setFilterData }) => {
    const [edit, setEdit] = useState(false);
    const [rowData, setRowData] = useState({});
    
    useEffect(() => {
        setRowData(entry);
    }, []);

    const handleSubmit = () => {
        setEdit(!edit);
        const newArr = filterData.filter((d) => {
            if (rowData.id === d.id) {
                d.name = rowData.name;
                d.email = rowData.email;
                d.role = rowData.role;
            }
            return d;
        })

        setFilterData(newArr);
    };

    return (
        <div className={`row-container ${selectList.includes(entry.id) && 'bg-gray-200'}`} key={id}>
            <input type="checkbox" className='check-box' id={entry.id} aria-checked='false' checked={selectList.includes(entry.id)} onChange={() => handleSelect(entry.id)} />

            <input type='text' className={`input-box  ${edit && 'input-box-selected'}`} readOnly={!edit} name='name' value={entry.name} onChange={(e) => {
                setRowData({ ...rowData, name: e.target.value });
                entry.name = e.target.value;
            }} />
            <input type='text' className={`input-box  ${edit && 'input-box-selected'}`} readOnly={!edit} name='email' value={entry.email} onChange={(e) => {
                setRowData({ ...rowData, email: e.target.value });
                entry.email = e.target.value;
            }} />
            <input type='text' className={`md:w-[25%] input-box  ${edit && 'input-box-selected'}`} readOnly={!edit} name='role' value={entry.role} onChange={(e) => {
                setRowData({ ...rowData, role: e.target.value });
                entry.role = e.target.value;
            }} />
            <div className={`md:w-[25%] flex gap-2 items-center justify-start`}>
                {(edit) ?
                    (<Check size={32} className='border px-2' onClick={handleSubmit} />) :
                    (<FileEditIcon size={32} className='border px-2' onClick={() => setEdit(!edit)} />)}

                <Trash size={32} className='border px-2 ' color='red' onClick={() => {
                    deleteRow(entry.id);
                    let newArray = [...selectList];
                    newArray = newArray.filter((item) => item !== entry.id);
                    setSelectList([...newArray]);
                }} />
            </div>
        </div>
    )
}

export default TableRow