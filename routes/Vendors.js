const express = require("express")
const router = express.Router()
const moment =require("moment")

const Vendor = require("../models/vendor")

const data = require("../data.json")


const {
    getVendors,
    getVendorById,
    createVendor,
    updateVendor,
    DeleteVendor,
    test

} = require("../controllers/VendorController")


// <<<<<<<<<<<<<<<<<<<<<<<=========================  Create Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/vendor").post(createVendor)


// <<<<<<<<<<<<<<<<<<<<<<<=========================  Get All Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/all/vendor").get(getVendors)

//<<<<<<<<<<<<<<<<<<<<<<<========================= Get Vendor by ID Route   ==========================>>>>>>>>>>>>>>>>>
router.route("/vendor/:id").get(getVendorById)

// <<<<<<<<<<<<<<<<<<<<<<<=========================  Update Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/update/vendor/:id").put(updateVendor)

// <<<<<<<<<<<<<<<<<<<<<<<=========================  Delete Vendor Route    ==========================>>>>>>>>>>>>>>>>>
router.route("/vendor/delete/:id").delete(DeleteVendor)

router.route("/md").get(test)




// router.route("/add").post(async (req,res) => {
//     try {

//         const arr = req.body

//         var ActuallFakeData = []


//         for(let i = 0; i < arr.length; i++) {

              
//          var timeAutoGenerated = moment().format('MMMM Do YYYY, h:mm:ss a');

//          var arrSingleData = arr[i]


//          arrSingleData.timestamp=timeAutoGenerated

//          ActuallFakeData.push(arrSingleData)
		

//         }

//         const savedData = await Vendor.insertMany(ActuallFakeData);
//         res.send("done")
//         console.log('Data saved successfully:', savedData);
//       } catch (error) {
//         console.error('Error while saving data:', error);
//       }
// })



module.exports = router
