// src/SketchfabViewer.tsx
import React, { useEffect } from 'react';

interface SketchfabViewerProps {
  modelUrl: string;
}

const SketchfabViewer: React.FC<SketchfabViewerProps> = ({ modelUrl }) => {
  useEffect(() => {
    const client = new (window as any).Sketchfab('1.7.1', document.getElementById('sketchfab-viewer'));

    client.init(modelUrl, {
      success: function onSuccess(api: any) {
        api.start();
        api.addEventListener('viewerready', function() {
          console.log('Viewer is ready');
        });
      },
      error: function onError() {
        console.error('Viewer error');
      },
    });
  }, [modelUrl]);

  return <div id="sketchfab-viewer" style={{ width: '100%', height: '500px' }} />;
};

export default SketchfabViewer;
