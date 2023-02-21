const express = require("express")
const cors = require("cors")
const path = require("path")

//routes
const productRoute = require('./controller/product.ctrl')

const app = express();
app.use(cors())

app.use("/images",express.static(path.join(__dirname,"/Images")))

app.get("/test",(req,res)=>{
    res.json("Server Is Running Properly")
})

let PORT = 5000
let port = PORT || 5000

app.use('/', productRoute)

app.listen(port,()=> console.log("server running"))