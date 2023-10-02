import React, { useState } from 'react';
import Modal from 'react-modal';

interface ModelViewerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modelUid: string;
  modelDescription: string | null;
  glbSize: string; // Change type to string
  gltfSize: string; // Change type to string
  sourceSize: string; // Change type to string
  usdzSize: string;
}

const ModelViewerModal: React.FC<ModelViewerModalProps> = ({
  isOpen,
  onRequestClose,
  modelUid,
  modelDescription,
  glbSize,
  gltfSize,
  sourceSize,
  usdzSize,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('glb');

  // Use the nullish coalescing operator (??) to provide a default empty string
  const descriptionToShow = modelDescription ?? '';

  const formatOptions = ['glb', 'gltf', 'source', 'usdz'];

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormat(e.target.value);
  };

  const getSizeString = (size: number | null) => {
    if (size === null) return 'N/A';
    if (size < 1024) return `${size} KB`;
    if (size < 1048576) return `${(size / 1024).toFixed(2)} MB`;
    return `${(size / 1048576).toFixed(2)} GB`;
  };
  
  

  console.log('glbSize:', glbSize);
  console.log('gltfSize:', gltfSize);
  console.log('sourceSize:', sourceSize);
  console.log('usdzSize:', usdzSize);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Model Viewer"
      // className="overflow-y-auto"
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

      <div className="format-selector">
        <label htmlFor="formatDropdown">Select Format:</label>
        <select
          id="formatDropdown"
          onChange={handleFormatChange}
          value={selectedFormat}
        >
          {formatOptions.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
      </div>

      {/* Display the model description */}
      <div className="model-description">
        <h3>Description</h3>
        <p>{descriptionToShow}</p>
      </div>

      <div className="format-size">
        <p>
          {selectedFormat} Size: {getSizeString(
          selectedFormat === 'glb'
            ? parseFloat(glbSize) // Parse to float here
            : selectedFormat === 'gltf'
            ? parseFloat(gltfSize) // Parse to float here
            : selectedFormat === 'source'
            ? parseFloat(sourceSize) // Parse to float here
            : parseFloat(usdzSize) // Parse to float here
        )}
        </p>
      </div>

      <style>
        {`
          .close-button {
            position: absolute;
            top: 1rem;
            right: 1rem;
          }

          .format-selector {
            margin-top: 20px;
          }

          .model-description {
            margin-top: 20px;
          }

          .format-size {
            margin-top: 10px;
          }
        `}
      </style>
    </Modal>
  );
};

export default ModelViewerModal;
