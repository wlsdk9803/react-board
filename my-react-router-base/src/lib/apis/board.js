import axios from "axios";

export async function getBoardList() {
  const resp = await axios.get("/api/board");
  return resp.data;
}

export async function deleteBoard(boardId) {
  await axios.delete(`/api/board/${boardId}`);
  const resp = await getBoardList();
  return resp;
}
