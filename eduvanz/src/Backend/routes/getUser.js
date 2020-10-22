var express = require('express');
var router = express.Router();
var UserData = require('../models/registration')

router.get("/", (req,res)=> {

        UserData.find({}).exec((err, data)=> {
            if(err) {
                res.send('Invalid token')
            } else {
                console.log(data,"asddata")
                res.json({error:false, data:data})
            }
        })
})

module.exports = router;