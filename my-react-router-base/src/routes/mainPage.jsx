import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <p>Hello My React Router</p>
      <Link to={"/board"} state={{ name: "박진아" }}>
        게시판으로 이동
      </Link>
      <br />
      <a href="/board">anchor 태그</a>
    </div>
  );
};

export default MainPage;
