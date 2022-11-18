import MainFilter from "../components/main-filter";
import MainHeadingAndCurrencies from "../components/main-heading-and-currencies";
import NavTop from "../components/nav-top";
import SearchResultWrap from "../components/search-result-wrap";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import "../firebase";
import * as S from "../components/styled-components/styled-suggest-popup";
import Button from "../components/button";

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
          const sortedResult = result.sort((x, y) => x.rate - y.rate);
          setAdvertsResult(sortedResult);
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

      {advertsResult ? (
        advertsResult?.filter((el) => switchCity(el)).length !== 0 ? (
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
          <S.StyledNothingFoundParagraph>
            Ничего не найдено. Измените поисковые фильтры и попробуйте еще раз.
          </S.StyledNothingFoundParagraph>
        )
      ) : (
        <S.StyledLoadingParagraph>Загрузка...</S.StyledLoadingParagraph>
      )}

      <S.SuggestPopupBackground
        style={{
          opacity: popupVisibility ? "1" : "0",
          visibility: popupVisibility ? "visible" : "hidden",
        }}
      >
        <S.SuggestPopupWrap>
          <S.NameAndRateRow>
            <S.NameAndCityGroup>
              <p>{currentSuggest.name}</p>
              <S.IconAndCityWrap>
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 0C2.90643 0 0 2.817 0 6.3C0 11.025 6.5 18 6.5 18C6.5 18 13 11.025 13 6.3C13 2.817 10.0936 0 6.5 0ZM6.5 8.55C5.21857 8.55 4.17857 7.542 4.17857 6.3C4.17857 5.058 5.21857 4.05 6.5 4.05C7.78143 4.05 8.82143 5.058 8.82143 6.3C8.82143 7.542 7.78143 8.55 6.5 8.55Z"
                    fill="#39EE1B"
                  />
                </svg>

                <p>{currentSuggest.city}</p>
              </S.IconAndCityWrap>
            </S.NameAndCityGroup>
            <S.RateAndLimitGroup>
              <p>{currentSuggest.rate} ₽/€</p>
              <p>от {currentSuggest.limit} €</p>
            </S.RateAndLimitGroup>
          </S.NameAndRateRow>

          <S.SuggestDesctription>
            {currentSuggest.description}
          </S.SuggestDesctription>
          <div>
            <Button
              text="Закрыть"
              primary={false}
              padding="2rem 4rem 1.5rem 4rem"
              handleClick={closeSuggestPopup}
              fontSize="1.8rem"
            />
          </div>
        </S.SuggestPopupWrap>
      </S.SuggestPopupBackground>
    </>
  );
};

export default Main;
