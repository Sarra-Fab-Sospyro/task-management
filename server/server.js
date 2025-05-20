const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(cors({
  origin: ["http://localhost:4200"],
  exposedHeaders: ["TESTING WHAT ARE YOU AND WHERE I CAN SEE YOU"]
}))

app.get('/', (req, res) => {
  res.send("HELLO WORLD!!")
  // const testStringJson = JSON.stringify("HELLO WORLD!");
  // res.send(testStringJson);
})

app.get("/api/test", (req,res)=>{
  console.log("stampo",path.join(__dirname, 'data', 'test.json'));
  const file = path.join(__dirname, 'data', 'test.json');
  res.sendFile(file);
})


app.listen(PORT, () => {
  console.log(`Mock server in ascolto su http://localhost:${PORT}`);
});