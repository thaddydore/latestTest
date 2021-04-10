import React, { useEffect, useState, useReducer } from 'react';
import { Modal } from 'react-bootstrap';
import { position } from '../../data/positions';

import './updateEmployee.scss'

const UpdateEmployee = ({
  employee,
  show,
  handleClose,
  send,
}) => {

  const filterOptions = position && position.map(position => (
    <option value={position.name}>{position.name}</option>
  ));

  const [error, setError] = useState(false);
  const [employeeData, setEmployeeData] = useReducer((state, nextState) => ({ ...state, ...nextState }),
    employee);

  const updateEmployee = async (e) => {
    let url = '/employee_api/employee';
    try {
      e.preventDefault();
      setError(false);
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({employeeData}),
      })
      if (response.statusText == 'OK') {

        return setEmployeeData({
          fullname: '',
          email: '',
          phone: '',
          position: '',
          employmentDate: '',
        });

      }
      let message = await response.text()
      setError(message)

    } catch (error) {
      console.log(error)
    }
  }


  const handleChange = (e) => {
    const { value, name } = e.target;
    setEmployeeData({ [name]: value });
  }
  useEffect(() => {
    console.log({ employee })
    setEmployeeData(employee);
    console.log({ employeeData })
  }, [employee])
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
        <form className='p-0' onSubmit={updateEmployee} id='create-employee'>
          <div className='d-flex flex-column'>
            {error && <i style={{ color: 'red' }}>{error}</i>}
          </div>
          <div className='d-flex flex-column'>
            <label className='add-labels'>Full Name</label>
            <input
              type='text'
              name='fullname'
              value={employeeData.fullname}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex flex-column'>
            <label className='add-labels'>Date of Employment</label>
            <input
              type='date'
              name='employmentDate'
              value={employeeData.employmentDate}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex flex-column'>
            <label className='add-labels'>Phone Number</label>
            <input
              type='number'
              name='phone'
              value={employeeData.phone}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>

          <div className='d-flex flex-column'>
            <label className='add-labels'>Email</label>
            <input
              disabled
              type='email'
              name='email'
              value={employeeData.email}
              className='add-inputs p-1'
              onChange={handleChange}
            />
          </div>
          <div className='d-flex flex-column'>
            <label className='add-labels'>Assign role</label>
            <select className='add-inputs p-1' onChange={handleChange} name='position' value={employeeData.position}>
              <option value=''></option>
              {filterOptions}
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className='add-footer'>
        <button className='btn-cancel' onClick={handleClose}>cancel</button>
        <button className='btn-send' form='create-employee'>
          {send ? 'Updatinging...' : 'Update'}
        </button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default UpdateEmployee;
