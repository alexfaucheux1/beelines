// 1. Import Depedencies
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();


// 1.1 Allow parsing on request bodies
app.use(express.json())
app.use(cors())

// 2. Import routes for api
const watsonRoutes = require("./routes/api/watson")

// 2.1 Direct Requests to /api/watson Routes
app.use("/api/watson", watsonRoutes)


// 3. Start server
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log("Server listening on port ", port);
    
})

app.get("/api/watson/session");

