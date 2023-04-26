// import {InfoIcon, ExclamationIcon, FailIcon} from '../assets/svgs';
import React from 'react';

export const MessageModal = (props) => {
  const { setShow, closeModal, id, modalProps} = props;

  return (
    <div className="modal overlay notification-modal-container" id={id}>
      <div className="modal-dialog d-flex" style={{ top: '30vh' }}>
        <div className="modal-content shadow p-3 mb-5 bg-white rounded border-0">
          <div className="modal-header" key={'header1'}>
            <div className="d-flex align-items-end" style={{ gap: '5px' }}>
              {/* <h5 className="modal-title" style={{color: (modalProps?.messageType === 'INFO' && 'rgb(1, 151, 246)') || (modalProps?.messageType === 'ERROR' && 'rgb(213, 10, 25)') ||( modalProps?.messageType === 'WARN' && 'rgb(255, 133, 51)')}}>
                {modalProps?.messageType}
              </h5> */}
              <h5 className="modal-title">
                {modalProps?.messageType}
              </h5>
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={(evt) => {
                closeModal(id, setShow);
              }}></button>
          </div>
          <div
            className="modal-body "
            style={{ overflow: 'auto', paddingTop: '0.5rem' }}
            key={'modalBody1'}>
            {/* <div className='d-flex justify-content-center mt-3'>
            {modalProps?.messageType === 'ERROR' && <FailIcon/> }
            {modalProps?.messageType === 'INFO' && <InfoIcon/> } 
            {modalProps?.messageType === 'WARN' && <ExclamationIcon/> }
            </div> */}
            <div className='d-flex justify-content-center mt-4'>{`${modalProps?.message}`}</div>
          </div>          
        </div>
      </div>
    </div>

  );
};

export default MessageModal;
