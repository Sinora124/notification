// import {InfoIcon, ExclamationIcon, FailIcon} from '../assets/svgs';
import React from 'react';
export const MessageModal = props => {
  const {
    setShow,
    closeModal,
    id,
    modalProps
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal overlay notification-modal-container",
    id: id
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog d-flex",
    style: {
      top: '30vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content shadow p-3 mb-5 bg-white rounded border-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header",
    key: 'header1'
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex align-items-end",
    style: {
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title"
  }, modalProps?.messageType)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "aria-label": "Close",
    onClick: evt => {
      closeModal(id, setShow);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body ",
    style: {
      overflow: 'auto',
      paddingTop: '0.5rem'
    },
    key: 'modalBody1'
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-center mt-4"
  }, `${modalProps?.message}`)))));
};
export default MessageModal;