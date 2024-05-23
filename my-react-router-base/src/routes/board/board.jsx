import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBoardList, deleteBoard } from "../../lib/apis/board";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function BoardPage() {
  // const location = useLocation();
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  const handleDeleteBoard = (boardId) => {
    deleteBoard(boardId)
      .then((data) => {
        setBoardList(data);
        alert("삭제되었습니다.");
      })
      .catch((error) => console.error("error: ", error));
  };

  useEffect(() => {
    getBoardList().then((data) => {
      console.log(data);
      setBoardList(data);
    });
  }, []);

  return (
    <div>
      <h1>BoardList</h1>
      {/* <ul>
        {boardList.map((board) => {
          return <li key={board._id}>{board.title}</li>;
        })}
      </ul> */}
      {boardList.length > 0 ? (
        boardList.map((board) => (
          <div
            key={board._id}
            style={{
              borderBottom: "1px solid gray",
              paddingBottom: "5px",
              paddingTop: "5px",
            }}
          >
            <p>
              <b>Title: </b>
              {board.title}
            </p>
            <p>
              <b>Content: </b>
              {board.content}
            </p>
            <p>
              <b>Author: </b>
              {board.author}
            </p>
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => navigate(`/board/${board.id}`)}
            >
              자세히
            </Button>
            <Button onClick={() => handleDeleteBoard(board.id)}>Delete</Button>
          </div>
        ))
      ) : (
        <div>게시글이 없습니다.</div>
      )}
    </div>
  );
}

// import MyNavbar from "~/components/MyNavbar/MyNavbar";
// import MyFooter from "~/components/MyFooter/MyFooter";
// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Board = ({ apiUrl }) => {
//   const [boardArr, setBoardArr] = useState([]);
//   const navigate = useNavigate();

//   const fetchBoardList = () => {
//     axios
//       .get(`${apiUrl}/board`)
//       .then((response) => {
//         console.log(response.data);
//         setBoardArr(response.data);
//       })
//       .catch((error) => {
//         console.log("Error fetching data: ", error);
//       });
//   };
//   const deleteBoard = (boardId) => {
//     axios
//       .delete(`${apiUrl}/board/${boardId}`)
//       .then(() => {
//         fetchBoardList();
//       })
//       .catch((error) => {
//         console.log("Error deleting board: ", error);
//       });
//     alert("삭제되었습니다.");
//   };
//   useEffect(() => {
//     fetchBoardList();
//   }, []);

//   return (
//     <div>
//       {boardArr.map((board) => (
//         <div
//           key={board.id}
//           style={{
//             borderBottom: "1px solid gray",
//             paddingBottom: "5px",
//             paddingTop: "5px",
//           }}
//         >
//           <p>
//             <b>Title: </b>
//             {board.title}
//           </p>
//           <p>
//             <b>Content: </b>
//             {board.content}
//           </p>
//           <p>
//             <b>Author: </b>
//             {board.author}
//           </p>
//           {/* <Link to={board.id}>
//             <Button style={{ marginRight: "10px" }}>자세히</Button>
//           </Link> */}
//           <Button
//             style={{ marginRight: "10px" }}
//             onClick={() => navigate(`/board/${board.id}`)}
//           >
//             자세히
//           </Button>
//           <Button onClick={() => deleteBoard(board.id)}>Delete</Button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Board;
