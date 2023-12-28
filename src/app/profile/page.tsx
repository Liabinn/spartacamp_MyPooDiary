"use client";
import Button from "@/components/common/button/Button";
import moment from "moment";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import * as St from "./StyleProfile";
import { Value } from "./model/profile";
const ProfilePage = () => {
  // useState 훅의 초기값으로 현재 날짜를 넣어줌
  const [value, onChange] = useState<Value>(new Date());
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

  //가상의 데이터 유무에 따른 일지 양식
  const [diary, setDiary] = useState(true);
  return (
    <St.Container>
      <St.Avatar src="../../../assets/defaultAvatar.JPG" />
      <St.Nickname>화장실 급해요</St.Nickname>
      <St.Id>ddongssaja</St.Id>

      <St.StyleCalendar locale="en" onChange={onChange} value={value} />

      <St.DiaryContainer>
        <St.Title>{diary ? "쾌변일지" : "쾌변일지 작성"}</St.Title>
        <St.Date>{moment(value).format("YYYY.MM.DD")}</St.Date>
        <St.QuestionContainer>
          <div>오늘 화장실 간 횟수</div>
          {diary ? (
            <St.InputWrap>3</St.InputWrap>
          ) : (
            <St.InputWrap>
              {toiletNumberArr.map((item: string, i) => {
                return (
                  <St.RadioSelect key={i}>
                    <input
                      type="radio"
                      name="toiletNumber"
                      value={toiletNumber}
                      onChange={(e) => setToiletNumber(e.target.value)}
                    />
                    &nbsp; {item}
                  </St.RadioSelect>
                );
              })}
            </St.InputWrap>
          )}

          <p>오늘의 쾌변 컨디션</p>
          {diary ? (
            <St.InputWrap>😐</St.InputWrap>
          ) : (
            <St.InputWrap>
              {conditionArr.map((item: string, i) => {
                return (
                  <St.RadioSelect key={i}>
                    <input
                      type="radio"
                      name="condition"
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                    />
                    &nbsp; {item}
                  </St.RadioSelect>
                );
              })}
            </St.InputWrap>
          )}

          <p>오늘의 식단</p>
          {diary ? (
            <St.InputWrap>burger</St.InputWrap>
          ) : (
            <St.Meal
              placeholder="오늘 먹은 것을 입력해주세요"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
            />
          )}
        </St.QuestionContainer>
        {diary ? (
          <St.ButtonContainer>
            <Button text="수정하기" handler={() => {}}></Button>
            <Button text="삭제하기" handler={() => {}}></Button>
          </St.ButtonContainer>
        ) : (
          <Button text="작성완료" handler={() => {}}></Button>
        )}
      </St.DiaryContainer>
    </St.Container>
  );
};

export default ProfilePage;
