import DocNavbar from "../doc-navbar"
import DocSidenav from "../doc-sidenav"

export default function Borders() {
  return (
    <body className="bg-white">
  

  @@include("../partials/doc-navbar.html")
    <DocNavbar/>

    <div className="pt-9">
      <div className="container-fluid">
            <div className="row">
            <div className="col-lg-2 col-12 bg-white position-sticky">
                @@include("../partials/doc-sidenav.html")
                <DocSidenav/>
            </div>
            <div className="col-lg-8 col-12 p-8">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-2">Credits</h1>
                    <p className="mb-0 lead text-dark">First, let us take this opportunity to thank all
                      the creative minds for their great products and plugins.</p>
                  </div>
                  <div className="my-5">
                    <h3 className="mb-4">
                      Plugins (libraries) </h3>
                    <div className="card">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th style={{width: "30%"}} className="bg-transparent">Plugins</th>
                              <th className="bg-transparent">URL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-dark fw-semi-bold">Apexcharts</td>
                              <td><a href="https://apexcharts.com/" target="_blank">https://apexcharts.com/ <i
                                    className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold">Bootstrap</td>
                              <td><a href="https://getbootstrap.com/" target="_blank">https://getbootstrap.com/ <i
                                    className="fe fe-external-link"></i></a></td>
                            </tr>







                            <tr>
                              <td className="text-dark fw-semi-bold">jQuery</td>
                              <td><a href="https://jquery.com/ " target="_blank">https://jquery.com/ <i
                                    className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold">jQuery
                                slimscroll</td>
                              <td><a href="https://github.com/rochal/jQuery-slimScroll "
                                  target="_blank">https://github.com/rochal/jQuery-slimScroll
                                  <i className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold">Dropzone</td>
                              <td><a href=" https://www.dropzonejs.com/ " target="_blank">
                                  https://www.dropzonejs.com/
                                  <i className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold border-bottom-0">Prismjs</td>
                              <td className=" border-bottom-0"><a href="https://prismjs.com/ " target="_blank">https://prismjs.com/ <i
                                    className="fe fe-external-link"></i></a></td>
                            </tr>







                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <h3 className="mb-4">
                      Free design sources </h3>
                    <div className="card">
                      <div className="table-responsive">
                        <table className="table">
                          <thead className="table-light">
                            <tr>
                              <th style={{width:"30%"}} className="bg-transparent">Plugins</th>
                              <th className="bg-transparent">URL</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-dark fw-semi-bold">Google Fonts
                              </td>
                              <td><a href="https://fonts.google.com/ " target="_blank">https://fonts.google.com/ <i
                                    className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold">Feather Icon
                              </td>
                              <td><a href="https://feathericons.com/" target="_blank">https://feathericons.com/ <i
                                    className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold">Material design
                                icons</td>
                              <td><a href="https://cdn.materialdesignicons.com/5.4.55/"
                                  target="_blank">https://cdn.materialdesignicons.com/5.4.55/
                                  <i className="fe fe-external-link"></i></a></td>
                            </tr>
                            <tr>
                              <td className="text-dark fw-semi-bold">Bootstrap Icons</td>
                              <td><a href="https://icons.getbootstrap.com/"
                                  target="_blank">https://icons.getbootstrap.com/
                                  <i className="fe fe-external-link"></i></a></td>
                            </tr>

                            <tr>
                              <td className="text-dark fw-semi-bold border-bottom-0">Unsplash</td>
                              <td className=" border-bottom-0"><a href="https://unsplash.com/" target="_blank">
                                  https://unsplash.com/ <i className="fe fe-external-link"></i></a></td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</body>
  )
}


