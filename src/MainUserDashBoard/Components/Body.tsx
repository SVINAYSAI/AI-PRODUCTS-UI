export default function Body() {
  return (
    <>
      <div className="bg-primary rounded-3">
        <div className="row mb-5 ">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="p-6 d-lg-flex justify-content-between align-items-center ">
              <div className="d-md-flex align-items-center">
                <img
                  src="../assets/images/avatar/avatar-3.jpg"
                  alt="Image"
                  className="rounded-circle avatar avatar-xl"
                />
                <div className="ms-md-4 mt-3 mt-md-0 lh-1">
                  <h3 className="text-white mb-0">
                    Good afternoon, Jitu Chauhan
                  </h3>
                  <small className="text-white">
                    {" "}
                    Here is what’s happening with your projects today:
                  </small>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <a href="#!" className="btn btn-white">
                  What’s New!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
