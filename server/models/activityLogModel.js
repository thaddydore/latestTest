const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activity: { type: String, required: true },
    by: { type: String, required: true },
    date: { type: Date, required: true },

});

const activityModel = mongoose.model('Activities', activitySchema);

module.exports = activityModel;