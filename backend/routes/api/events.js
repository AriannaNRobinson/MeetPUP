const express = require('express');
const asyncHandler = require('express-async-handler')

const router = express.Router();

const { Event } = require('../../db/models');

// GET ALL EVENTS /api/events/
router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll();
    return res.json(events)
}))
// GET SINGLE MOVIE /api/events/:eventId
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const eventId = parseInt(req.params.id, 10);
    const event = await Event.findByPk(eventId);
    return res.json(event)
}))
// CREATE NEW EVENT /api/events
router.post('/', asyncHandler(async (req, res) => {
    const { name, description, date, capacity, hostUserId, locationId, groupId } = req.body;
    const newEvent = Event.build({
        name,
        description,
        date,
        capacity,
        hostUserId,
        locationId,
        groupId
    })
    await newEvent.save();
    res.json({ newEvent, message: 'New event was created' })
}))
//TESTING
// window.fetch('/api/events/', {
//     method: 'POST',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `5ZrQDv6o-lM7vIDed5DuJG9D4SIDUPW8a5ik`
//       },
//     body: JSON.stringify({
//         name: 'test',
//         description: 'this is a test',
//         date: '2022-09-07',
//         capacity: '25',
//         hostUserId: '1',
//         locationId: '1',
//         groupId: '1'
//     })
//   }).then(res => res.json()).then(data => console.log(data));

// EDIT EVENT /api/events/:eventId
router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    const { name, description, date, capacity, locationId } = req.body;
    const eventId = parseInt(req.params.id, 10);
    const event = await Event.findByPk(eventId);
    event.set({ name, description, date, capacity, locationId });
    await event.save();
    return res.json(event)
}))
//TESTING EDIT
// window.fetch('/api/events/5', {
//     method: 'PUT',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `5ZrQDv6o-lM7vIDed5DuJG9D4SIDUPW8a5ik`
//     },
//     body: JSON.stringify({
//         name: 'testing',
//         description: 'this is a test',
//         date: '2022-09-07',
//         capacity: '25',
//     })
// }).then(res => res.json()).then(data => console.log(data));

//DELETE EVENT /api/events/:eventId
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const eventId = parseInt(req.params.id, 10);
    const event = await Event.findByPk(eventId);
    await event.destroy();
    return res.json({ message: 'Event was successfully deleted' })
}))
//TESTING DELETE
// window.fetch('/api/events/5', {
//     method: 'DELETE',
//     headers: {
//         "Content-Type": "application/json",
//         "XSRF-TOKEN": `5ZrQDv6o-lM7vIDed5DuJG9D4SIDUPW8a5ik`
//     }
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router;