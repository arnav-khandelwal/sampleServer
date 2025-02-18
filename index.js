const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended : false}));

app.get("/users", (req, res) => {
    const HTML = `
        <ul>
            ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(HTML);
});

app.get("/", (req, res) => {
    res.send("hi i am arnav");
});

app.route("/api/users").get((req, res) => {
    return res.json(users);
}).post((req, res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success", id: users.length});
    });
});

app.route("/api/users/:id").get((req, res) => {
    const ID = Number(req.params.id);
    const user = users.find((user) => user.id === ID);
    return res.json(user);
}).patch((req, res) => {
    const body = req.body;
    const ID = Number(req.params.id);
    const user = users.find((user) => user.id === ID);
    Object.assign(user, body);
    return res.json({status: "success", newBody: user});

}).delete((req, res) => {
    const ID = Number(req.params.id);
    const index = users.findIndex((user) => user.id === ID);
    if (index !== -1) {
    users.splice(index, 1);
    }
    return res.json({status: "success", remaining: users.length});
});

app.listen(PORT, () => console.log(`server successfully started at port : ${PORT}`));

