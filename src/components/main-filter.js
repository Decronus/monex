import CityInput from "./city-input";
import * as S from "./styled-components/styled-main-filter";

const MainFilter = ({ handleChangeCity }) => {
  return (
    <S.MainFilter>
      <CityInput handleChangeCity={handleChangeCity} />
    </S.MainFilter>
  );
};

export default MainFilter;
