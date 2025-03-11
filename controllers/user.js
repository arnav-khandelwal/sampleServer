import User from "../models/user.js";

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlePostUser(req, res){
    const body = req.body;
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    return res.status(201).json({msg: 'success'})
}

async function getUsersById(req, res){
    const user = await User.findById(req.params.id);
    if(!user) return res.json({status: "failed", message: `no user found with id ${ID}`});
    return res.json(user);
}

async function patchUsersById(req, res){
    await User.findByIdAndUpdate(req.params.id, {lastName : "changed"});
    return res.json({status: "success"});
}

async function deleteUsersById(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "success"});
}

export {
    handleGetAllUsers,
    getUsersById,
    handlePostUser,
    patchUsersById,
    deleteUsersById,
};