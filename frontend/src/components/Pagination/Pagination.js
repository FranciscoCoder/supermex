import React from "react";
import stylePagination from "./Pagination.module.css";

export default function Pagination({section, page, prevPage, pageNumber, nextPage, firstPage, lastPage}) {
  const finalPage=pageNumber.length; 
  if (finalPage > 1) {
    if (section === "front") {
      //Renderizamos la paginacion del front
      return (
        <div className={stylePagination.pagination}>
          {page > 1
          ? (<button onClick={prevPage}>&lt;</button>) 
          : ("")}
          <div>
            {page} / {finalPage}
          </div>
          {page < finalPage 
          ? (<button onClick={nextPage}>&gt;</button>) 
          : ("")}
        </div>
      );
    } else if (section === "dashboard") {
      //Renderizamos la paginacion del dashboard
      return (
        <div className={stylePagination.paginationDashboard}>
          <ul>
            {firstPage 
            ? (<li><button onClick={firstPage}>&lt;&lt;</button></li>)
            : ("")}
            {page > 1 
            ? (<li><button onClick={prevPage}>&lt;</button></li>) 
            : ("")}
            {pageNumber.map((pgNumber) => (
              <li key={`Page${pgNumber.pageCount}`}>
                <button onClick={pgNumber.updatePage} className={pgNumber.pageCount===page ? (stylePagination.active) : ("")}>
                  {pgNumber.pageCount}
                </button>
              </li>
            ))}
            {page < finalPage
            ? (<li><button onClick={nextPage}>&gt;</button></li>) 
            : ("")}
            {lastPage 
            ? (<li><button onClick={lastPage}>&gt;&gt;</button></li>)
            : ("")}
          </ul>
        </div>
      );
    }
  }
}
