"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

//해당 페이지로 이동
router.get("/",ctrl.output.main);
router.get("/login",ctrl.output.login);
router.get("/register",ctrl.output.register);
router.get("/logout",ctrl.output.logout);
router.get("/count",ctrl.output.count);
//추후 구현
router.get("/find_id",ctrl.output.find_id);
router.get("/find_psword",ctrl.output.find_psword);
router.get("/reset_psword",ctrl.output.reset_psword);

router.get("/deliver_list",ctrl.output.deliver_list); 


router.get("/product_register",ctrl.output.product_register);
router.get("/product_update",ctrl.output.product_update);
router.get("/product_list",ctrl.output.product_list);
router.get("/product_list_all",ctrl.output.product_list_all);

router.get("/buy",ctrl.output.buy);
router.get("/buy_list",ctrl.output.buy_list);

// router.get("/buy_list",ctrl.output.buy_list);


// 데이터를 받아옴
router.post("/login",ctrl.process.login);
router.post("/register",ctrl.process.register);
router.post("/find_id",ctrl.process.find_id);
router.post("/find_psword",ctrl.process.find_psword);
router.post("/product_register",ctrl.process.product_register);
router.post("/product_update",ctrl.process.product_update);
router.post("/get_deliver",ctrl.process.get_deliver);
router.post("/buy",ctrl.process.buy);
module.exports = router;



