"use client";
import Diary from "@/components/profile/diary";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import tw from "tailwind-styled-components";
const ProfilePage = () => {
  // useState 훅의 초기값으로 현재 날짜를 넣어줌
  const [today, setToday] = useState(new Date());

  // onChange 이벤트에 넣어줘서 날짜가 지날 때마다 today값이 업데이트 되도록 구현
  const onChangeToday = () => {
    setToday(today);
  };
  return (
    <Container>
      <Avatar src="../../../assets/defaultAvatar.JPG" />
      <Nickname>화장실 급해요</Nickname>
      <Id>ddongssaja</Id>

      <StyleCalendar locale="en" onChange={onChangeToday} value={today} />
      <p>{moment(today).format("YYYY.MM.DD")} </p>

      <Diary />
    </Container>
  );
};
const Avatar = tw.img`
  my-8
  w-36
  rounded-full
`;
const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;
const Nickname = tw.h2`
  mb-8
`;
const Id = tw.p`
  text-gray-400
  text-lg
`;
// const StyleCalendar = tw(Calendar)`
// w-5/6
// .react-calender {
//   w-5/6
// }
// .react-calender__month-view__weekdays__weekday {
//   text-sm
// }
// `;
const StyleCalendar = styled(Calendar)`
  width: 90%;
  max-width: 70rem;
  height: fit-content;
  font-size: small;
  padding: 1rem;
  padding-top: 0;
  background-color: var(--secondaryColor);
  border: none;
  border-radius: 1rem;
  margin-bottom: 2rem;
  .react-calendar__navigation {
    height: 7rem;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 400px) {
      height: 5rem;
    }
  }
  .react-calendar__navigation__label {
    font-size: 2rem;
    @media screen and (max-width: 400px) {
      span {
        font-size: 1.5rem;
      }
    }
  }
  .react-calendar__navigation button:disabled {
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: transparent;
  }

  .react-calendar__tile {
    display: flex;
    height: 7rem;
    text-align: start;
    background-color: white;
    border: 0.2rem solid var(--secondaryColor);
    border-radius: 0.5rem;
    :hover {
      background-color: pink;
    }
    abbr {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 400px) {
      height: 4rem;
      abbr {
        font-size: 1.2rem;
      }
    }
  }
  .react-calendar__tile:enabled:hover {
    background: #ffe3e7;
  }
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: pink;
    border-radius: 0.5rem;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      // 텍스트 부분
      font-size: 1.8rem;
      @media screen and (max-width: 400px) {
        font-size: 1rem;
      }
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.3rem;
  }
`;

export default ProfilePage;
