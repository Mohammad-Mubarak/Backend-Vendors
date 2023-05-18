const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

// routes
const VendorRoute = require("./routes/Vendors")

// database connection
require("./config/databaseConnection")



// middleware for json data
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use("/",VendorRoute)




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
