import MainFilter from "../components/main-filter";
import MainHeadingAndCurrencies from "../components/main-heading-and-currencies";
import NavTop from "../components/nav-top";
import SearchResultWrap from "../components/search-result-wrap";
import StyledNothingFoundParagraph from "../components/styled-components/styled-nothing-found-paragraph";

import SEARCH_RESULTS from "../CONSTS/SEARCH_RESULTS";
import { useState } from "react";

const Main = () => {
  const [city, setCity] = useState("Города");

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const switchCity = (el) => {
    if (el.city === city) {
      return el.city === city;
    } else if (city === "Города") {
      return el;
    }
  };
  console.log(
    "filter",
    SEARCH_RESULTS.filter((el) => switchCity(el))
  );
  return (
    <>
      <NavTop></NavTop>
      <MainHeadingAndCurrencies />
      <MainFilter handleChangeCity={handleChangeCity} />

      {SEARCH_RESULTS.filter((el) => switchCity(el)).length !== 0 ? (
        SEARCH_RESULTS.filter((el) => switchCity(el)).map((result, key) => {
          return (
            <SearchResultWrap
              currency={result.currency}
              limit={result.limit}
              city={result.city}
              name={result.name}
              key={key}
            />
          );
        })
      ) : (
        <StyledNothingFoundParagraph>
          Ничего не найдено. Измените поисковые фильтры и попробуйте еще раз.
        </StyledNothingFoundParagraph>
      )}
    </>
  );
};

export default Main;
