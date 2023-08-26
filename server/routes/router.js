// const express = require('express')
// const {userdb, validate} = require('../models/userSchema');
// const bcrypt = require('bcryptjs')

// const router = new express.Router()

// // for user registration

// // router.post('/register', async(req, res) => {
// //     console.log(req.body)
// //     const {user_type, full_name, password} = req.body

// //     if (!user_type || !full_name || !password) {
// //         res.status(422).json({error: 'fill in all the details'})
// //     }

// //     try {
// //         const preuser = await userdb.findOne({email: email})
        
// //         if(preuser) {
// //             res.status(422).json({error: "This Email is Already Exist"})
// //         } else {
// //             const finalUser = new userdb ({
// //                 user_type, full_name, email, password
// //             })

// //             // Password Hashing
// //             const storeData = await finalUser.save()

// //             console.log(storeData)
// //         }
// //     } catch (error) {
// //         res.status(422).json(error)
// //         console.log('catch block error')
// //     }

// // })


// router.post('/', async(req, res) => {
//     try {
//         const {error} = validate(req.body)
//         if(error) 
//             return res.status(400).send({message: error.details[0].message})

//         const user = await userdb.findOne({email: req.body.email});

//         if(user)
//             return res.status(409).send({message: 'User with given email already exist'})
    
//         const salt = await bcrypt.genSalt(Number(process.env.SALT))
//         const hashPassword = await bcrypt.hash(req.body.password, salt)

//         await new UserActivation({...req.body, password: hashPassword}).save()
//         res.status(201).send({message: "User created successfully"})
//         } catch (error) {
//             res.status(500).send({message: "Internal Server Error"})
//     }
// })

// module.exports = router

const express = require("express");
const app = express()
const {userModel} = require("../models/user");
var bcrypt = require("bcryptjs");


// for user registration

app.post('/register', (req, res) => {
    const {user_type, full_name, email, password} = req.body;

    bcrypt.hash(password, 10) 
    .then(hash => {
        userModel.create({user_type, full_name, email, password: hash})
        .then(user => res.json({status: "OK"}))
        .catch(err => res.json(err))
    }). catch(err => res.json(err))
})


