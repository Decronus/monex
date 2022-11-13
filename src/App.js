import MainFilter from "./components/main-filter";
import MainHeadingAndCurrencies from "./components/main-heading-and-currencies";
import NavTop from "./components/nav-top";
import SearchResultWrap from "./components/search-result-wrap";

import SEARCH_RESULTS from "./CONSTS/SEARCH_RESULTS";

function App() {
  return (
    <div className="App">
      <NavTop></NavTop>
      <MainHeadingAndCurrencies />
      <MainFilter />
      {SEARCH_RESULTS.map((result) => {
        return (
          <SearchResultWrap
            currency={result.currency}
            limit={result.limit}
            city={result.city}
            name={result.name}
          />
        );
      })}
    </div>
  );
}

export default App;
