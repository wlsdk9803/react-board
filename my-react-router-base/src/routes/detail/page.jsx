import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardDetail } from "../../lib/apis/boardDetail";
import axios from "axios";

const BoardDetail = () => {
  // useParams: url path(:boardId) 변수 받기
  //   const params = useParams();
  //   console.log(params);

  // useSearchParams: url querystring(? 뒤에 있는) 변수 받기

  const { boardId } = useParams();
  const [boardDetail, setBoardDetail] = useState({});

  useEffect(() => {
    getBoardDetail(boardId).then((data) => {
      //console.log(data);
      setBoardDetail(data);
    });
  }, []);

  return (
    <div>
      <h1>BoardDetail</h1>
      <p>
        <b>Title: </b>
        {boardDetail.title}
      </p>
      <p>
        <b>Content: </b>
        {boardDetail.content}
      </p>
      <p>
        <b>Author: </b>
        {boardDetail.author}
      </p>
      <p>
        <b>Created time: </b>
        {boardDetail.createdAt}
      </p>
      <p>
        <b>Updated time: </b>
        {boardDetail.updatedAt}
      </p>
      <br />
      <h3>Comments</h3>
      {boardDetail.comments && boardDetail.comments.length > 0 ? (
        boardDetail.comments.map((comment) => (
          <div
            key={comment._id}
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "10px 10px 0 10px",
              margin: "5px 0",
            }}
          >
            <p>
              <b>Content: </b>
              {comment.content}
            </p>
            <p>
              <b>Author: </b>
              {comment.author}
            </p>
          </div>
        ))
      ) : (
        <p>no comments</p>
      )}
    </div>
  );
  7;
};

export default BoardDetail;
