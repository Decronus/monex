import * as S from "./styled-components/styled-profile-suggest";
import { useState } from "react";
import ADVERTS_LIFETIME from "../CONSTS/ADVERTS_LIFETIME";
import { database, getUserID } from "../firebase";
import { ref, remove, get, child, update } from "firebase/database";

const ProfileSuggest = ({
  id,
  rate,
  limit,
  city,
  expTime,
  minutes,
  handleUpldateAdvertMinutes,
}) => {
  const [advertActive, setAdvertActive] = useState(true);
  const toggleAdvertActive = () => {
    setAdvertActive(!advertActive);
  };

  const handleDeleteAdvert = (event) => {
    const id = event.target.id;
    //Удаляем само объявление
    remove(ref(database, "adverts/" + id));

    //Декремент количества объяв пользователя
    const userID = getUserID();
    console.log("userID", userID);
    const dbRef = ref(database);
    get(child(dbRef, "users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          console.log("usets", users);
          const advertsAmount = users[userID].advertsAmount;
          console.log("adverts amount", advertsAmount);
          const updates = {};
          updates["users/" + userID + "/advertsAmount"] = advertsAmount - 1;
          update(dbRef, updates);
          console.log(update(dbRef, updates));
          window.location.reload();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
      <S.ActionAndStatus>
        <S.Action id={id}>
          {minutes + ADVERTS_LIFETIME - Math.floor(Date.now() / 1000 / 60) <=
          0 ? (
            <S.StartIcon onClick={handleUpldateAdvertMinutes} id={id}>
              <svg
                id={id}
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id={id}
                  d="M8 4.77273V7.63636L12 3.81818L8 0V2.86364C3.58 2.86364 0 6.28091 0 10.5C0 11.9986 0.46 13.3923 1.24 14.5664L2.7 13.1727C2.25 12.3805 2 11.4641 2 10.5C2 7.34045 4.69 4.77273 8 4.77273ZM14.76 6.43364L13.3 7.82727C13.74 8.62909 14 9.53591 14 10.5C14 13.6595 11.31 16.2273 8 16.2273V13.3636L4 17.1818L8 21V18.1364C12.42 18.1364 16 14.7191 16 10.5C16 9.00136 15.54 7.60773 14.76 6.43364V6.43364Z"
                  fill="#39EE1B"
                />
              </svg>
            </S.StartIcon>
          ) : (
            <S.StopIcon onClick={toggleAdvertActive} id={id}>
              <svg
                id={id}
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id={id}
                  d="M8 4.77273V7.63636L12 3.81818L8 0V2.86364C3.58 2.86364 0 6.28091 0 10.5C0 11.9986 0.46 13.3923 1.24 14.5664L2.7 13.1727C2.25 12.3805 2 11.4641 2 10.5C2 7.34045 4.69 4.77273 8 4.77273ZM14.76 6.43364L13.3 7.82727C13.74 8.62909 14 9.53591 14 10.5C14 13.6595 11.31 16.2273 8 16.2273V13.3636L4 17.1818L8 21V18.1364C12.42 18.1364 16 14.7191 16 10.5C16 9.00136 15.54 7.60773 14.76 6.43364V6.43364Z"
                  fill="#6F6F6F"
                />
              </svg>
            </S.StopIcon>
          )}
        </S.Action>
        <S.Status>{expTime}</S.Status>
      </S.ActionAndStatus>
      <S.DeleteAndEdit>
        <S.Delete id={id} onClick={handleDeleteAdvert}>
          <svg
            id={id}
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id={id}
              d="M1.14286 19.5556C1.14286 20.9 2.17143 22 3.42857 22H12.5714C13.8286 22 14.8571 20.9 14.8571 19.5556V4.88889H1.14286V19.5556ZM3.95429 10.8533L5.56571 9.13L8 11.7211L10.4229 9.13L12.0343 10.8533L9.61143 13.4444L12.0343 16.0356L10.4229 17.7589L8 15.1678L5.57714 17.7589L3.96571 16.0356L6.38857 13.4444L3.95429 10.8533ZM12 1.22222L10.8571 0H5.14286L4 1.22222H0V3.66667H16V1.22222H12Z"
              fill="#870101"
            />
          </svg>
        </S.Delete>
        <S.Edit id={id}>
          <svg
            id={id}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id={id}
              d="M0 15.8339V20H4.16609L16.4533 7.71282L12.2872 3.54673L0 15.8339ZM19.675 4.49104C20.1083 4.05777 20.1083 3.35787 19.675 2.92459L17.0754 0.324955C16.6421 -0.108318 15.9422 -0.108318 15.509 0.324955L13.4759 2.35801L17.642 6.52409L19.675 4.49104V4.49104Z"
              fill="#AE9D04"
            />
          </svg>
        </S.Edit>
      </S.DeleteAndEdit>
    </S.Wrap>
  );
};

export default ProfileSuggest;
