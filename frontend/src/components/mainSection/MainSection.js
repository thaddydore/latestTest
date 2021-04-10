import React, { useState } from 'react';

import './mainSection.scss'
import Table from '../table/Table';
import CreateButton from '../createBtn/CreateButton';
import CreateEmployee from '../createEmployee/CreateEmployee';
import UpdateEmployee from '../updateEmployee/UpdateEmployee';

const MainSection = () => {

  const [showCreateEmplyeeModal, setShowCreateEmployeeModal] = useState(false);
  const [showEditEmplyeeModal, setShowEditEmployeeModal] = useState(false);
  const [editEmployee, setEditEmployee]=useState({});

  const showCreateModal = () => {
    setShowCreateEmployeeModal(true);
  }

  const showEditModal = () => {
    setShowEditEmployeeModal(true);
  }

  const closeCreateModal = () => {
    setShowCreateEmployeeModal(false);
  }

  const closeEditeModal = () => {
    setShowEditEmployeeModal(false);
  }

  return (
    <div className='biosec__management__sytsem__section'>
      <h2 className='biosec__management__sytsem__section--heading'>Employed Staff</h2>
      <Table showEditModal={showEditModal} setEditEmployee={setEditEmployee}/>
      <CreateEmployee
        show={showCreateEmplyeeModal}
        handleClose={closeCreateModal}
      />
      <CreateButton showCreateModal={showCreateModal} />
      <UpdateEmployee
        show={showEditEmplyeeModal}
        handleClose={closeEditeModal}
        employee={editEmployee}
      />
    </div>
  );
};

export default MainSection
