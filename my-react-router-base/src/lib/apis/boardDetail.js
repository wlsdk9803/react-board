import axios from "axios";

export async function getBoardDetail(boardId) {
  const resp = await axios.get(`/api/board/${boardId}`);
  return resp.data;
}
