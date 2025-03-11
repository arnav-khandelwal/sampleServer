import express from "express";
import userRouter from "./routes/user.js";
import connectMongoDB from "./connection.js";

const app = express();
const PORT = 8000;


app.use(express.urlencoded({extended : false}));

//conection
connectMongoDB('mongodb://127.0.0.1:27017/MyFirstDB').then(console.log('mongoDB connected'));

// main page
app.get("/", (req, res) => {
    res.send("hi i am arnav");
});

//routes
app.use('/api/user', userRouter);

app.listen(PORT, () => console.log(`server successfully started at port : ${PORT}`));

