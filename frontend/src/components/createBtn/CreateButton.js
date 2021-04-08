import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import './createButton.scss';

const CreateButton = ({ showCreateModal }) => {
  return (
    <div className='biosec__management__sytsem__create__button'>
      <button className='biosec__management__sytsem__create__button--icon-container' onClick={showCreateModal}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default CreateButton;
