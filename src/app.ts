import express from "express";
const app = express();

app.get('/', (req,res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

// const greeting: string = "Hello";
// const numbers: number[] = [1,2,3]; // array

// to compile, tsc app.ts 
// typescript copiler, tsc --init 
// edit config file
// create src folder
// initiate node project, npm init -y
// install express, npm install express
// add dev dependencies, npm install -D typescript ts-node nodemon @types/node @types/express
// script in package.json, 