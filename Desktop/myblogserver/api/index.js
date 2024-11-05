 const express = require("express");
 const app = express();
 const dotenv = require('dotenv');
 const mongoose = require('mongoose');
 const authRoute = require('./routes/auth');
require('dotenv').config();
 dotenv.config();
 app.use(express.json());

 console.log('MongoDB URI:', process.env.MONGO_URI);

 mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
 }).then(console.log("Connected to MongoDB")).catch((err) => console.log("Error connecting to MongoDB:" , err));

 app.use("/api/auth", authRoute);


 app.listen("8000", () => {
    console.log("Backend is running")

  // const PORT = process.env.PORT || 8000;
  // app.listen(PORT, () => console.log(`Server is running ${PORT}`));
 
 });