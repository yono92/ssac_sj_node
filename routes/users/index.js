const express = require("express");
const router = express.Router();



router.get("/",(res,req)=>{
    res.json({
        username:"lee",

    });
});


router.post("/",(res,req)=>{
    console.log(req.body);

    //유저 이름
    const username= req.body.username;

    //나이
    const age =req.body.age;

    //주소 
    const address = req.body.address

    // scs
    const sns =req.body.sns;

    res.json({
        content:"유저 생성 완료",
        profile: `내 이름은 이고, 나이는 이고, 사는곳은 이고, sns는 주로 사용해`
    });
});



router.delete("/:username",(res,req)=>{

    console.log(req.body)
    
    res.json({
        content:"유저 삭제 완료",
    });
});

module.export = router;