import React, { useEffect, useState } from 'react';
import loadImagePaths from './loadImages';
import loadVideoPaths from './loadVideos';

interface BackgroundProps {
    onMediaSelected: (path: string) => void;
}

export default function Backgroung({ onMediaSelected }: BackgroundProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [imagePaths, setImagePaths] = useState<string[]>([]);
    const [videoPaths, setVideoPaths] = useState<string[]>([]);
    const [clickedPath, setClickedPath] = useState<string | null>(null);
    const BASE_DIR = "C:\\Users\\mahesh\\Desktop\\AI-PRODUCTS-UI\\AI-PRODUCTS-UI\\src\\Components\\assets\\background video\\images\\";

    useEffect(() => {
        const imgs = loadImagePaths();
        const vids = loadVideoPaths();
        setImagePaths(imgs);
        setVideoPaths(vids);
    }, []);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    // const handleMediaClick = (path: string) => {
    //     setClickedPath(path);
    // };
    const handleMediaClick = (path: string) => {
        // Remove "/static/media/" from the path if it exists
        const cleanPath = path.replace(/\/static\/media\//, '');

        // Extract the filename without the hash and also the extension using regex
        const regexPattern = /([^\/]+?)(?:\.[0-9a-f]{8,})?(\.\w+)$/;
        const matches = cleanPath.match(regexPattern);

        let fileNameWithExtension = '';
        if (matches && matches[1] && matches[2]) {
            fileNameWithExtension = matches[1] + matches[2];
        }

        const fullPath = `${BASE_DIR}${fileNameWithExtension}`;
        setClickedPath(fullPath);
        onMediaSelected(fullPath);
    };

    return (
        <>

            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">choose your video background: </h3>
            <ul className="grid w-full gap-6 md:grid-cols-2">
                <li>
                    <input type="radio"
                        id="hosting-small"
                        name="hosting"
                        value="hosting-small"
                        className="hidden peer"
                        onChange={handleOptionChange}
                        required />
                    <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            {/* <div className="w-full text-lg font-semibold">0-50 MB</div> */}
                            <div className="w-full">background with images</div>
                        </div>
                        <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio"
                        id="hosting-big"
                        name="hosting"
                        value="hosting-big"
                        className="hidden peer"
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            {/* <div className="w-full text-lg font-semibold">500-1000 MB</div> */}
                            <div className="w-full">background with video</div>
                        </div>
                        <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
            </ul>
            {selectedOption === 'hosting-small' && (
                <div className="images grid grid-cols-4 gap-3">
                    {imagePaths.map((path, index) => (
                        <img
                            key={index}
                            src={path}
                            alt={`Image ${index + 1}`}
                            className="w-full mb-3 cursor-pointer"
                            onClick={() => handleMediaClick(path)}
                        />
                    ))}
                </div>
            )}

            {selectedOption === 'hosting-big' && (
                <div className="videos grid grid-cols-4 gap-3">
                    {videoPaths.map((path, index) => (
                        <video
                            key={index}
                            src={path}
                            controls
                            className="w-full mb-3 cursor-pointer"
                            onClick={() => handleMediaClick(path)}
                        ></video>
                    ))}
                </div>
            )}

            {clickedPath && <p className="mt-5">Clicked on: {clickedPath}</p>}

        </>
    )
}