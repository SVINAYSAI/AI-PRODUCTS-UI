import React, { useState, useEffect } from 'react';

const SketchfabSearch: React.FC = () => {
  const [data, setData] = useState<{ next: string; thumbnail_images: { url: string }[] } | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/get_sketchfab_data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Sketchfab Data</h1>
      {data ? (
        <div>
          <p className="mb-2">Next URL: {data.next}</p>
          <ul>
            {data.thumbnail_images.map((image, index) => (
              <li key={index} className="mb-1">
                <div className="grid grid-cols-4 gap-4">
                  {image ? (
                    <a href={image.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      <img src={image.url} alt={`Thumbnail ${index}`} />
                    </a>
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SketchfabSearch;
