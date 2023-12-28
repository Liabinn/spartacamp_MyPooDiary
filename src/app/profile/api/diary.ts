import axios from "axios";

const SERVER_URI = "http://localhost:4000";

const getDiary = async () => {
  const response = await axios.get(`${SERVER_URI}/diary`);
  return response.data;
};

// const addDiary = async (newDiary: TodoItem) => {
//   await axios.post(`${SERVER_URI}/diary`, newDiary);
// };

// const removeDiary = async (id: string) => {
//   await axios.delete(`${SERVER_URI}/diary/${id}`);
// };

// const updateDiary= async (payload: SwitchPayload) => {
//   await axios.patch(`${SERVER_URI}/diary/${payload.id}`, {
//     isDone: payload.isDone,
//   });
// };
