//모듈
const express = require("express");
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
// const bodyParser = require("body-parser");

const app = express();


app.use(session({
    secret: '1234DSFs@adf1234!@#$asd',
    resave: false,
    saveUninitialized: true,
    store:new MySQLStore({
      host:'localhost',
    //   port:3306,
      user:'root',
      password:'111111',
      database:'usedproduct'
    })
  }));


app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({extended :true}));

//라우팅 routes합치기
const home = require("./src/routes/home");
//앱세팅 
app.engine('ejs', require('ejs').__express);
//views가지고 오기
app.set("views","./src/views");
app.set("view engine","ejs");
//어디서든 views를 부르기 static화
app.use("/",home); //미들웨어use 연결해줌 index.js랑
module.exports = app;

