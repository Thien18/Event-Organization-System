const express = require('express');
const {
   getAllUser,
   lockedUser,
   unlockUser,
   upToAdmin,
   neftToUser
   
} = require('../controller/user_controller');

const {verifyToken,

   isAdminSystem,} = require ('../middlewares/verifyToken')
const router = express.Router();

router.get('/api/getAllUser', verifyToken, isAdminSystem, getAllUser );
router.post('/api/lockUser', lockedUser, verifyToken, isAdminSystem);
router.post('/api/unlockUser', unlockUser, verifyToken, isAdminSystem);
router.post('/api/uptoAdmin', upToAdmin, verifyToken, isAdminSystem);
router.post('/api/neftAdmin', neftToUser, verifyToken, isAdminSystem);

module.exports = router;