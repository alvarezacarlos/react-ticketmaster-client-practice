import './Paginate.css'
import ReactPaginate from 'react-paginate';

const Paginate = ({ isLoading, totalPages, onPageClick}) => {
    
    return (
        <ReactPaginate
        className={`pagination ${!isLoading ? '' : 'hidden'}`}
        nextClassName='next'
        previousClassName='previous'
        pageClassName='page'
        activeClassName='activePage'
        disabledClassName='disabledPage'
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}            
    />
    )
}

export default Paginate