"use client";
import Button from "@/components/common/button/Button";
import { useState } from "react";
import tw from "tailwind-styled-components";

const Diary = () => {
  //화장실 간 횟수 배열
  const toiletNumberArr = ["0", " 1", " 2", " 3", "4", "5"];
  //화장실 간 횟수 usestate
  const [toiletNumber, setToiletNumber] = useState("");

  //쾌변 컨디션 배열
  const conditionArr = ["😄", "😐", "😣", "😫"];
  //쾌변 컨디션 useState
  const [condition, setCondition] = useState("");

  //식단 useState
  const [meal, setMeal] = useState("");
  return (
    <DiaryContainer>
      <Title>쾌변일지 작성</Title>
      <Date>2023.12.27</Date>
      <QuestionContainer>
        <p>오늘 화장실 간 횟수</p>
        <div>
          {toiletNumberArr.map((item: string, i) => {
            return (
              <RadioSelect key={i}>
                <input
                  type="radio"
                  name="toiletNumber"
                  value={toiletNumber}
                  onChange={(e) => setToiletNumber(e.target.value)}
                />
                {item}
              </RadioSelect>
            );
          })}
        </div>

        <p>오늘의 쾌변 컨디션</p>
        <div>
          {conditionArr.map((item: string, i) => {
            return (
              <RadioSelect key={i}>
                <input
                  type="radio"
                  name="condition"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                />
                {item}
              </RadioSelect>
            );
          })}
        </div>

        <p>오늘의 식단</p>
        <Meal
          placeholder="오늘 먹은 것을 입력해주세요"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
      </QuestionContainer>
      <Button text="작성완료" handler={() => {}}></Button>
    </DiaryContainer>
  );
};
const RadioSelect = tw.label`
    mr-4
`;
const DiaryContainer = tw.div`
  flex
  flex-col
  items-center
`;
const QuestionContainer = tw.div`
  flex
  flex-col
  mt-4
  gap-8
  mb-10
  p-10
`;
const Title = tw.h1`
mt-4
text-5xl
mb-8
`;
const Date = tw.div`
ml-auto
mr-8
text-2xl
`;
const Meal = tw.input`
border-2 
h-20
p-2
rounded-2xl
text-2xl
`;

export default Diary;
