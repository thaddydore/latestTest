import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import './table.scss'

const EmployeeTable = ({ tableId, tableRow, showEditModal, setEditEmployee, }) => {
  const [employees, setEmployees] = useState([]);
  let url = '/employee_api/employee';
  const getData = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',

      })
      if (response.statusText == 'OK') {
        let data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  const archiveEmployee = async (employeeData) => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeData }),
      })
      if (response.statusText == 'OK') {
        let data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  })

  return (
    <Table hover responsive className='biosec__management__sytsem--table' borderless id={tableId}>
      <thead className='hb-admin-table-h'>
        <tr>
          <th>Full Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Company</th>
          <th>Archive Employee</th>
        </tr>
      </thead>
      <tbody >
        {employees && employees.length === 0 &&
          <p className='mt-3'>No employee added yet</p>}
        {employees.map((employee) =>
          <tr >
            <td onClick={() => { setEditEmployee(employee); showEditModal(employee) }}>{employee.fullname}</td>
            <td onClick={() => { setEditEmployee(employee); showEditModal(employee) }}>{employee.email}</td>
            <td onClick={() => { setEditEmployee(employee); showEditModal(employee) }}>{employee.phone}</td>
            <td onClick={() => { setEditEmployee(employee); showEditModal(employee) }}>{employee.position}</td>
            <td><button onClick={() => { archiveEmployee(employee) }}>archive</button></td>
          </tr>
        )}

        {tableRow}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;
