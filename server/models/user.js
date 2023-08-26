// // const mongoose = require('mongoose')
// // const validator = require('validator')
// // const bcrypt = require('bcryptjs')
// // const jwt = require('jsonwebtoken')
// // const Joi = require('joi-password-complexity')

// // // const userSchema = new mongoose.Schema({
// // //     user_type: {
// // //         type: String,
// // //         required: true,
// // //         trim: true,
// // //     },
// // //     full_name: {
// // //         type: String,
// // //         required: true,
// // //         trim: true,
// // //     },
// // //     email: {
// // //         type: String,
// // //         required: true,
// // //         trim: true,
// // //         unique: true,
// // //         validate(value) {
// // //             if(!validator.isEmail(value)) {
// // //                 throw new Error("not a valid email")
// // //             }
// // //         }
// // //     },
// // //     password: {
// // //         type: String,
// // //         required: true,
// // //         minlength: 6,
// // //     },
// // //     cpassword: {
// // //         type: String,
// // //         required: true,
// // //         minlength: 6,
// // //     },
// // //     tokens: [
// // //         {
// // //             token: {
// // //                 type: String,
// // //                 required: true,
// // //             }
// // //         }
// // //     ]
// // // });

// // const userSchema = new mongoose.Schema({
// //             user_type: {
// //                 type: String,
// //                 required: true,
// //                 trim: true,
// //             },
// //             full_name: {
// //                 type: String,
// //                 required: true,
// //                 trim: true,
// //             },
// //             email: {
// //                 type: String,
// //                 required: true,
// //                 trim: true,
// //                 // unique: true,
// //                 validate(value) {
// //                     if(!validator.isEmail(value)) {
// //                         throw new Error("not a valid email")
// //                     }
// //                 }
// //             },
// //             password: {
// //                 type: String,
// //                 required: true,
// //             },
            
// // })


// // // Creating model
// // userSchema.pre("save", async function (next) {

// //     this.password = await bcrypt.hash(this.password, 12);
    
// //     next()
// // });


// // // token generate
// // userSchema.methods.generateAuthtoken = async function () {
// //     try {
// //         let token23 = jwt.sign({ _id: this._id }, keysecret, {
// //             expiresIn: "1d"
// //         });

// //         this.tokens = this.tokens.concat({ token: token23 });
// //         await this.save();
// //         return token23;
// //     } catch (error) {
// //         res.status(422).json(error)
// //     }
// // }


// // // createing model
// // const userdb = new mongoose.model("users", userSchema);

// // module.exports = userdb;


// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     user_type: {
//                         type: String,
//                         default: 'visitor'
//                     },
//                     full_name: {
//                         type: String,
//                     },
//                     email: {
//                         type: String,
//                         // unique: true,
//                         // validate(value) {
//                         //     if(!validator.isEmail(value)) {
//                         //         throw new Error("not a valid email")
//                         //     }
//                         // }
//                     },
//                     password: {
//                         type: String,
//                     },
// });

// const userModel = mongoose.model('users', userSchema)

// module.exports = userModel

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	user_type: { type: String, required: true },
	full_name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		user_type: Joi.string().required().label("User Type"),
		full_name: Joi.string().required().label("Full Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };