import React from 'react';
import { Table } from 'react-bootstrap';

import './table.scss'

const HealthCareTable = ({ tableId, tableRow }) => {

  return (
    <Table hover responsive className='biosec__management__sytsem--table' borderless id={tableId}>
      <thead className='hb-admin-table-h'>
        <tr>
          <th>Description</th>
          <th>Carried By Who</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody >

        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>

        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>
        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>
        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>
        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>
        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>
        <tr >
          <td>Update Profile</td>
          <td>John Doe</td>
          <td>20-202021</td>
        </tr>
        {tableRow}
      </tbody>
    </Table>
  );
};

export default HealthCareTable;
