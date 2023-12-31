import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import tw from "tailwind-styled-components";
export const Avatar = tw.img`
  my-8
  w-36
  rounded-full
`;
export const Container = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;
export const Nickname = tw.h2`
  mb-2
`;
export const Id = tw.p`
  text-gray-400
  text-xl
  mb-8
`;

export const RadioSelect = tw.label`
    m-auto
    text-[1.8rem]

`;
export const DiaryContainer = tw.div`
  flex
  flex-col
  items-center
  bg-[var(--secondaryColor)]
  p-8
  w-[90%]
  max-w-[70rem]
 
`;
export const QuestionContainer = tw.div`
  flex
  flex-col
  mt-4
  gap-8
  mb-10
  w-[95%]
  .sm:w-[95%]
`;
export const Title = tw.h1`
mt-4
text-5xl
mb-8
`;
export const Date = tw.div`
ml-auto
mr-8
text-2xl
`;
export const TextInput = tw.input`
border-2 
h-20
p-2
rounded-2xl
text-2xl
`;
export const closeBtn = tw.p`
ml-auto
cursor-pointer
`;
export const InputWrap = tw.div`
bg-white
h-20
flex
items-center
rounded-2xl
min-w-[20rem]
pl-[0.5rem]
`;
export const EditTextArea = tw.textarea`
bg-white
min-h-20
h-fit
flex
items-center
rounded-2xl
min-w-[20rem]
p-2
`;
export const PooImage = tw.img`
w-[50%]
`;

export const ButtonContainer = tw.div`
flex
gap-6
`;
export const TileContents = tw.div`
flex
items-center
justify-center
`;
export const tileContainer = tw.div`
w-[3rem]
`;
export const TileP = tw.p`
text-[2rem]
text-black
`;

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
    :hover {
      background-color: pink;
    }
    abbr {
      font-size: 1.5rem;
      width: 100%;
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
