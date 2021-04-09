const express = require('express');
const Log = require('../models/activityLogModel');
const router = express.Router();

router.get('/log', async (req, res) => {
    try {
        let logs = await Log.find({});
        return res.status(200).json(logs);
    } catch (error) {
        return res.status(400).send('server error please try again')
    }
})

module.exports = router;

