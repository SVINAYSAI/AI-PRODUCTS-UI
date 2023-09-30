// src/App.tsx
import React from 'react';
import SketchfabViewer from './SketchfabViewer';
// import "../../Components/CSS/style.css"

const App: React.FC = () => {
  const modelUid = '7w7pAfrCfjovwykkEeRFLGw5SXS';

  return (
    <div className="App">
      <SketchfabViewer modelUid={modelUid} />
    </div>
  );
};

export default App;
