import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function ModelViewer() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Model />
    </Canvas>
  );
}

function Model() {
  // Load the GLB model and extract nodes and materials.
  const { nodes, materials } = useLoader(GLTFLoader, './vr_headsets.glb');

  // Replace 'YourModelName' and 'YourMaterialName' with the actual names in your GLB file.
  // These should match the names of objects and materials in your GLB model.
  const modelObject = nodes.YourModelName; // Replace with the correct name
  const modelMaterial = materials.YourMaterialName; // Replace with the correct name

  return (
    <group>
      {/* Use the actual names for the object and material */}
      <primitive object={modelObject} material={modelMaterial} />
    </group>
  );
}

function App1() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ModelViewer />
    </div>
  );
}

export default App1;
