const express = require('express')
const {PrismaClient} = require('@prisma/client')
//const bodyParser = require('body-parser')
//const path = require('path')
//var mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const app = express()
app.use(cors());
app.use(express.json())

const prisma = new PrismaClient()

//For Registeration
app.post("/register", async (request, response) => {
    const{fname,lname,pass,email,phoneNumber} = request.body
    const Data = await prisma.users.create({
        data: {
            fname : fname,
            lname : lname,
            pass : pass,
            email : email,
            phoneNumber : phoneNumber,
            //imageLink : imageLink,
        }
    })
    response.json(Data)
})




//For login
app.post("/login" , async(request, response)=> {
    const{email,pass} = request.body
    const Data = await prisma.users.findFirst({
        where: {
            email: email,
            pass: pass
        }
    })
    if(Data){
        response.json({...Data, users : 1})
        response.status(200)

    }
})
//    const checkQuery = "SELECT email FROM users WHERE email = ?"
//     database.query(checkQuery, args, (error, result) => {
//         try {
//             if (error) {
//                 response.send({
//                     success: false,
//                     message: "Query Error",
//                     error
//                 })
//             } else if (result.length != 0) {
//                 response.send({
//                     success: false,
//                     message: "Email already exists"
//                 })
//             }
//             else {
//                 console.log("Hello")
//                 const query = "INSERT INTO users(firstName, lastName, pass,phoneNumber,imageLink,email) VALUES(?,?,?,?,?,?)";
//                 bcrypt.hash(password, 10, (error, hashedPassword) => {
//                     const argss = [firstName, lastName, hashedPassword,  phoneNumber,imageLink, email]
//                     if (error) {
//                         response.send({
//                             success: false,
//                             message: "Password encryption error",
//                             error
//                         })
//                     }
//                     else {
//                         database.query(query, argss, (error, result) => {
//                             if (error) {
//                                 response.send({
//                                     success: false,
//                                     message: "Unable to connect to database",
//                                     error
//                                 })
//                             } else {
//                                 response.send({
//                                     success: true,
//                                     data: result
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         } catch (error) {
//             response.send({
//                 success: false,
//                 message: "Error",
//                 error
//             })
//         }
//     });
// });


// const newsRouter = require('./api/routes/news')
// const usersRouter = require('./api/routes/users')
// const channelSubscribeRouter = require('./api/routes/channelSubscribe')

// const port = process.env.PORT|| 5000

// // Middleware
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// app.use('/news',newsRouter)
// app.use('/users',usersRouter)
// app.use('/channelSubscribe',channelSubscribeRouter)


// var connection=mysql.createConnection({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'newsportal',
//     // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
// })

// // // connect to mysql
// connection.connect(function(err) {
//     // in case of error
//     if(err){
//         console.log(err)
//         console.log(err.code);
//         console.log(err.fatal);
//     }
//     console.log("Database is connected ... nn");
// });

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })

app.listen(5000, ()=>{
    console.log("server connected")
})


