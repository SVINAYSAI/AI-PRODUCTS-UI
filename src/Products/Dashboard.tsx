export default function Dashboard() {
  return (
    <>
      <div className="bg-gray-50 lg:ml-64" id="main-content">
        <div className="mb-2 text-xl font-semibold dark:text-black pt-[7%] pl-[2%]">
          User
        </div>
        <div className="grid grid-cols-4 gap-4 px-4 pt-6 xl:grid-cols-4 xl:gap-4">
          <div
            className="p-4 mb-4 bg-white border border-b-200 rounded-md shadow-md"
            style={{ height: "275px", width: "300px" }}
          >
            <h3 className="mb-4 text-xl font-semibold dark:text-black">
              Information
            </h3>
          </div>

          <div className="p-4 mb-4 bg-white border border-b-200 rounded-md shadow-md">
            <h3 className="mb-4 text-xl font-semibold dark:text-black">
              Information
            </h3>
          </div>

          <div className="p-4 mb-4 bg-white border border-b-200 rounded-md shadow-md">
            <h3 className="mb-4 text-xl font-semibold dark:text-black">
              Information
            </h3>
          </div>

          <div className="p-4 mb-4 bg-white border border-b-200 rounded-md shadow-md">
            <h3 className="mb-4 text-xl font-semibold dark:text-black">
              Information
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
