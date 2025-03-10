const express = require('express');

const mongoose = require('mongoose');
const fs = require('fs');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended : false}));

//schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    }, 
    lastName : {
        type: String, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
}, {timestamps: true});

//conection
mongoose.connect('mongodb://127.0.0.1:27017/MyFirstDB')
.then(() => console.log("mongodb connected"))
.catch((err) => console.log("mongo error", err)); 

const User = new mongoose.model("user", userSchema);

// main page
app.get("/", (req, res) => {
    res.send("hi i am arnav");
});

// get all users
app.get("/users", async (req, res) => {
    const allDbUsers = await User.find({});
    const HTML = `
        <ul>
            ${allDbUsers.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}
        </ul>
    `;
    res.send(HTML);
});


// api end points 
app.route("/api/users").get( async (req, res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}).post(async (req, res) => {
    const body = req.body;
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    return res.status(201).json({msg: 'success'})
});

app.route("/api/users/:id").get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.json({status: "failed", message: `no user found with id ${ID}`});
    return res.json(user);
}).patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {lastName : "changed"});
    return res.json({status: "success"});
}).delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "success"});
});

app.listen(PORT, () => console.log(`server successfully started at port : ${PORT}`));

