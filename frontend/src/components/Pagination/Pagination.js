import React, { useContext} from "react";
import { GlobalContext } from "../../pages/LaHoguera/LaHoguera";
import stylePagination from "./Pagination.module.css";

export default function Pagination(props) {
    //Usamos las variables usado en GlobalContext
    const {page, setPage} = useContext(GlobalContext);
    const {pageTotal} = useContext(GlobalContext);
    //Creamos la variable total de paginas
    let total=0;
    //Calculamos el numero de paginas totales
    total=Math.ceil(pageTotal/parseInt(props.limit));
    if(props.pages==='front')
    {
        if(total>1)
        {
            return (
                <div className={stylePagination.pagination}>
                    {(page-1 > 0) 
                    ? <button onClick={()=>setPage(page-1)}>&lt;</button>
                    : ""
                    }
                    <div>{page} / {total}</div>
                    {(page+1 <= total) 
                    ? <button onClick={()=>setPage(page+1)}>&gt;</button>
                    : ""
                    }
                </div>
            );
        }
    }
}