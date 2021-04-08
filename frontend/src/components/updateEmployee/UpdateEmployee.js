import React from 'react';
import { Modal } from 'react-bootstrap';

import './updateEmployee.scss'

const UpdateEmployee = ({
  show,
  handleClose,
  roles,
  send,
  createAdmin,
  handleChange,
}) => {


  // get all administrator roles and id as option value and name
  const filterOptions = roles && roles.map(role => (
    <option value={role.id}>{role.name}</option>
  ));


  return (

    <> <Modal
      show={show}
      onHide={handleClose}
      onHide={handleClose}
      closeButton
      dialogClassName="modal-sz"
      className='biosec__management__sytsem__update__employee__modal p-4'
    >
      <Modal.Body
        className='d-flex flex-column'
      >

        <h1 className='biosec__management__sytsem__create__employee__modal--title'>Update Employee</h1>
        <form className='p-0' onSubmit={createAdmin} id='create-employee'>
          <div className='d-flex flex-column'>
            <label className='add-labels'>Full Name</label>
            <input
              type='text'
              name='firstName'
              value={''}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex flex-column'>
            <label className='add-labels'>Date of Employment</label>
            <input
              type='date'
              name='lastName'
              value={''}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex flex-column'>
            <label className='add-labels'>Phone Number</label>
            <input
              type='tel'
              name='userName'
              value={''}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex flex-column'>
            <label className='add-labels'>Email</label>
            <input
              type='email'
              name='email'
              value={''}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>
          <div className='d-flex flex-column'>
            <label className='add-labels'>Assign role</label>
            <select className='add-inputs p-1' onChange={handleChange} name='roleId' value={''}>
              <option value=''></option>
              {filterOptions}
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='add-footer'>
        <button className='btn-cancel' onClick={handleClose}>cancel</button>
        <button className='btn-send' form='create-employee'>
          {send ? 'Creating...' : 'Create'}
        </button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default UpdateEmployee;
