import MainFilter from "../components/main-filter";
import MainHeadingAndCurrencies from "../components/main-heading-and-currencies";
import NavTop from "../components/nav-top";
import SearchResultWrap from "../components/search-result-wrap";
import StyledNothingFoundParagraph from "../components/styled-components/styled-nothing-found-paragraph";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import "../firebase";

const Main = () => {
  const [advertsResult, setAdvertsResult] = useState(null);

  useEffect(() => {
    getAdverts();
  }, []);

  const getAdverts = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "adverts"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const result = Object.values(snapshot.val());
          setAdvertsResult(result);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  const handleBuy = (event) => {
    event.target.textContent = "КУПЛЕНО";
  };

  return (
    <>
      <NavTop></NavTop>
      <MainHeadingAndCurrencies />
      <MainFilter handleChangeCity={handleChangeCity} />

      {advertsResult?.filter((el) => switchCity(el)).length !== 0 ? (
        advertsResult
          ?.filter((el) => switchCity(el))
          .map((result, key) => {
            return (
              <SearchResultWrap
                currency={result.rate + " ₽"}
                limit={"от " + result.limit + " €"}
                city={result.city}
                name={result.name}
                key={key}
                handleBuy={handleBuy}
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
