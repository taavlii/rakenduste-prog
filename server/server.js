const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config();
const itemRouter = require("./item.router.js");
const Item = require("./item.model.js");
const userRouter = require("./user.router.js");
const bodyParser= require("body-parser");
const authRouter = require("./auth.router.js");

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
  }

const DB_URL= `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-3kwu5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`; 

app.use(bodyParser.json());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1",itemRouter);
app.use("/api/v1/users",userRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.get('/items/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
})

app.use(express.static('dist'));

function listen(){    
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`);
  });
}

mongoose.connect(DB_URL)
    .then(()=>{     
        console.log("DB Access granted");
        //deleteAllItems();
        migrate();
        listen();
        
    })
    .catch(err=>{
        console.error("DB ERROR",err);
    });

function migrate(){

    Item.count({},(err,countNr)=>{
        if(err) throw err;
        if(countNr >0) {
            console.log("items already exist, no migrations");
            return;
        }       
        saveAllItems();
    });
}

function deleteAllItems(){
    Item.deleteMany({},(err,doc)=>{
        console.log('err',err,"doc",doc);
    });
};

function saveAllItems(){
    console.log("migrate started")
    const items=DB.getItems();
    items.forEach(item =>{
        const document = new Item(item);
        document.save((err)=>{
            if(err){
                console.log(err);
                throw new Error("something happened during save");
            }
            console.log('save success');
        });
    })
}


