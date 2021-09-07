const express = require("express");
const router = express.Router();

const fruitArr = []; // DB 역할



// Read 전체 데이터 조회
router.get("/",(req, res)=>{
    res.json({
        data:fruitArr,
    });

});

router.post("/"(res, req) => {
    res.json({

    })
})

// Create 데이터 생성
// Method: POST
// URL : /posts
// Header : {context-type :application/json}

// Request
// Body:{
// fruit: 과일이름
// }
// 해당 과일 이름을 비구조화 할당으로 가져와서 fruitArr에 추가해주시기 바랍니다.
// 그리고 추가한 후에 알파벳 순으로 정렬해주세요

// Response
// type : json
//{
    // message :"과일 추가가 완료 외었습니다."
// 

// fail
// status 500 code
// {
// mmssage :'중복된 과일이 존재합니다'
// }

// Create 데이터 생성

module.export = router;