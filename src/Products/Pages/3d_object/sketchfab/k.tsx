// import React, { useState } from 'react';
// import Modal from 'react-modal';

// interface ModelViewerModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
//   modelUid: string;
//   modelDescription: string | null;
//   modelName: string | null;
//   modelSource: string | null;
//   glbSize: string; // Change type to string
//   gltfSize: string; // Change type to string
//   sourceSize: string; // Change type to string
//   usdzSize: string;
//   glbUrl: string | null;
//   gltfUrl: string | null;
//   sourceUrl: string | null;
//   usdzUrl: string | null;
// }
// type FormatDetails = {
//   [key: string]: {
//     size: string;
//     url: string | null;
//   }
// };


// const ModelViewerModal: React.FC<ModelViewerModalProps> = ({
//   isOpen,
//   onRequestClose,
//   modelUid,
//   modelDescription,
//   modelName,
//   glbSize,
//   gltfSize,
//   sourceSize,
//   usdzSize,
//   glbUrl,
//   gltfUrl,
//   sourceUrl,
//   usdzUrl,
// }) => {
//   const [selectedFormat, setSelectedFormat] = useState<string>('glb');

//   // Use the nullish coalescing operator (??) to provide a default empty string
//   const descriptionToShow = modelDescription ?? '';
//   const nameToShow = modelName ?? '';

//   const formatDetails: FormatDetails = {
//     glb: { size: glbSize, url: glbUrl },
//     gltf: { size: gltfSize, url: gltfUrl },
//     source: { size: sourceSize, url: sourceUrl },
//     usdz: { size: usdzSize, url: usdzUrl }
//   };
  

//   const formatOptions = ['glb', 'gltf', 'source', 'usdz'];

//   const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedFormat(e.target.value);
//   };

//   const getSizeString = (size: number | null) => {
//     if (size === null) return 'N/A';
//     if (size < 1024) return `${size} KB`;
//     if (size < 1048576) return `${(size / 1024).toFixed(2)} MB`;
//     return `${(size / 1048576).toFixed(2)} GB`;
//   };



//   console.log('glbSize:', glbSize);
//   console.log('gltfSize:', gltfSize);
//   console.log('sourceSize:', sourceSize);
//   console.log('usdzSize:', usdzSize);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Model Viewer"
//       // className="overflow-y-auto"
//       style={{
//         overlay: {
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           overflow: 'auto'
//         },
//         content: {
//           position: 'relative',
//           width: '100%',
//           maxWidth: '800px',
//           padding: '20px',
//           paddingTop: '4%',
//         },
//       }}
//     >
//       <div className="close-button">
//         <button onClick={onRequestClose}>Close</button>
//       </div>
//       <iframe
//         title="Sketchfab Model Viewer"
//         width="100%"
//         height="500px"
//         src={`https://sketchfab.com/models/${modelUid}/embed`}
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>

//       <div className="model-name">
//         <h3>Name</h3>
//         <p>{nameToShow}</p>
//       </div>

//       <div className="format-selector">
//         <label htmlFor="formatDropdown">Select Format:</label>
//         <select
//           id="formatDropdown"
//           onChange={handleFormatChange}
//           value={selectedFormat}
//         >
//           {formatOptions.map((format) => (
//             <option key={format} value={format}>
//               {format}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Display the model description */}
//       <div className="model-description">
//         <h3>Description</h3>
//         <p>{descriptionToShow}</p>
//       </div>

//       <div className="format-size">
//         {/* <p>
//           {selectedFormat} Size: {getSizeString(
//             selectedFormat === 'glb'
//               ? parseFloat(glbSize) // Parse to float here
//               : selectedFormat === 'gltf'
//                 ? parseFloat(gltfSize) // Parse to float here
//                 : selectedFormat === 'source'
//                   ? parseFloat(sourceSize) // Parse to float here
//                   : parseFloat(usdzSize) // Parse to float here
//           )}
//         </p> */}
//         <p>
//           {selectedFormat.toUpperCase()} Size: {getSizeString(formatDetails[selectedFormat].size)}
//         </p>
//         <button onClick={() => window.open(formatDetails[selectedFormat].url, '_blank')}>
//             Download {selectedFormat.toUpperCase()}
//         </button>
//       </div>

//       <style>
//         {`
//           .close-button {
//             position: absolute;
//             top: 1rem;
//             right: 1rem;
//           }

//           .format-selector {
//             margin-top: 20px;
//           }

//           .model-description {
//             margin-top: 20px;
//           }

//           .format-size {
//             margin-top: 10px;
//           }
//         `}
//       </style>
//     </Modal>
//   );
// };

// export default ModelViewerModal;


import React, { useState } from 'react';
import Modal from 'react-modal';

interface FormatData {
  size: string;
  url: string | null;
}

type FormatName = 'glb' | 'gltf' | 'source' | 'usdz';

interface ModelViewerModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modelUid: string;
  modelDescription: string | null;
  modelName: string | null;
  formatDetails: Record<FormatName, FormatData>;
}

const ModelViewerModal: React.FC<ModelViewerModalProps> = ({
  isOpen,
  onRequestClose,
  modelUid,
  modelDescription,
  modelName,
  formatDetails,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<FormatName>('glb');

  // Use the nullish coalescing operator (??) to provide a default empty string
  const descriptionToShow = modelDescription ?? '';
  const nameToShow = modelName ?? '';

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFormat(e.target.value as FormatName); // Casting the value to FormatName type
  };

  const getSizeString = (size: string): string => {
    const parsedSize = parseFloat(size);
    if (parsedSize < 1024) return `${parsedSize} KB`;
    if (parsedSize < 1048576) return `${(parsedSize / 1024).toFixed(2)} MB`;
    return `${(parsedSize / 1048576).toFixed(2)} GB`;
  };

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
          overflow: 'auto',
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

      <div className="model-name">
        <h3>Name</h3>
        <p>{nameToShow}</p>
      </div>

      <div className="format-selector">
        <label htmlFor="formatDropdown">Select Format:</label>
        <select
          id="formatDropdown"
          onChange={handleFormatChange}
          value={selectedFormat}
        >
          {(['glb', 'gltf', 'source', 'usdz'] as FormatName[]).map(format => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
      </div>

      <div className="model-description">
        <h3>Description</h3>
        <p>{descriptionToShow}</p>
      </div>

      <div className="format-size">
        <p>
          {selectedFormat.toUpperCase()} Size: {getSizeString(formatDetails[selectedFormat].size)}
        </p>
        <button onClick={() => window.open(formatDetails[selectedFormat].url ?? '', '_blank')}>
          Download {selectedFormat.toUpperCase()}
        </button>
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

