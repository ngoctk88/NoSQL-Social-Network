const router = require('express').Router();
const userRoute = require('./userRoute');

router.use('/user', userRoute);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;