const express = require('express')
const router = express.Router()
const Event= require('../models/Event')



// route to home events
router.get('/', (req, res) => {
  Event.find({},(err,events)=>{
    // res.json(events)
  

    let chunk = []
    let chunkSize = 3
    for ( let i=0; i<events.length ; i+=chunkSize){
      chunk.push(events.slice(i,chunkSize + i ))
    }
    
    // res.json(chunk) -----

    res.render('event/index', {
      chunk : chunk})
 })
})

// // route to single events
router.get('/', (req, res) => {
  // console.log(req.params.id)
  res.render('event/show')
})

  
  module.exports = router
