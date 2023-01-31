import React, { useState } from "react";

const PinDetail = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <img onClick={() => setIsOpen(true)} src={imageUrl} alt="" />
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <img src={imageUrl} alt="" />
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
      <style jsx>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .modal-content {
            background-color: white;
            padding: 16px;
            border-radius: 4px;
            max-width: 500px;
            max-height: 80%;
            overflow-y: auto;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </>
  );
};

export default PinDetail;
