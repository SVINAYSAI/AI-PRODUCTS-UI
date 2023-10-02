import { useState } from 'react';
import axios from 'axios';
import React from 'react';

export default function Model() {
    const [prompt, setPrompt] = useState('');
    const [processedImage, setProcessedImage] = useState(null);

    const handleGenerateImage = async () => {
        try {
            const response = await axios.post('/api/image_generation/process_image', {
                prompt: prompt,
            });

            if (response.data && response.data.image) {
                setProcessedImage(response.data.image);
            }
        } catch (error) {
            console.error('Error generating image:', error);
        }
    };

    return (
        <>

            <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3>
            <ul className="grid w-[50%] gap-6 md:grid-row-3">
                <li>
                    <input type="radio" id="hosting-small" name="hosting" value="hosting-small" className="hidden peer" required />
                    <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <div className="w-full text-lg font-semibold">0-50 MB</div>
                            <div className="w-full">Good for small websites</div>
                        </div>
                        <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" id="hosting-big" name="hosting" value="hosting-big" className="hidden peer" />
                    <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <div className="w-full text-lg font-semibold">500-1000 MB</div>
                            <div className="w-full">Good for large websites</div>
                        </div>
                        <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
                <li>
                    <input type="radio" id="hosting-red" name="hosting" value="hosting-red" className="hidden peer" />
                    <label htmlFor="hosting-red" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div className="block">
                            <div className="w-full text-lg font-semibold">500-1000 MB</div>
                            <div className="w-full">Good for large websites</div>
                        </div>
                        <svg className="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </label>
                </li>
            </ul>


            {/* this dropdown */}
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>

            {/* this other */}
            <div className="-mb-2u">
                <section className="content relative max-w-screen-2xl bg-bottom bg-no-repeat">
                    <div className="relative w-full flex flex-col xl:flex-row text-left gap-1u xl:gap-2u">
                        <div className="xl:w-1/3 flex-shrink-0">
                            <h1 className="font-sans block font-bold text-black text-[2rem] flex-shrink-0 tracking-tight text-start">
                                Generative Voice AI
                            </h1>
                            <span className="font-serif text-[13px] block font-normal text-gray-700 max-w-xl mt-5 xl:mb-12 text-start">
                                FATS the most advanced text to speech and voice cloning
                                software ever. Create lifelike voiceovers for your content
                                or use our AI voice generator as an easy-to-use text reader.
                            </span>
                        </div>
                        <div className="w-full -mb-1u xl:-mb-2u">
                            <div className="flex flex-col items-stretch max-w-4xl">
                                <span className="font-serif text-sm block font-light text-gray-500 ml-4 mb-2 flex-wrap items-center -m-1">
                                    <div className="m-1">
                                        Click on a language to generate in a random text:
                                    </div>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-en">
                                                English
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-de">
                                                German
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-pl">
                                                Polish
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-es">
                                                Spanish
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-it">
                                                Italian
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-fr">
                                                French
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:cursor-pointer m-1">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-pt">
                                                Portuguese
                                            </span>
                                        </span>
                                    </span>
                                    <span className="inline-flex items-center rounded-full py-0.5 text-sm font-medium px-2 bg-indigo-100 text-indigo-800 hover:cursor-pointer m-1 hover:bg-indigo-200">
                                        <span className="font-serif text-xs block font-normal text-gray-700">
                                            <span data-testid="tryout-lang-button-hi">Hindi</span>
                                        </span>
                                    </span>
                                </span>
                                <div className="bg-white shadow-2xl rounded-md flex flex-col items-stretch relative">
                                    <div className="relative px-8 py-8 pb-11">
                                        <textarea
                                            // autoFocus=""
                                            data-testid="tryout-textarea"
                                            className="font-serif text-lg bg-transparent h-[10rem] p-0 resize-none w-full outline-none focus:ring-0 ring-0 border-none placeholder:text-gray-200"
                                            placeholder="FATS lets you voice any length of text in top quality, all while automatically matching what is being said with how it’s being said. The model works best on longer texts, so type in at least a few sentences."
                                        // rows="5"
                                        // maxLength="333"
                                        // spellcheck="false"
                                        ></textarea>


                                        <div className="absolute bottom-4 left-7">
                                            <button
                                                className="relative cursor-pointer rounded-lg mb-2 text-left focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm text-gray-700 text-base flex items-center"
                                                id="headlessui-listbox-button-P0-2"
                                                type="button"
                                                aria-haspopup="listbox"
                                                aria-expanded="false"
                                                data-headlessui-state=""
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="inline h-5 w-5 text-gray-200"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                                premade/Adam
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                    className="h-5 w-5 text-gray-400"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <span className="font-serif text-xs block font-normal text-gray-700 absolute right-8 bottom-6">
                                            0 / 333
                                        </span>
                                    </div>
                                    <div className="px-8 py-8 items-center border-t-2 border-gray-100/50">
                                        <div className="flex flex-row items-center w-full gap-3">
                                            <audio
                                                id="audio-player"
                                            //   autoPlay="true"
                                            ></audio>
                                            <button
                                                type="button"
                                                className="btn btn-circle btn-primary btn-xl"
                                                //   disabled=""
                                                aria-label="Play"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 36 36"
                                                    className="fill-white group-active:fill-white/80 h-4 w-4"
                                                >
                                                    <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                                                </svg>
                                            </button>
                                            <div
                                                className="w-full flex items-center slider-wrapper-lg disabled"
                                                style={{ position: "relative" }}
                                            >
                                                <div
                                                    className="slider-track-lg slider-track slider-track-lg rounded slider-track-0"
                                                    style={{
                                                        position: "absolute",
                                                        left: "0px",
                                                        right: "497px",
                                                    }}
                                                ></div>
                                                <div
                                                    className="slider-track-lg slider-track slider-track-lg rounded slider-track-1"
                                                    style={{
                                                        position: "absolute",
                                                        left: "0px",
                                                        right: "0px",
                                                    }}
                                                ></div>
                                                {/* <div className="thumb thumb-0 " 
                                //  tabIndex="0"
                                  role="slider" aria-orientation="horizontal" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" ></div> */}
                                                <div className="relative flex items-center text-gray-500 cursor-pointer">
                                                    <div className="relative pb-1">
                                                        <div className="relative">
                                                            <div className="absolute -translate-y-1/2 -translate-x-1/2">
                                                                <div className="slider-thumb h-4 rounded-full w-1 bg-black"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 flex-shrink-0 text-gray-400 hover:text-black cursor-pointer"
                                        >
                                            <title>Say it differently</title>
                                            <path
                                                fillRule="evenodd"
                                                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 flex-shrink-0 text-gray-400 opacity-75"
                                        >
                                            <title>Download audio</title>
                                            <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                                            <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}
