import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ScanModal = ({ showModal, closeModal }) => {

    const handleDialogClick = () => {
        // Close the modal regardless of where the click occurs in the overlay
        closeModal();
      };
    
      const handleContentClick = (event) => {
        // Prevent the click event from propagating to the overlay
        event.stopPropagation();
      };

  return (
    <div className={`modal-overlay ${showModal ? 'modal-open' : ''}`} onClick={handleDialogClick}>
    <dialog open={showModal} className="modal">
      <div id="scancard" onClick={handleContentClick}>
        <h1 id="text1">SCAN </h1>
        <h3 id="text2">the tag in book below to get it's information.</h3>
        <FontAwesomeIcon icon={faArrowDown} style={{ color: '#4D90FE', fontSize: '40px' }} />
        {/* Simulated button for scanning RFID card */}

        {/* Add content specific to returning book modal */}
        <button className="btn" onClick={closeModal}>Close</button>
      </div>
    </dialog>
  </div>
  );
};

export default ScanModal;
