
// src/App.tsx
import React from 'react';
import SketchfabViewer from './q';

const App: React.FC = () => {
  const modelUrl = 'https://sketchfab.com/3d-models/friday-night-funkin-mods-97d810763335447caf657f6ec569a8ac';

  return (
    <div className="App">
      <SketchfabViewer modelUrl={modelUrl} />
    </div>
  );
};

export default App;
