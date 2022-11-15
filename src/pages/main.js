import MainFilter from "../components/main-filter";
import MainHeadingAndCurrencies from "../components/main-heading-and-currencies";
import NavTop from "../components/nav-top";
import SearchResultWrap from "../components/search-result-wrap";
import StyledNothingFoundParagraph from "../components/styled-components/styled-nothing-found-paragraph";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import "../firebase";
import * as S from "../components/styled-components/styled-suggest-popup";

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

  const [popupVisibility, setPopupVisibility] = useState(false);
  const openSuggestPopup = () => {
    setPopupVisibility(true);
  };

  const closeSuggestPopup = () => {
    setPopupVisibility(false);
  };

  const [currentSuggest, setCurrentSuggest] = useState({
    rate: "",
    limit: "",
    city: "",
    name: "",
    description: "",
  });

  const handleBuy = (event) => {
    console.log(event.target.id);

    const dbRef = ref(getDatabase());

    get(child(dbRef, "adverts"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const id = event.target.id;
          const result = snapshot.val();
          const clickedSuggest = result[id];
          console.log(result[id]);
          setCurrentSuggest({
            rate: clickedSuggest.rate,
            limit: clickedSuggest.limit,
            city: clickedSuggest.city,
            name: clickedSuggest.name,
            description: clickedSuggest.description,
          });
          openSuggestPopup();
          //   const currentSuggest = result[id];
          //   console.log(currentSuggest.city);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
                id={result.id}
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

      <S.SuggestPopupBackground
        onClick={closeSuggestPopup}
        style={{
          opacity: popupVisibility ? "1" : "0",
          visibility: popupVisibility ? "visible" : "hidden",
        }}
      >
        <S.SuggestPopupWrap>
          <p>{currentSuggest.rate}</p>
          <p>{currentSuggest.limit}</p>
          <p>{currentSuggest.city}</p>
          <p>{currentSuggest.name}</p>
          <p>{currentSuggest.description}</p>
        </S.SuggestPopupWrap>
      </S.SuggestPopupBackground>
    </>
  );
};

export default Main;
