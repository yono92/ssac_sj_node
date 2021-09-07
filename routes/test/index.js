const express = require("express");
const router = express.Router();

router.get("/update/",(req,res)=>{
    res.json({
      title:"test main",
    });
  });
  
  router.get("/delete/",(req,res)=>{
    res.json({
      title:"test main",
    });
  });



module.export= router;