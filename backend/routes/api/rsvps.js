const { Router } = require('express');
const express = require('express')
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { RSVP, Event } = require('../../db/models');

// GET ALL RSVPS WITH USERS
router.get('/', asyncHandler(async (req, res) => {
    const rsvps = await RSVP.findAll({
        include: Event,
        // where: {
        //     userId
        // },
    });
    if (rsvps) {
        return res.json(rsvps)
    }
}))

router.post('/', asyncHandler(async (req, res) => {
    const newRSVP = RSVP.build(req.body)
    if (newRSVP) {
        await newRSVP.save()
        return res.json(newRSVP)
    }
}))

//TESTED POST 
// window.fetch('/api/rsvps/', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `fqn0F3j1-iQSFJC7QTVHU_8XInX1bmlwXxfU`
//       },
//     body: JSON.stringify({
//         userId: '3',
//         eventId: '2',
//     })
//   }).then(res => res.json()).then(data => console.log(data));

router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const rsvpId = parseInt(req.params.id, 10);
    const rsvp = await RSVP.findByPk(rsvpId);
    await rsvp.destroy();
    return res.json(rsvp)
}))

//TESTED DELETE
// window.fetch('/api/rsvps/4', {
//     method: 'DELETE',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `fqn0F3j1-iQSFJC7QTVHU_8XInX1bmlwXxfU`
//     }
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router;
