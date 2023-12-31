"use client";
import * as St from "@/app/styledComponents/profile/StyleProfile";
import Button from "@/components/common/button/Button";
import Spacer from "@/components/ui/Spacer";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { DateDiary, GetDiary, Value } from "./model/profile";

const ProfilePage = () => {
  // useState 훅의 초기값으로 현재 날짜를 넣어줌
  const [value, onChange] = useState<Value>(new Date());
  //화장실 간 횟수 배열
  const toiletNumberArr = ["0", " 1", " 2", " 3", "4"];
  //화장실 간 횟수 usestate
  const [toiletNumber, setToiletNumber] = useState("");
  //쾌변 컨디션 배열
  const conditionArr = ["😄", "😐", "😣", "😫"];
  //쾌변 컨디션 useState
  const [condition, setCondition] = useState("");
  //식단 useState
  const [meal, setMeal] = useState("");
  //기타 사항 useState
  const [comment, setComment] = useState("");
  //수정상태
  const [isEdit, setIsEdit] = useState(false);
  //토글 상태
  const [isOpen, setIsOpen] = useState(false);
  //날짜 형태 포맷
  const formatDate = moment(value).format("YYYY.MM.DD");
  //일기 목록
  const [diarys, setDiarys] = useState<DateDiary>([]);
  //일기 추가 로직
  const addDiaryhandle = () => {
    if (toiletNumber && condition && meal) {
      const newDiary = {
        toiletNumber,
        condition,
        meal,
        date: formatDate,
        comment
      };

      const addDiary = async () => {
        try {
          const response = await axios.post(
            "http://localhost:4001/diary",
            newDiary
          );
          alert("일기가 추가되었습니다.");
          setMeal("");
          setComment("");
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
  //달력에 추가할 컨텐츠
  const addContent = ({ date }: any) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];
    // 해당날짜타일과 일기의 날짜 가 맞는 것(타일 날짜)
    const diaryDate = diarys!.find((one: GetDiary) => {
      return moment(date).format("YYYY.MM.DD") === one.date;
    });
    const diaryCondition = diaryDate?.condition;
    const diaryToiletNumber = diaryDate?.toiletNumber;

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList!.find((day) => day === moment(date).format("YYYY.MM.DD"))) {
      if (diaryCondition === "😄") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/빨간똥.png" />
            <St.TileP>{diaryToiletNumber}</St.TileP>
          </St.TileContents>
        );
      } else if (diaryCondition === "😐") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/주황똥.png" />
            <St.TileP>{diaryToiletNumber}</St.TileP>
          </St.TileContents>
        );
      } else if (diaryCondition === "😣") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/초록똥.png" />
            <St.TileP>{diaryToiletNumber}</St.TileP>
          </St.TileContents>
        );
      } else if (diaryCondition === "😫") {
        contents.push(
          <St.TileContents>
            <St.PooImage src="/assets/파란똥.png" />
            <St.TileP>{diaryToiletNumber}</St.TileP>
          </St.TileContents>
        );
      }
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

  //해당 날짜에 일기가 있으면 일지 없으면 작성란
  const writeHandle = () => {
    setIsOpen(true);
  };
  //일지 부분 닫기
  const diaryCloseHandle = () => {
    setIsOpen(false);
  };

  //삭제하기
  const removeHandle = async (id: string | undefined) => {
    if (confirm(`${formatDate} 날짜의 일기를 삭제하시겠습니까?`)) {
      axios.delete(`http://localhost:4001/diary/${id}`);
      setDiarys(
        diarys?.filter((diary) => {
          return diary.id !== id;
        })
      );
      alert("삭제가 완료되었습니다");
    } else {
      alert("삭제가 취소되었습니다.");
    }
  };
  //수정하기
  const [editToiletNumber, setEditToiletNumber] = useState(
    dateDiary?.toiletNumber
  );
  const [editCondition, setEditCondition] = useState(dateDiary?.condition);
  const [editMeal, setEditMeal] = useState(dateDiary?.meal);
  const [editComment, setEditComment] = useState(dateDiary?.comment);

  const editHandle = (id: string | undefined) => {
    axios.patch(`http://localhost:4001/diary/${id}`, {
      toiletNumber: editToiletNumber,
      condition: editCondition,
      meal: editMeal,
      comment: editComment
    });
    setIsEdit(false);
    fetchDiary();
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
        onClickDay={writeHandle}
      />

      {isOpen ? (
        isEdit ? (
          <St.DiaryContainer>
            <St.closeBtn onClick={diaryCloseHandle}>X</St.closeBtn>
            <St.Title>쾌변일지 수정</St.Title>
            <St.Date>{formatDate}</St.Date>
            <St.QuestionContainer>
              <div>이날 화장실 간 횟수</div>
              <St.InputWrap>
                {toiletNumberArr.map((item: string, i) => {
                  return (
                    <St.RadioSelect key={i}>
                      <input
                        type="radio"
                        name={editToiletNumber}
                        value={item}
                        onChange={(e) => setEditToiletNumber(e.target.value)}
                      />
                      {item}
                    </St.RadioSelect>
                  );
                })}
              </St.InputWrap>

              <p>이날의 쾌변 컨디션</p>
              <St.InputWrap>
                {conditionArr.map((item: string, i) => {
                  return (
                    <St.RadioSelect key={i}>
                      <input
                        type="radio"
                        name={editCondition}
                        value={item}
                        onChange={(e) => setEditCondition(e.target.value)}
                      />
                      {item}
                    </St.RadioSelect>
                  );
                })}
              </St.InputWrap>

              <p>이날의 식단</p>
              <St.EditTextArea
                placeholder="이날 먹은 것을 입력해주세요"
                value={editMeal}
                onChange={(e) => setEditMeal(e.target.value)}
              >
                {dateDiary?.meal}
              </St.EditTextArea>

              <p>메모</p>
              <St.EditTextArea
                placeholder="추가로 적으실게 있다면 적어주세요"
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
              >
                {dateDiary?.comment}
              </St.EditTextArea>
            </St.QuestionContainer>

            <Button
              text="수정완료"
              handler={() => {
                editHandle(dateDiary?.id);
              }}
            ></Button>
          </St.DiaryContainer>
        ) : //해당 날짜 데이터에 따라
        !dateDiary ? (
          <St.DiaryContainer>
            <St.closeBtn onClick={diaryCloseHandle}>X</St.closeBtn>
            <St.Title>쾌변일지 작성</St.Title>
            <St.Date>{formatDate}</St.Date>
            <St.QuestionContainer>
              <div>오늘 화장실 간 횟수</div>

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
                      {item}
                    </St.RadioSelect>
                  );
                })}
              </St.InputWrap>

              <p>오늘의 쾌변 컨디션</p>
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
                      {item}
                    </St.RadioSelect>
                  );
                })}
              </St.InputWrap>

              <p>오늘의 식단</p>
              <St.TextInput
                placeholder="오늘 먹은 것을 입력해주세요"
                value={meal}
                onChange={(e) => setMeal(e.target.value)}
              />

              <p>메모</p>
              <St.TextInput
                placeholder="추가로 적으실게 있다면 적어주세요"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </St.QuestionContainer>

            <Button text="작성완료" handler={addDiaryhandle}></Button>
          </St.DiaryContainer>
        ) : (
          <St.DiaryContainer>
            <St.closeBtn onClick={diaryCloseHandle}>X</St.closeBtn>
            <St.Title>쾌변일지</St.Title>
            <St.Date>{formatDate}</St.Date>
            <St.QuestionContainer>
              <div>오늘 화장실 간 횟수</div>
              <St.InputWrap>{dateDiary?.toiletNumber}</St.InputWrap>
              <p>오늘의 쾌변 컨디션</p>
              <St.InputWrap>{dateDiary?.condition}</St.InputWrap>
              <p>오늘의 식단</p>
              <St.InputWrap>{dateDiary?.meal}</St.InputWrap>
              <p>메모</p>
              <St.InputWrap>{dateDiary?.comment}</St.InputWrap>
            </St.QuestionContainer>
            <St.ButtonContainer>
              <Button
                text="수정하기"
                handler={() => {
                  setIsEdit(true);
                }}
              ></Button>
              <Button
                text="삭제하기"
                handler={() => {
                  removeHandle(dateDiary?.id);
                }}
              ></Button>
            </St.ButtonContainer>
          </St.DiaryContainer>
        )
      ) : (
        // <Button text="일지 추가하기" handler={()=>{setWriteDiary(true)}} />
        ""
      )}
      <Spacer y={30} />
    </St.Container>
  );
};

export default ProfilePage;
