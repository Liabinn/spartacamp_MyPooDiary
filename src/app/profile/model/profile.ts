type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];
export type Diary = {
  toiletNumber: string;
  condition: string;
  meal: string;
  date: string;
};
//   "id": 1,
//     "toiletNumber": 3,
//     "condition": "😐",
//     "meal": "피자",
//     "date": "2023.12.08"
