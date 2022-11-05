import { Paginations } from "./Paginations";
import { Main } from "./Main";

export const Characters = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <Paginations />
        <Main />
      </div>
    </div>
  );
};
