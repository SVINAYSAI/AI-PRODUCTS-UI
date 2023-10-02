import React from 'react';
import Modal from 'react-modal';

interface ModelViewerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modelUid: string;
}

const ModelViewerModal: React.FC<ModelViewerModalProps> = ({
  isOpen,
  onRequestClose,
  modelUid,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Model Viewer"
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          padding: '20px',
          paddingTop: '4%',
        },
      }}
    >
      <div className="close-button">
        <button onClick={onRequestClose}>Close</button>
      </div>
      <iframe
        title="Sketchfab Model Viewer"
        width="100%"
        height="500px"
        src={`https://sketchfab.com/models/${modelUid}/embed`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <style>
        {`
          .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }
        `}
      </style>
    </Modal>
  );
};

export default ModelViewerModal;
