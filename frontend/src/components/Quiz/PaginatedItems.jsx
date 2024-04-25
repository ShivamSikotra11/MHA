import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../styles/quiz.css"; 
import QuizBox from "./QuizBox";
import QuestionsEnglish from "../../JSON/QuesEnglish.json";
import QuestionsHindi from "../../JSON/QuesHindi.json";
import QuestionsGujarati from "../../JSON/QuesGujarati.json";
import { useQuizContext } from "../../store/QuizContext";
import { usePostContext } from "../../store/PostContext";

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
  const { curLang,Answers } = useQuizContext();
  const [items, setItems] = useState(QuestionsEnglish);
  
  useEffect(() => {
    // Update the items based on the current language
    switch (curLang) {
      case "English":
        setItems(QuestionsEnglish);
        break;
      case "Hindi":
        setItems(QuestionsHindi);
        break;
      case "Gujarati":
        setItems(QuestionsGujarati);
        break;
      default:
        setItems(QuestionsEnglish); 
        break;
    }
  }, [curLang]);


  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      setItemOffset(itemOffset + 1 < items.length ? itemOffset + 1 : itemOffset);  
    }
    if (event.key === 'ArrowLeft') {
      setItemOffset(itemOffset - 1 >=0 ? itemOffset - 1 : itemOffset);  
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [itemOffset]);

  return (
    <div className="inline-block rounded-3xl bg-primary_elight border pb-8 w-[70%] max-[763px]:w-[90%]">
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
        forcePage={Math.floor(itemOffset / itemsPerPage)}
      />
    </div>
  );
}

export default PaginatedItems;
