import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_SERVER_URL;
console.log(apiUrl);
//"http://localhost:4001"
export const get = async (name: any) => {
  //   console.log(name.queryKey[0]);
  const res = await axios.get(`${apiUrl}/${name}`);
  console.log("엑시오스", res);
  return res.data;
};
// 겟은 가져오는 함수

export const post = async (name: string, data: any) => {
  const res = await axios.post(`${apiUrl}/${name}`, data);
  return res.data;
};
// 포스트는 보내는 함수

export const remove = async (name?: string, id?: string) => {
  const res = await axios.delete(`${apiUrl}/${name}/${id}`);
  return res.data;
};
//id를 지정해주면 그 id를 지워줌
export const patch = async (name: string, id: string, data: any) => {
  const res = await axios.patch(`${apiUrl}/${name}/${id}`, data);
  return res.data;
};
//id 지정해서 수정해줌
