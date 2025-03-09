import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
    const {name, email, password}= req.body;
    try{
        let userfound  = await User.findOne({email});
        if(userfound){
            return res.status(400).json({msg:"User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            name,
            email,
            password:hashedPassword
        })
        await newUser.save();
        res.status(201).json({user});
    }catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
}

export const login = async(req,res)=>{
    const {email, password} = req.body;
    try{
        let user = await User.findOne({
            email
        });
        if(!user){
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        const payload = {
            user:{
                id:user.id
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:360000}, (err, token)=>{
            if(err) throw err;
            res.status(200).json({token});
        })
    }catch(error){
        console.error(error);  
        res.status(500).send("Server Error");
    }
}
