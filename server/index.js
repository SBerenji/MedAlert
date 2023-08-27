// require("dotenv").config();
// const express = require("express");
// const app = express();
// require("./db/conn");
// const router = require("./routes/router");
// const cors = require("cors");
// const cookiParser = require("cookie-parser")
// const port = 8000;


// // app.get("/",(req,res)=>{
// //     res.status(201).json("server created")
// // });

// app.use(express.json());
// app.use(cookiParser());
// app.use(cors());
// app.use(router);


// app.listen(port,()=>{
//     console.log(`server start at port no : ${port}`);
// })


// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser')

// const userModel = require('./models/userSchema')

// const port = 8000;

// const app = express()
// app.use(express.json())
// app.use(cors())
// app.use(cookieParser())

// app.listen(port, () => {
//     console.log('Listening to port: ', port)
// })

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db/conn");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your React app's URL
  credentials: true, // Allow cookies and other credentials to be included
}));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));