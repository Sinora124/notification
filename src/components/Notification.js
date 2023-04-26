import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MessageModal from './MessageModal';
import { Modal as BootstrapModal } from 'bootstrap';

const Notification = (props) => {
  const {group} = props

const [pullMessages, setPullMessages] = useState([])
const [modalShow, setModalShow] = useState(false);
const [warningModalProps, setWarningModalProps] = useState({});
const [currentIndex, setCurrentIndex] = useState(0);

const closeModal = (modalName, setShow) => {
  setModalShow(setShow);
  const element = document.getElementById(`${modalName}`);
  if (element) {
    var modal = BootstrapModal.getOrCreateInstance(element);
    modal.hide();
  }
  setTimeout(() => {
    if(currentIndex < pullMessages.length-1){
      setWarningModalProps(pullMessages[currentIndex+1])
      showModal('MessageModal', true, currentIndex+1)
    }
    setCurrentIndex(currentIndex+1) 
   }, 500);
};

const showModal = (props, setShow, index) => {
  setCurrentIndex(0)
  setModalShow(setShow);
  const element = document.getElementById(`${props}`);
  const duplicateModal = new BootstrapModal(element, { backdrop: false });
  duplicateModal.show();
};

useEffect(() => {
if(group){ 
  axios.get(`https://enzanotificationsapp.azurewebsites.net/api/pullmessage?targetGroup=${group}`)
.then(res => {
  setPullMessages(res.data)
  setWarningModalProps(res.data[0])
  return res.data
})
setCurrentIndex(0)
showModal('MessageModal', true, 0)
}
}, [group]);

  return (
    <div className="img-card">
      <div className="card-body">
        <MessageModal
          modalProps={warningModalProps}
          show={modalShow}
          setShow={setModalShow}
          closeModal={closeModal}
          id="MessageModal"
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
};

export default Notification;