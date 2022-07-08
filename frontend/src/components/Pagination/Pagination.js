import React from "react";
import stylePagination from "./Pagination.module.css";

export default function Pagination({pages, limit, pageTotal, page, prevPage, nextPage}) {
  //let pageTotal=props.pagetotal;
  //Creamos la variable total de paginas
  let total = 0;
  //Calculamos el numero de paginas totales
  total = Math.ceil(pageTotal / parseInt(limit));

  let verifyPrevPage = page - 1;
  let verifyNextPage = page + 1;

  if (total > 1) {
    if (pages === "front") {
      return (
        <div className={stylePagination.pagination}>
          {verifyPrevPage > 0 ? (
            <button onClick={prevPage}>&lt;</button>
          ) : (
            ""
          )}
          <div>
            {page} / {total}
          </div>
          {verifyNextPage <= total ? (
            <button onClick={nextPage}>&gt;</button>
          ) : (
            ""
          )}
        </div>
      );
    } else if (pages === "dashboard") {
      const pagesArray = [];
      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }
      return (
        <div>
          <ul>
            <li>
              <button onClick={prevPage}>
                Anterior
              </button>
            </li>
            {/* {pagesArray.map((pgNumber) => (
              <li key={pgNumber}>
                <button onClick={() => setPage(pgNumber)}>
                  {pgNumber}
                </button>
              </li>
            ))} */}
            <li>
              <button onClick={nextPage}>
                Siguiente
              </button>
            </li>
          </ul>
        </div>
      );
    }
  }
}
