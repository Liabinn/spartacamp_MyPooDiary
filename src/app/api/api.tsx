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
