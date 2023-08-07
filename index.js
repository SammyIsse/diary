import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.get("/add", (req, res) => {
    res.render("add.ejs");
});

app.post("/deleteDiary", (req, res) =>{
    res.render("index.ejs")
});

app.post("/addDiary", (req, res) =>{
    res.render("see.ejs")
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});