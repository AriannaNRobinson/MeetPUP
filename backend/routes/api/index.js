const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const rsvpsRouter = require('./rsvps');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/rsvps', rsvpsRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports = router;
