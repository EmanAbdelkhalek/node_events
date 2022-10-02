const db = require ('../config/database')
const Event = require('../models/Event')

let newEvents = [
    new Event ({
    title:' This is event 1',
    description:' Webinars. ',
    location:'Cairo',
    date:Date.now(),
    created_at: Date.now()
    }),

    new Event({
    title:' This is event 2',
    description:' Private Events ',
    location:'Giza',
    date:Date.now(),
    created_at :Date.now()}),

    new Event ({
        title:' this is event 3',
        description:' best event ',
        location:'Alex',
        date:Date.now(),
        created_at :Date.now()}),
    
    new Event ({
        title:' this is event 4',
        description:' User Conferences ',
        location:'egypt',
        date:Date.now(),
        created_at :Date.now()}),

    new Event ({
        title:' this is event 5',
        description:' Industry Conferences ',
        location:'mansoura',
        date:Date.now(),
        created_at :Date.now()}),

    new Event ({
        title:' this is event 6',
        description:'Trade Shows and Expos ',
        location:'Alminia',
        date:Date.now(),
        created_at :Date.now()}),

    new Event ({
        title:' this is event 7',
        description:' Field Marketing Events ',
        location:'Sohag',
        date:Date.now(),
        created_at :Date.now()}),

    new Event ({
        title:' This is event 8',
        description:' Sales Kick-Offs ',
        location:'asuat',
        date:Date.now(),
        created_at :Date.now()}),

    new Event ({
        title:' this is event 9',
        description:' Multi-Department and Multi-Site Meetings ',
        location:'aswan',
        date:Date.now(),
        created_at :Date.now()})
                    
]

newEvents.forEach((event)=>{
    event.save((err)=>{
        if(!err){console.log('save')}
        else{console.log(err)}})
})


// newEvents.
// newEvents.save(
//     (err)=>{
//         if(!err){console.log('save')}
//         else{console.log(err)}
//     }
// )

// let newEvent = new Event ({
//     title:' this is event 1',
//     description:' best event ',
//     location:'egypt',
//     date:Date.now()
// })

// newEvent.save(
//     (err)=>{
//         if(!err){console.log('save')}
//         else{console.log(err)}
//     }
// )