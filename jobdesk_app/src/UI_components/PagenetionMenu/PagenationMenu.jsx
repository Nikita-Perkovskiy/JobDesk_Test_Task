import "./index.scss";
import ReactPaginate from "react-paginate";
import ArrowRight from "./svges/ArrowRight";
import ArrowLeft from "./svges/ArrowLeft";

const PagenationMenu = ({ jobList, ITEMS_PER_PAGE, setCurrentPage }) => {
  return (
    <>
      <ReactPaginate
        pageCount={Math.ceil(jobList.length / ITEMS_PER_PAGE)}
        onPageChange={({ selected }) => setCurrentPage(selected)}
        breakLabel="..."
        pageRangeDisplayed={3}
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        containerClassName="pagination-wrapper"
        activeClassName="pagination-active"
        pageClassName="pagination-number"
        previousLinkClassName="pagination-previousLink"
        nextLinkClassName="pagination-nextLink"
      />
    </>
  );
};

export default PagenationMenu;
