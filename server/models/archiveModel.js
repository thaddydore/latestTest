const mongoose = require('mongoose');

const archiveSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    position: { type: String, required: true },
    employmentDate: { type: Date, required: true },

});

const archiveModel = mongoose.model('Archive', archiveSchema);

module.exports = archiveModel;