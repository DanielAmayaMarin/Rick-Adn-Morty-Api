import { useContext } from "react";
import { CharactersContext } from "../context/context";

export const Paginations = () => {
  const { totalResults, actualPage, nexPage, prevPage, gotPage } =
    useContext(CharactersContext);
  return (
    <>
      <div className="col-3 mb-4 d-flex align-items-center">
        <b>Total results: {totalResults.count}</b>
      </div>
      <div className="col-3 mb-4 d-flex align-items-center">
        <b>
          Page {actualPage} of {totalResults.pages}
        </b>
      </div>
      <div className="col-3 mb-4 d-flex align-items-center">
        <b>Go to page</b>
        <select className="ms-3 form-select w-auto mx-1" name="goto" id="" 
        value={actualPage}
        data-type="goTo"
        onChange={e => gotPage("", e)}
        >
          {
            Array.from(Array(totalResults.pages).keys()).map(page => {
                return (
                    <option key={page + 1} value={page + 1}>{page + 1}</option>
                )
            })
          }
        </select>
      </div>

      <div className="col-3 text-end ">
        {prevPage && (
          <button data-type="prev"
            onClick={(e) => gotPage(prevPage, e)}
            className="btn btn-outline-primary mx-2"
          >
            Prev
          </button>
        )}
        {nexPage && (
          <button
          data-type="next"
            onClick={(e) => gotPage(nexPage, e)}
            className="btn btn-outline-primary"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};
