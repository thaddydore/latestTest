import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import './table.scss'

const ActivityTable = ({ tableId, tableRow }) => {
  const [activities, setActiviies] = useState([]);
  let url = '/log_api/log';
  const getActivity = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      })
      if (response.statusText == 'OK') {
        let data = await response.json();
        setActiviies(data);
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getActivity();
  })
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
        {activities && activities.length === 0 &&
          <p className='mt-3'>No activity carried out yet</p>}
        {activities && activities.map((activity) =>
          <tr >
            <td>{activity.activity}</td>
            <td>{activity.by}</td>
            <td>{activity.date}</td>
          </tr>
        )}
        {tableRow}
      </tbody>
    </Table>
  );
};

export default ActivityTable;
