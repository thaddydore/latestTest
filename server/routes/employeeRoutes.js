const express = require('express');
const Log = require('../models/activityLogModel');
const Employee = require('../models/employeeModel');
const Archive = require('../models/archiveModel');
const router = express.Router();

router.get('/employee', async (req, res) => {
    try {
        let employees = await Employee.find({});
        return res.status(200).json(employees);
    } catch (error) {
        return res.status(400).send('server error please try again')
    }
})

router.post('/employee', async (req, res) => {
    try {

        const { fullname, email, phone, position, employmentDate } = req.body

        if (!fullname || !email || !phone || !position)
            return res.status(400).send('Missing Credentials');

        let alreadyRegistered = await Employee.findOne({ email });
        if (alreadyRegistered)
            return res.status(401).send('Employee exists already')

        await Employee.create({
            fullname,
            email,
            phone,
            position,
            employmentDate,
        })

        await Log.create({
            activity:'Created Employee',
            by:'Admin',
            date:Date.now(),
        });

        return res.status(200).send('Employee created successfully')

    } catch (error) {
        console.log(error)
        return res.status(400).send('Server error please try again')
    }
})


router.put('/employee', async (req, res) => {
    try {
        const { employeeData } = req.body
        console.log({ employeeData });
        console.log({ body: req.body });
        employee = await Employee.findOne({ email: employeeData.email });
        employee.fullname = employeeData.fullname;
        employee.phone = employeeData.phone;
        await employee.save()
        console.log({ employee })

        await Log.create({
            activity:'Updated Employee',
            by:'Admin',
            date:Date.now(),
        });
        return res.status(200).send('updated successfully');
    } catch (error) {
        console.log(error)
    }
});

router.delete('/employee', async (req, res) => {
    try {
        const { employeeData } = req.body;


        await Employee.deleteOne({ email: employeeData.email });

        await Archive.create({ ...employeeData })

        await Log.create({
            activity:'Archived Employee',
            by:'Admin',
            date:Date.now(),
        });

            let employees = await Employee.find({});



        return res.status(200).json(employees);

    } catch (error) {
        console.log(error)
    }
});
module.exports = router;