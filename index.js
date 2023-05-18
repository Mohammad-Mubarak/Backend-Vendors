const express = require('express')
const app = express()
const port = 3000

// routes
const VendorRoute = require("./routes/Vendors")

// database connection
require("./config/databaseConnection")



// middleware for json data
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use("/",VendorRoute)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))