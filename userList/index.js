//npm init
//npm i cors express body-parser
//npm i nodemon -D

const express = require('express');
//import router
const router = require('./router');
//解析表单数据，不然拿不到body的内容
const parser = require('body-parser');
//解决跨域问题
const cors = require('cors');

//create web server
const app = express();
//loading parser before using router
app.use(parser.json()); //optional: app.use(express.json());
//loading cors before using router
app.use(cors());
//use router
app.use(router);

const PORT = 8080;
app.listen(PORT, () => {
    console.log("local host 8080 is running");
});