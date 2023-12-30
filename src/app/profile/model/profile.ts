type ValuePiece = Date | null | any;

export type Value = ValuePiece | [ValuePiece, ValuePiece] | any;
export type Diary = {
  toiletNumber: string;
  condition: string;
  meal: string;
  date: string;
};

export type GetDiary = {
  id: string;
  toiletNumber: string;
  condition: string;
  meal: string;
  date: string;
};
export type DateDiary = GetDiary[] | undefined;
export type Content = {
  number: string;
  condition: string;
};
export type AddContent = Content[];
export type DayListtype = string[] | null;
