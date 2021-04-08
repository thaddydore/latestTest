import React from 'react';
import { Table } from 'react-bootstrap';

import './table.scss'

const HealthCareTable = ({ tableId, tableRow, showEditModal }) => {

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

        <tr onClick={() => showEditModal('pass in edit id here')}>
          <td>Annette Black</td>
          <td>Tosin@gmail.com</td>
          <td>08012345678</td>
          <td>Sterling</td>
          <td><button>archive</button></td>
        </tr>

        <tr onClick={() => showEditModal('pass in edit id here')}>
          <td>Annette Black</td>
          <td>Tosin@gmail.com</td>
          <td>08012345678</td>
          <td>Sterling</td>
          <td><button>archive</button></td>
        </tr>

        <tr onClick={() => showEditModal('pass in edit id here')}>
          <td>Annette Black</td>
          <td>Tosin@gmail.com</td>
          <td>08012345678</td>
          <td>Sterling</td>
          <td><button>archive</button></td>
        </tr>

        <tr onClick={() => showEditModal('pass in edit id here')}>
          <td>Annette Black</td>
          <td>Tosin@gmail.com</td>
          <td>08012345678</td>
          <td>Sterling</td>
          <td><button>archive</button></td>
        </tr>

        <tr onClick={() => showEditModal('pass in edit id here')}>
          <td>Annette Black</td>
          <td>Tosin@gmail.com</td>
          <td>08012345678</td>
          <td>Sterling</td>
          <td className='btn'><button>archive</button></td>
        </tr>
        {tableRow}
      </tbody>
    </Table>
  );
};

export default HealthCareTable;
