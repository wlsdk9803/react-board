import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/mainPage";
import BoardLayout from "./routes/board/layout";
import BoardPage from "./routes/board/board";
import BoardWritePage from "./routes/board/write/page";
import BoardDetail from "./routes/detail/page";
import LoginPage from "./routes/login/page";

export const routerObj = [
  {
    path: "/",
    element: <BoardLayout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/board",
    element: <BoardLayout />,
    children: [
      { path: "", element: <BoardPage />, index: true },
      { path: ":boardId", element: <BoardDetail /> },
      { path: "write", element: <BoardWritePage /> },
    ],
  },
];
const router = createBrowserRouter(routerObj);
export default router;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainPage />,
//     index: true,
//     //children: [{ path: "board", element: <Board /> }],
//   },
//   // {
//   //   path: "/board",
//   //   element: <Board />,
//   // },
//   {
//     path: "/board",
//     element: <BoardLayout />,
//     children: [
//       { path: "", element: <Board />, index: true },
//       { path: "sample", element: <div>sample</div> },
//       { path: "write", element: <BoardWritePage /> },
//     ],
//   },
// ]);

// export default router;
