const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const mongodbUrl = config.MONGODB_URL;
const employeeRoute = require('./routes/employeeRoutes');
const logRoute = require('./routes/logsRoutes');
const app = express();

mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(() => { console.log('connected to db') })
    .catch((error) => console.log({ error }));

app.use(bodyParser.json());
app.use('/employee_api', employeeRoute);
app.use('/log_api', logRoute);
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});


app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`);
})