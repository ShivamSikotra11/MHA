import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../styles/quiz.css"; // Import your custom CSS file
import QuizBox from "./QuizBox";
import Questions from "../../store/Questions.json";
// console.log(items);
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const items = Questions;
function Items({ currentItems }) {
  return (
    <div className="">
      {currentItems &&
        currentItems.map((item, index) => (
          <QuizBox key={index} qn={item}></QuizBox>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage = 1 }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="inline-block rounded-3xl  bg-primary_elight  border pb-8 w-[70%] ">
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="Prev"
        containerClassName="pagination"
        activeClassName="active"
        previousClassName={itemOffset === 0 ? "inactive" : "page-item"}
        nextClassName={
          itemOffset + itemsPerPage >= items.length ? "inactive" : "page-item"
        }
        pageLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    </div>
  );
}

export default PaginatedItems;
