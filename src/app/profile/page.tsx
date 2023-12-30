"use client";
import * as St from "@/app/styledComponents/profile/StyleProfile";
import Button from "@/components/common/button/Button";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { DateDiary, GetDiary, Value } from "./model/profile";

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
  const [writeDiary, setWriteDiary] = useState(true);
  //수정상태
  const [isEdit, setIsEdit] = useState(false);
  //날짜 형태 포맷
  const formatDate = moment(value).format("YYYY.MM.DD");

  //일기 목록
  const [diarys, setDiarys] = useState<DateDiary>([]);
  //일기 추가 로직
  const addDiaryhandle = () => {
    if (toiletNumber && condition && meal) {
      const newDiary = { toiletNumber, condition, meal, date: formatDate };
      const newDate = formatDate;
      const addDiary = async () => {
        try {
          const response = await axios.post(
            "http://localhost:4001/diary",
            newDiary
          );
          alert("일기가 추가되었습니다.");
          setWriteDiary(true);
          setMeal("");
        } catch {
          alert("오류가 발생하였습니다.");
        }
      };
      addDiary();
      fetchDiary();
    } else {
      alert("모두 입력해주세요");
    }
  };
  //일기 읽어오기
  const fetchDiary = async () => {
    const { data } = await axios.get("http://localhost:4001/diary");
    setDiarys(data);
  };

  useEffect(() => {
    fetchDiary();
  }, []);
  // 해당 날짜 일기 불러오기 (클릭된 날짜)
  const dateDiary = diarys!.find((one: GetDiary) => {
    return formatDate === one.date;
  });

  //데이터에서 날짜만 빼기
  const dayList = diarys?.map((dairy) => dairy.date);
  const addContent = ({ date }: any) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];
    // 해당날짜타일과 일기의 날짜 가 맞는 것(타일 날짜)
    const dateDiary = diarys!.find((one: GetDiary) => {
      return moment(date).format("YYYY.MM.DD") === one.date;
    });
    const diaryCondition = dateDiary?.condition;
    const diaryToiletNumber = dateDiary?.toiletNumber;

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList!.find((day) => day === moment(date).format("YYYY.MM.DD"))) {
      if (diaryCondition === "😄") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/빨간똥.png" />
            <p>{diaryToiletNumber}</p>
          </St.TileContents>
        );
      } else if (diaryCondition === "😐") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/주황똥.png" />
            <p>{diaryToiletNumber}</p>
          </St.TileContents>
        );
      } else if (diaryCondition === "😣") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/초록똥.png" />
            <p>{diaryToiletNumber}</p>
          </St.TileContents>
        );
      } else if (diaryCondition === "😫") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/파란똥.png" />
            <p>{diaryToiletNumber}</p>
          </St.TileContents>
        );
      }
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

  //작성하기
  const writeHandle = () => {
    setWriteDiary(!writeDiary);
  };
  return (
    <St.Container>
      <St.Avatar src="../../../assets/defaultAvatar.JPG" />
      <St.Nickname>화장실 급해요</St.Nickname>
      <St.Id>ddongssaja</St.Id>

      <St.StyleCalendar
        locale="en"
        onChange={onChange}
        value={value}
        tileContent={addContent}
      />
      <Button text="작성하기" handler={writeHandle} />

      <St.DiaryContainer>
        <St.Title>
          {writeDiary
            ? isEdit
              ? "쾌변일지 수정"
              : "쾌변일지"
            : "쾌변일지 작성"}
        </St.Title>
        <St.Date>{formatDate}</St.Date>
        <St.QuestionContainer>
          <div>오늘 화장실 간 횟수</div>
          {writeDiary ? (
            <St.InputWrap>&nbsp; {dateDiary?.toiletNumber}</St.InputWrap>
          ) : (
            <St.InputWrap>
              {toiletNumberArr.map((item: string, i) => {
                return (
                  <St.RadioSelect key={i}>
                    <input
                      type="radio"
                      name={toiletNumber}
                      value={item}
                      onChange={(e) => setToiletNumber(e.target.value)}
                    />
                    &nbsp; {item}
                  </St.RadioSelect>
                );
              })}
            </St.InputWrap>
          )}

          <p>오늘의 쾌변 컨디션</p>
          {writeDiary ? (
            <St.InputWrap>&nbsp; {dateDiary?.condition}</St.InputWrap>
          ) : (
            <St.InputWrap>
              {conditionArr.map((item: string, i) => {
                return (
                  <St.RadioSelect key={i}>
                    <input
                      type="radio"
                      name={condition}
                      value={item}
                      onChange={(e) => setCondition(e.target.value)}
                    />
                    &nbsp; {item}
                  </St.RadioSelect>
                );
              })}
            </St.InputWrap>
          )}

          <p>오늘의 식단</p>
          {writeDiary ? (
            <St.InputWrap>&nbsp; {dateDiary?.meal}</St.InputWrap>
          ) : (
            <St.Meal
              placeholder="오늘 먹은 것을 입력해주세요"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
            />
          )}
        </St.QuestionContainer>
        {writeDiary ? (
          <St.ButtonContainer>
            <Button text="수정하기" handler={() => {}}></Button>
            <Button text="삭제하기" handler={() => {}}></Button>
          </St.ButtonContainer>
        ) : (
          <Button text="작성완료" handler={addDiaryhandle}></Button>
        )}
      </St.DiaryContainer>
    </St.Container>
  );
};

export default ProfilePage;
