const express = require("express");
const router = express.Router();

const Board = require("../models/Board");
const Comment = require("../models/Comment");

router.get("/", (req, res) => {
  // Comment.create({
  //   content: "댓글1 다섯글자 이상",
  //   author: "작성자1",
  //   tags: ["Love", "Science"],
  // })
  //   .then((result) => {
  //     res.json(result);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.json(err);
  //   });
  //
  // Board.create({
  //   title: "제목제목3",
  //   content: "내용내용3",
  //   author: "num3작가",
  //   num: 3,
  // }).then((result) => {
  //   res.json(result);
  // });
  //
  // Board.insertMany([
  //   {
  //     title: "두번째 제목제목",
  //     content: "두번째 내용내용",
  //     author: "작가",
  //     num: 1,
  //   },
  //   {
  //     title: "세번째 제목제목",
  //     content: "세번째 내용내용",
  //     author: "작성자",
  //     num: 1,
  //   },
  // ]).then((result) => res.json(result));

  // Board.find({
  //   num: {
  //     $gt: 2, // greater then 2 (2보다 큰 애들 가져오라는 뜻)
  //   },
  // }).then((result) => res.json(result));

  // Board에서 num이 5보다 작은(less than: lt) 데이터 조회
  // Board.find({
  //   num: {
  //     $lt: 5,
  //   },
  // }).then((result) => res.json(result));

  // Board에서 num이 5보다 작거나 같은(lte) 데이터 조회
  // Board.find({
  //   num: {
  //     $lte: 5,
  //   },
  // }).then((result) => res.json(result));

  // const board = new Board({
  //   title: "My First Board",
  //   content: "내용1",
  //   author: "작성자1",
  // });
  //
  // board.save().then((result) => {
  //   console.log(result);
  //   res.json(result);
  // });
  //
  // Board.create({
  //   title: "제목2",
  //   content: "내용2",
  //   author: "작성자2",
  // }).then((result) => {
  //   console.log(result);
  //   res.json(result);
  // });
  //
  // // 한번에 많은 데이터 삽입
  // Board.insertMany([
  //   { title: "제목3", content: "내용3", author: "작성자1" },
  //   {
  //     title: "제목4",
  //     content: "내용4",
  //     author: "작성자1",
  //   },
  // ])
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  //
  // // 전체 데이터 조회
  // Board.find().then((data) => {
  //   res.json(data);
  // });
  //
  // //데이터 한 개 조회
  // Board.findOne().then((data) => {
  //   res.json(data);
  // });
  //
  // //where절 같은 느낌
  // Board.find({ author: "작성자1" }).then((data) => {
  //   res.json(data);
  // });
  // //id로 조회
  // Board.findById("6646a16f7f28d276a80fda0e").then((data) => {
  //   res.json(data);
  // });
  //
  // // 삭제
  // Board.deleteOne({ title: "제목4" }).then((result) => {
  //   res.json(result);
  // });
  // Board.deleteMany({ author: "작성자1" }).then((result) => {
  //   res.json(result);
  // });
  // // 업데이트
  // Board.updateOne({ title: "제목2" }, { content: "내용2 수정" }).then(
  //   (result) => {
  //     res.json(result);
  //   }
  // );

  // Comment 추가시 board의 id 직접 전달
  // Comment.create({
  //   content: "new Comment",
  //   author: "ja",
  //   board: "6646b49f76d34a4f943bf50a",
  // }).then((result) => {
  //   res.json(result);
  // });

  // Board 객체 전달
  // Board.findOne().then((board) => {
  //   Comment.create({
  //     content: "새 댓글입니다.",
  //     author: "pja",
  //     board: board,
  //   }).then((result) => res.json(result));
  // });

  // comment populated board // left outer join 개념! (comment는 다 나옴)
  // Comment.find()
  //   .populate("board")
  //   .then((result) => {
  //     res.json(result);
  //   });

  Board.find()
    .populate("comments")
    .exec()
    .then((result) => {
      res.json(result);
    });

  // res.send("My First Board");
});

module.exports = router;
