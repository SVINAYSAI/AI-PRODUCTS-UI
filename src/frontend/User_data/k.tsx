
// src/App.tsx
// import React from 'react';
// import SketchfabViewer from './q';

// const App: React.FC = () => {
//   const modelUrl = 'https://sketchfab.com/3d-models/friday-night-funkin-mods-97d810763335447caf657f6ec569a8ac';

//   return (
//     <div className="App">
//       <SketchfabViewer modelUrl={modelUrl} />
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useRef } from 'react';
import "../CSS/Fab.css";

const SketchfabViewer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const uid = 'f5200e2c564a4ebab12c7e0f606a1303';

  useEffect(() => {
    if (!iframeRef.current) return;

    const client = new (window as any).Sketchfab(iframeRef.current);

    client.init(uid, {
      success: (api: any) => {
        api.start();
        api.addEventListener('viewerready', () => {
          console.log('Viewer is ready');
          // Insert your code here
        });
      },
      error: () => {
        console.log('Viewer error');
      },
    });
  }, [uid]);

  return (
    <div>
      <iframe
        src=""
        id="api-frame"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true"
        web-share="true"
        allowFullScreen={true}
        ref={iframeRef}
      ></iframe>
    </div>
  );
};

export default SketchfabViewer;

