import React, { useRef } from 'react';

const Test1: React.FC = () => {
  const videoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async () => {
    if (!videoRef.current?.files?.[0]) return;

    const formData = new FormData();
    formData.append('video', videoRef.current.files[0]);

    try {
      const response = await fetch('http://127.0.0.1:8000/video-overlay/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was an error uploading the video:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-4">Video Uploader</h1>
      <input ref={videoRef} type="file" accept="video/*" className="mb-4 border p-2" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        Upload Video
      </button>
    </div>
  );
}

export default Test1;
