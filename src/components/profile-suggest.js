import * as S from "./styled-components/styled-profile-suggest";

const ProfileSuggest = ({ id, rate, limit, city, handleBuy }) => {
  return (
    <S.Wrap>
      <S.CurrencyAndLimitWrap>
        <S.Currency>{rate} ₽</S.Currency>
        <S.Limit>от {limit} €</S.Limit>
      </S.CurrencyAndLimitWrap>
      <S.CityWrap>
        <S.CityIcon>
          <svg
            width="24"
            height="36"
            viewBox="0 0 24 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C5.36571 0 0 5.634 0 12.6C0 22.05 12 36 12 36C12 36 24 22.05 24 12.6C24 5.634 18.6343 0 12 0ZM12 17.1C9.63429 17.1 7.71429 15.084 7.71429 12.6C7.71429 10.116 9.63429 8.1 12 8.1C14.3657 8.1 16.2857 10.116 16.2857 12.6C16.2857 15.084 14.3657 17.1 12 17.1Z"
              fill="#39EE1B"
            />
          </svg>
        </S.CityIcon>
        <S.CityAndNameWrap>
          <S.City>{city}</S.City>
        </S.CityAndNameWrap>
      </S.CityWrap>
      <S.Status>Запущено *</S.Status>
      <S.Action id={id} onClick={handleBuy}>
        <S.StopIcon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" fill="#D21414" />
          </svg>
        </S.StopIcon>
      </S.Action>
    </S.Wrap>
  );
};

export default ProfileSuggest;
