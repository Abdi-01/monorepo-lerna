const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const dbConf = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// DB Check Connection
// dbConf.getConnection((error,connection)=>{
//     if(error){
//         console.log("Error MySQL Connection", error.sqlMessage);
//     }

//     console.log(`Connect MySQL ✅ : ${connection.threadId}`);
// })


const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).send('<h1>API Express with LERNA</h1>')
})

app.listen(PORT, (err) => {
    if(err){
        console.log(`ERROR RUNNING ${err}`);
    }else{
        console.log(`API Express w/ LERNA RUNNING at ${PORT} ✅`);
    }
});