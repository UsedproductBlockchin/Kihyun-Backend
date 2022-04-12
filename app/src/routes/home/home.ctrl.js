"use strict";
//데이터베이스 로드
console.log(__dirname);
const db = require("../../config/db");
const UserStorage = require("../../models/UserStorage");
const ProductStorage = require("../../models/ProductStorage");
const Product = require("../../models/Product");
const User = require("../../models/User");
const res = require("express/lib/response");
const { save } = require("../../models/UserStorage");
const Deliver = require("../../models/Deliver");
const qs = require('querystring');
const url = require('url');
const output = {
    main : (req,res) => {
        //여기바로 views로 가나 여기는 진짜 보여준느 식서버가 클라이언트에게 home.index를 render해서 크라이언트에게 보냄
        res.render("home/main");
    },
    login : (req,res) => {
        res.render("home/login");
    },
    logout : (req,res) => {
        delete req.session.userid;
        console.log("logout!");
        req.session.save(function(){
            res.redirect("/login");
        });
    },
    register : (req,res) => {
        res.render("home/register");
    },
    find_id : (req,res)=>{
        res.render("home/find_id");
    },
    find_psword : (req,res)=>{
        res.render("home/find_psword");
    },

    reset_psword : (req,res)=>{
        res.render("home/reset_psword");
    },
    product_register : (req,res)=>{
        res.render("home/product_register")
    },
    get_deliver : (req,res)=>{
        res.render("home/get_deliver")
    },
    product_update : (req,res)=>{
        let productid = url.parse(req.url, true).query.id;
        console.log("control output :", productid)
        res.render("home/product_update",{pid:productid})
    },
    product_list : (req,res)=>{
        db.query(`SELECT * FROM productinfo WHERE sellerID=?`, [req.session.userid], function(err, rows){
            if(err) throw err;
            else{res.render("home/product_list",{rows:rows});}
        }); 
        // res.render("home/product_list")
    },
    product_list_all : (req,res)=>{
        db.query(`SELECT * FROM productinfo`, function(err, rows){
            if(err) throw err;
            else{res.render("home/product_list_all",{rows:rows});}
        }); 
        // res.render("home/product_list")
    },

    buy : (req,res)=>{
        let pid = url.parse(req.url, true).query.id;
        console.log("상품정보 :", pid);
        res.render("home/buy", {pid:pid})
    },
    buy_list : (req,res)=>{
        console.log("check ");
        db.query(`SELECT * FROM productinfo WHERE buyerID=?`, [req.session.userid], function(err, rows){
            if(err) throw err;
            else{res.render("home/buy_list",{rows:rows});}
        }); 
    },

    deliver_list : (req,res)=>{
        console.log("check ");
        db.query(`SELECT * FROM productinfo WHERE state=?`, ["Reserved"], function(err, rows){
            if(err) throw err;
            else{res.render("home/deliver_list",{rows:rows});}
        }); 
    },
    count : (req,res)=>{
        if(req.session.count) {
            req.session.count++;
          } else {
            req.session.count = 1;
          }
        res.send('count : '+req.session.count);
    },

};

const process = {
    //로그인 데이터 받기 
    login : async (req,res) => {
        //요청받는거 user에 넣어줌, 전달한 데이터를 받은게 user
        const user = new User(req.body);
        console.log("user id?", user.body.userid);
        //로그인 메소드 불러오기
        const response = await user.login();
        req.session.userid = user.body.userid;
        req.session.save(function(){
            // res.send(user.body.userid);
            return res.json(response);
        });
     },
     find_id  : async(req,res) => {
         const user = new User(req.body);
         const response = await user.find_id();
         return res.json(response);
     },
     find_psword : async(req,res) => {
        const user = new User(req.body);
        const response = await user.find_psword();
        return res.json(response);
    },

    get_deliver: async(req,res) => {
       
        const deliver = new Deliver(req.body);
        const response = await deliver.get_deliver();
        return res.json(response);
    },
     register :async (req,res) => {

        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
       
     }, 

     reset_psword : async(req,res) => {
        const user = new User(req.body);
        const response = await user.reset_psword();
        return res.json(response);
     },

     product_register : async(req,res) => {
        const product = new Product(req.body);
        product.body.sellerID = req.session.userid;
        const response = await product.product_register();
        return res.json(response)
        //pdf 엮기
     },
     product_update : async(req,res)=>{
         let body = url.parse(req.url, true).query.id;
         const product = new Product(req.body);
         product.body.sellerID = req.session.userid;
         const response = await product.product_update(body);
         return res.json(response)
     },
     buy : async(req,res)=>{
        let body = url.parse(req.url, true).query.id;
        const product = new Product(req.body);
        product.body.buyerid = req.session.userid;
        console.log(product);
        const response = await product.product_buy(body);
        return res.json(response)
    },
     

};


//밖에서 쓰려고 내보내는거
module.exports = {
    output,
    process,
};


