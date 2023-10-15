import React, { useState, useRef } from "react";

const MusicEditor: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [trimStart, setTrimStart] = useState<number | string>("");
  const [trimEnd, setTrimEnd] = useState<number | string>("");
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const [trimmedAudioUrl, setTrimmedAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobRef = useRef<Blob | null>(null);

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSongSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedSong(file.name);
      audioBlobRef.current = file; // Store the Blob for audio playback
      // Set the src attribute of the audio element
      if (audioRef.current) {
        audioRef.current.src = URL.createObjectURL(file);
      }
      // Handle song selection logic here
    }
  };

  const handleTrim = () => {
    if (typeof trimStart === "number" && typeof trimEnd === "number") {
      // Validate that trimStart and trimEnd are numbers
      if (audioBlobRef.current) {
        const audioBlob = audioBlobRef.current.slice(
          trimStart * 1000, // Convert seconds to milliseconds
          trimEnd * 1000
        );

        const trimmedAudioUrl = URL.createObjectURL(audioBlob);
        setTrimmedAudioUrl(trimmedAudioUrl);
      }
    }
  };

  const handleTimelineClick = (e: React.MouseEvent) => {
    const timeline = document.getElementById("timeline");
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const timelineWidth = rect.width;
      const position = (offsetX / timelineWidth) * 100;
      setCursorPosition(position);
    }
  };

  return (
    <div className="pt-[6%] pl-[23%] pr-[5%]">
      <h1 className="text-2xl font-bold mb-4">Music Generation</h1>

      <input
        type="text"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={handlePromptChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          type="file"
          accept="audio/*"
          onChange={handleSongSelection}
          className="mb-4"
        />

        <div className="">
          <audio ref={audioRef} controls />
        </div>
      </div>

      {selectedSong && (
        <div className="border p-4 rounded bg-gray-100">
          <p className="mb-4">Selected Song: {selectedSong}</p>

          <div className="grid grid-cols-3 gap-4">
            <div className="">
              <input
                type="number" // Change the input type to number
                placeholder="Start (seconds)"
                value={trimStart}
                onChange={(e) => setTrimStart(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="">
              <input
                type="number" // Change the input type to number
                placeholder="End (seconds)"
                value={trimEnd}
                onChange={(e) => setTrimEnd(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <button
              onClick={handleTrim}
              className="p-2 bg-blue-500 text-white rounded"
            >
              Trim
            </button>
          </div>
        </div>
      )}

      {trimmedAudioUrl ? (
        <div className="border p-4 rounded bg-gray-100 mt-4">
          <p>Trimmed Song:</p>
          <audio src={trimmedAudioUrl} controls />
        </div>
      ) : null}

      <div
        id="timeline"
        className="bg-gray-300 h-8 mt-4"
        onClick={handleTimelineClick}
        style={{ cursor: "pointer" }}
      >
        {cursorPosition !== null && (
          <div
            className="h-full bg-blue-500"
            style={{ width: `${cursorPosition}%` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default MusicEditor;
