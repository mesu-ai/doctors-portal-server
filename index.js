const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config()
const { MongoClient } = require('mongodb');

const port=process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgurp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
      await client.connect();
      const database = client.db("doctors-portal");
      const appointmentDB = database.collection("appointment");
      

      console.log('connect to db');


    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('connect to server');
});

app.listen(port,(req,res)=>{
    console.log('connect to port:',port);
})
