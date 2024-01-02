import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

export const StyleCalendar = styled(Calendar)`
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
    margin-bottom: 0;
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
    flex-direction: column;
    height: 7rem;
    text-align: start;
    background-color: white;
    border: 0.2rem solid var(--secondaryColor);
    border-radius: 0.5rem;

    abbr {
      font-size: 1.5rem;
    }
    img {
      width: 50%;
    }
    p {
      font-size: 2rem;
      color: black;
    }
    @media screen and (max-width: 400px) {
      height: 4rem;
      padding: 0.2rem;
      abbr {
        font-size: 1rem;
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
  .react-calendar__tile--now {
    background: var(--primaryColor);
  }
  /* hover,focus 시  */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: pink;
  }

  .react-calendar__month-view__weekdays {
    margin-bottom: 0.5rem;
    abbr {
      // 텍스트 부분
      font-size: 1.8rem;
      text-decoration: none;

      @media screen and (max-width: 400px) {
        font-size: 1rem;
        text-decoration: none;
      }
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.3rem;
  }
`;
