const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors");
// routes
const VendorRoute = require("./routes/Vendors")

// database connection
require("./config/databaseConnection")


app.use(cors());

// middleware for json data
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use("/",VendorRoute)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
