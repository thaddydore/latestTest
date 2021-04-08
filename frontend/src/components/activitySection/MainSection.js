import React from 'react';

import './mainSection.scss'
import Table from './table/Table';


const MainSection = () => {

  return (
    <div className='biosec__management__sytsem__section'>
      <h2 className='biosec__management__sytsem__section--heading'>Activity Logs</h2>
      <Table />
    </div>
  );
};

export default MainSection
