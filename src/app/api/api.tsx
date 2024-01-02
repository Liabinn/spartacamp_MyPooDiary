import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;
console.log("저장소 Url", apiUrl);
//"http://localhost:4001"
export const get = async (maplist: any) => {
  //   console.log(name.queryKey[0]);
  const res = await axios.get(`${apiUrl}/maplist`);
  // console.log("엑시오스", res);
  return res.data;
};
// 겟은 가져오는 함수

export const patch = async (data: { [key: string]: any }) => {
  const res = await axios.patch(`${apiUrl}/maplist`, data);
  return res.data;
};

export const post = async (data: { [key: string]: any }) => {
  const res = await axios.post(`${apiUrl}/maplist`, data);
  return res.data;
};

export const mapKeyword = async (keyword: string) => {
  const res = await axios.get(`${apiUrl}/keyword/`);
  return res.data;
};
export const mapKeywordPost = async (data: { [key: string]: any }) => {
  const res = await axios.post(`${apiUrl}/keyword/`, data);
  return res.data;
};
export const mapKeywordPut = async (data: { [key: string]: any }) => {
  const res = await axios.put(`${apiUrl}/keyword/1`, data);
  return res.data;
};

export const mapKeywordDelete = async (id: number) => {
  const res = await axios.delete(`${apiUrl}/keyword/${id}`);
  return res.data;
};
