import React from 'react'

const Pagination = ({ setCurrentPage, numbers, currentPage, npages}) => {

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < npages) setCurrentPage(currentPage + 1);
  }

  return (
    <div className='pagination-container'>
      <p className='w-fit px-3 text-center'>{currentPage} of {npages}</p>
      <nav aria-label="Pagination Navigation" className='flex'>
        <ul className='flex'>
          <p className='pagination-button-start' onClick={()=>setCurrentPage(1)} >{"<<"}</p>
          <p className='pagination-button-number' onClick={handlePrev} >{"<"}</p>
          {numbers.map((n, i) => (
            <p className='pagination-button-number' onClick={() => setCurrentPage(n)} key={i}>{n}</p>
          ))
          }
          <p className='pagination-button-number' onClick={handleNext}>{">"}</p>
          <p className='pagination-button-end' onClick={()=>setCurrentPage(npages)}>{">>"}</p>

        </ul>
      </nav>
    </div>
  )
}

export default Pagination