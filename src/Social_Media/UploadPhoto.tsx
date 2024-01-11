import React, { useState } from "react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useUploadPhotoLogic } from "./UploadPhotoLogic";

export default function UploadPhoto() {

  const {
    comment,
    selectedImage,
    selectedVideo,
    videoRef,
    showEmojiPicker,
    emojiContainerRef,
    handleCommentChange,
    handleImageChange,
    handleVideoChange,
    handleEmojiClick,
    handleEmojiContainerClick,
    handleSubmit,
    setShowEmojiPicker,
    createFacebookPost,
    createTwitterPost,
  } = useUploadPhotoLogic();

  type SocialMediaType = "facebook" | "twitter";
  const [selectedSocialMedia, setSelectedSocialMedia] = useState<
    SocialMediaType[]
  >([]);

  const handleCheckboxChange = (socialMedia: SocialMediaType) => {
    if (selectedSocialMedia.includes(socialMedia)) {
      console.log(`Removing ${socialMedia} from selected social media types`);
      setSelectedSocialMedia(
        selectedSocialMedia.filter((item) => item !== socialMedia)
      );
    } else {
      console.log(`Adding ${socialMedia} to selected social media types`);
      setSelectedSocialMedia([...selectedSocialMedia, socialMedia]);
    }
  };

  const text = "svs";
  const apiKey = 123456;

  const handleCreateFacebookPost = () => {
    createFacebookPost(apiKey);
  };

  const handleCreateTwitterPost = async () => {
    try {
      await createTwitterPost(apiKey);
    } catch (error) {
      console.error("Error creating Twitter post:", error);
    }
  };
  

  return (
    <>
      <section className="py-6">
        <div className="container mt-4">
          <div className="rounded-md border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-gray-600 dark:text-white">
              Identification
            </h3>
            <span className="text-gray-600 font-sans dark:text-white">
              You can select one or multiple checkbox
            </span>
            <ul className="items-center w-full text-sm max-md:overflow-x-scroll font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {/* Facebook */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="facebook-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("facebook")}
                    onChange={() => handleCheckboxChange("facebook")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="facebook-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Facebook
                  </label>
                </div>
              </li>

              {/* Twitter */}
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center p-3">
                  <input
                    id="twitter-checkbox-list"
                    type="checkbox"
                    checked={selectedSocialMedia.includes("twitter")}
                    onChange={() => handleCheckboxChange("twitter")}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="twitter-checkbox-list"
                    className="ml-2 mt-[8px] text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Twitter
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="container mt-4">
              <div className="flex justify-center items-center">
                {selectedImage && (
                  <div className="mt-2 mb-4">
                    <img
                      src={selectedImage}
                      alt="Selected Preview"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-center items-center">
                {selectedVideo && (
                  <div className="mt-2 mb-4 ml-[12%]">
                    <video
                      ref={videoRef}
                      controls
                      width="400"
                      height="300"
                      className="max-w-[60%] h-auto rounded-md"
                    >
                      <source src={selectedVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>

              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={comment}
                    onChange={handleCommentChange}
                    className="w-full px-0 p-2 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button
                    onClick={() => {
                      if (selectedSocialMedia.includes("facebook")) {
                        handleCreateFacebookPost();
                      }
                      if (selectedSocialMedia.includes("twitter")) {
                        handleCreateTwitterPost();
                      }
                    }}
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  >
                    Post comment
                  </button>

                  <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <input
                      type="file"
                      id="uploadImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="uploadImage"
                      className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                      >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                      </svg>
                      <span className="sr-only">Upload image</span>
                    </label>

                    <input
                      type="file"
                      id="uploadVideo"
                      accept="video/*"
                      onChange={handleVideoChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="uploadVideo"
                      className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-[12px] h-[17px] text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.7"
                          d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM5 10h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.268-1.219v2.984l-1.268-1.032Z"
                        />
                      </svg>
                      <span className="sr-only">Upload Video</span>
                    </label>

                    <div
                      style={{ position: "relative" }}
                      ref={emojiContainerRef}
                      onClick={handleEmojiContainerClick}
                    >
                      <label
                        htmlFor="emoji"
                        className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                        </svg>
                        <span className="sr-only">Add emoji</span>
                      </label>
                      {showEmojiPicker && (
                        <div
                          style={{
                            position: "absolute",
                            top: "-320%",
                            right: 0,
                          }}
                        >
                          <EmojiPicker onEmojiClick={handleEmojiClick} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">
            Remember, contributions to this topic should follow our{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Community Guidelines
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
