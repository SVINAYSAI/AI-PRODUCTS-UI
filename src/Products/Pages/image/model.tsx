import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function Model() {
  const [prompt, setPrompt] = useState('');
  const [processedImage, setProcessedImage] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState<string>(''); // State to store selected prompt
  const [cookies, setCookie] = useCookies(['userinfo']);
  const promptOptions = ['midjourney', 'Stable_Diffusion'];

  const handleGenerateImage = async () => {
    try {
      // Log what is being sent to the backend
      console.log('Sending to backend:', {
        api_key: cookies.userinfo.api,
        message: prompt,
      });

      const response = await fetch('https://www.aifats.com/api/midjourney', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookies.userinfo.api}`,
        },
        body: JSON.stringify({
          api_key: cookies.userinfo.api,
          message: prompt,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setProcessedImage(data.image_path);
        console.log('Image generated successfully:', data.image_path);
      } else {
        console.error('Failed to generate image:', data.error);
      }
    } catch (error) {
      console.error('Error connecting to the backend:', error);
    }
  };

  useEffect(() => {
    if (cookies.userinfo) {
      setPrompt('Enter your prompt');
    }
  }, [cookies.userinfo]);

  return (
    <>
      <div id="component-2" className="svelte-10ogue4 pl-[22%] pr-12 ">
        <div
          id="component-3"
          className="gr-block gr-box relative w-full overflow-hidden border-solid border rounded-md gr-padded"
        >
          <div
            id="component-3"
            className="gr-block gr-box relative w-full overflow-hidden border rounded-md gr-padded"
          >
            <div
              className="flex row w-full flex-wrap gap-4 gr-compact items-stretch"
              id="prompt-container"
            >
              <div
                id="component-5"
                className="overflow-hidden flex flex-col relative col gap-4 gr-compact"
                style={{ minWidth: "min(320px, 100%)", flexGrow: "1" }}
              >
                <div
                  className="gr-form overflow-hidden flex border-solid border border-t-white border-l-white  gap-px  flex-wrap"
                  style={{ flexDirection: "inherit" }}
                >
                  <div
                    id="prompt-text-input"
                    className="gr-block gr-box relative w-full border-solid !p-0 !m-0 !border-0 !shadow-none !overflow-visible !bg-transparent gr-padded"
                  >
                    <label className="block w-full">
                      <span className="text-gray-500 text-[0.855rem] mb-2 block relative z-40 sr-only h-0 !m-0">
                        Enter your prompt
                      </span>
                      <input
                        data-testid="textbox"
                        type="text"
                        className=" w-full h-9 border-t-white border-b-white"
                        placeholder="Enter your prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                      />
                    </label>
                  </div>

                  <div
                    id="negative-prompt-text-input"
                    className="gr-block gr-box relative w-full overflow-hidden border-solid border border-l-white border-b-white !p-0 !m-0 !shadow-none !bg-transparent gr-padded"
                  >
                    <label className="block w-full">
                      <span className="text-gray-500 text-[0.855rem] mb-2 block relative z-40 sr-only h-0 !m-0">
                        Choose your negative prompt
                      </span>
                      <select
                        data-testid="dropdown"
                        value={selectedPrompt}
                        onChange={(e) => setSelectedPrompt(e.target.value)}
                        className="scroll-hide block gr-box gr-input w-full gr-text-input h-9"
                      >
                        <option value="" disabled>
                          Select a prompt
                        </option>
                        {promptOptions.map((prompt, index) => (
                          <option key={index} value={prompt}>
                            {prompt}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>


                </div>
              </div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 mr-0 mb-4 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                id="component-9"
                onClick={handleGenerateImage}
              // onClick={handleGenerateImage}
              >
                Generate image
              </button>
            </div>
          </div>
          <div className="">
            <div
              id="gallery"
              className="gr-block gr-box relative w-full overflow-hidden border-solid border"
            >
              <div className="wrap svelte-1w9161c inset-0 opacity-0"></div>{" "}
              <div
                className="overflow-y-auto h-full p-2"
                style={{ position: "relative" }}
              >
                 <div className="h-full min-h-[28rem] flex justify-center items-center">
              {processedImage && (
                <div>
                  <img
                    src={processedImage}
                    alt="Generated Image"
                    className="max-w-full max-h-full"
                  />
                </div>
              )}
              {!processedImage && (
                <div className="h-5 dark:text-white opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-image"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </div>
              )}
            </div>
              </div>
            </div>
          </div>
          <div
            id="component-19"
            className="mt-4 inline-block max-w-full text-gray-700 w-full"
          >
            <div className="text-xs mb-2 flex items-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="mr-1"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"
                ></path>
              </svg>{" "}
              Examples
            </div>{" "}
            <div className="gr-samples-gallery">
              <button className="group rounded-md">
                <div className="gr-sample-textbox">
                  A high tech solarpunk utopia in the Amazon rainforest
                </div>{" "}
              </button>
              <button className="group rounded-md">
                <div className="gr-sample-textbox">
                  A pikachu fine dining with a view to the Eiffel Tower
                </div>{" "}
              </button>
              <button className="group rounded-md">
                <div className="gr-sample-textbox">
                  A mecha robot in a favela in expressionist style
                </div>{" "}
              </button>
              <button className="group rounded-md">
                <div className="gr-sample-textbox">
                  an insect robot preparing a delicious meal
                </div>{" "}
              </button>
              <button className="group rounded-md">
                <div className="gr-sample-textbox">
                  A small cabin on top of a snowy mountain in the style of
                  Disney, artstation
                </div>{" "}
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
