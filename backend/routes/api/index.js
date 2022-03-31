const router = require('express').Router();

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

//tested post route with fetch in console:
// fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `zivgRCWW-S8vJ3FurB9NNjhaPZz8uR1By07Q`
//     },
//     body: JSON.stringify({ hello: 'world' })
//   }).then(res => res.json()).then(data => console.log(data));



module.exports = router;
