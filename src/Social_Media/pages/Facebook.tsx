export default function Facebook() {
  return (
    <>
      <div className="mt-2">
        <label
          htmlFor="facebook"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Facebook
        </label>
        <input
          type="text"
          id="facebook"
          placeholder="Facebook Token"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    </>
  );
}
