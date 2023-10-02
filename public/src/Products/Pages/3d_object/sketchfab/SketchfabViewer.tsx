// src/SketchfabViewer.tsx
import React, { useEffect, useRef } from 'react';

interface SketchfabViewerProps {
  modelUid: string;
}

const SketchfabViewer: React.FC<SketchfabViewerProps> = ({ modelUid }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!iframeRef.current) return;

    // By default, the latest version of the viewer API will be used.
    const client = new (window as any).Sketchfab(iframeRef.current);

    client.init(modelUid, {
      success: function onSuccess(api: any) {
        api.start();
        api.addEventListener('viewerready', function () {
          console.log('Viewer is ready');
        });
      },
      error: function onError() {
        console.log('Viewer error');
      },
    });
  }, [modelUid]);

  useEffect(() => {
    // Get the element
    let watermarkElement = document.querySelector('.viewer .watermark a') as HTMLElement;

    // Check if the element exists before attempting to modify its styles
    if (watermarkElement) {
        // Reset the styles
        watermarkElement.style.display = '';
        watermarkElement.style.width = '';
        watermarkElement.style.height = '';
        watermarkElement.style.background = '';
        watermarkElement.style.outline = '';
    } else {
        console.error('Element not found');
    }
  }, []);  // Empty dependency array means this useEffect runs once, similar to componentDidMount


  return (
    <iframe
      src=""
      ref={iframeRef}
      id="api-frame"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      xr-spatial-tracking=""
      execution-while-out-of-viewport=""
      execution-while-not-rendered=""
      web-share=""
      allowFullScreen
      // mozallowfullscreen="true"
      // webkitallowfullscreen="true"
    />
  );
};

export default SketchfabViewer;
