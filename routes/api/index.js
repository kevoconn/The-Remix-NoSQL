const router = require('express').Router();
const courseRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);

module.exports = router;
