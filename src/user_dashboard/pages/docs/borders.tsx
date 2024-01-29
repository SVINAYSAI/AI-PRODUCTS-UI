import DocNavbar from "../doc-navbar";
import DocSidenav from "../doc-sidenav";

export default function Borders() {
  return (
    <body className="bg-white">


      {/* @@include("../partials/doc-navbar.html") */}
      <DocNavbar />

      <div className="pt-9">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-12 bg-white position-sticky">
              {/* @@include("../partials/doc-sidenav.html") */}
              <DocSidenav />
            </div>
            <div className="col-lg-8 col-12 p-8">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-2">Borders</h1>
                    <p className="mb-0 lead text-dark">Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-4">
                    <h2>Border</h2>
                    <p>Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.
                    </p>
                    <div className="mt-4 mb-4" id="additive">
                      <h4>Additive</h4>
                    </div>
                  </div>

                  <div className="card">
                    <ul className="nav nav-line-bottom " id="pills-tab-additive" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-additive-design-tab" data-bs-toggle="pill" href="#pills-additive-design" role="tab" aria-controls="pills-additive-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-additive-html-tab" data-bs-toggle="pill" href="#pills-additive-html" role="tab" aria-controls="pills-additive-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-additive">
                      <div className="tab-pane tab-example-design fade show active" id="pills-additive-design" role="tabpanel" aria-labelledby="pills-additive-design-tab">
                        <div className="docs-example-border-utils">
                          <span className="border"></span>
                          <span className="border-top"></span>
                          <span className="border-end"></span>
                          <span className="border-bottom"></span>
                          <span className="border-start"></span>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-additive-html" role="tabpanel" aria-labelledby="pills-additive-html-tab">

                        <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-top<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-end<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-bottom<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-start<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-10">

                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="mb-4">
                      <h4>Subtractive</h4>
                    </div>

                    <div className="card">
                      <ul className="nav nav-line-bottom " id="pills-tab-subtractive" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-subtractive-design-tab" data-bs-toggle="pill" href="#pills-subtractive-design" role="tab" aria-controls="pills-subtractive-design" aria-selected="true">Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-subtractive-html-tab" data-bs-toggle="pill" href="#pills-subtractive-html" role="tab" aria-controls="pills-subtractive-html" aria-selected="false">HTML</a>
                        </li>
                      </ul>

                      <div className="tab-content p-4" id="pills-tabContent-subtractive">
                        <div className="tab-pane tab-example-design fade show active" id="pills-subtractive-design" role="tabpanel" aria-labelledby="pills-subtractive-design-tab">
                          <div className="docs-example-border-utils docs-example-border-utils-0">
                            <span className="border-0"></span>
                            <span className="border-top-0"></span>
                            <span className="border-end-0"></span>
                            <span className="border-bottom-0"></span>
                            <span className="border-start-0"></span>
                          </div>
                        </div>
                        <div className="tab-pane tab-example-html fade" id="pills-subtractive-html" role="tabpanel" aria-labelledby="pills-subtractive-html-tab">

                          <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-top-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-end-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-bottom-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border-start-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span></code></pre>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </hr>

              <hr className="my-10">

                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div id="border-color" className="mb-4">
                      <h2>Border color</h2>
                      <p>Change the border color using utilities built on our theme colors.</p>
                    </div>

                    <div className="card">
                      <ul className="nav nav-line-bottom " id="pills-tab-border-color" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-border-color-design-tab" data-bs-toggle="pill" href="#pills-border-color-design" role="tab" aria-controls="pills-border-color-design" aria-selected="true">Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-border-color-html-tab" data-bs-toggle="pill" href="#pills-border-color-html" role="tab" aria-controls="pills-border-color-html" aria-selected="false">HTML</a>
                        </li>
                      </ul>

                      <div className="tab-content p-4" id="pills-tabContent-border-color">
                        <div className="tab-pane tab-example-design fade show active" id="pills-border-color-design" role="tabpanel" aria-labelledby="pills-border-color-design-tab">
                          <div className="docs-example-border-utils ">
                            <span className="border border-primary"></span>
                            <span className="border border-secondary"></span>
                            <span className="border border-success"></span>
                            <span className="border border-danger"></span>
                            <span className="border border-warning"></span>
                            <span className="border border-info"></span>
                            <span className="border border-light"></span>
                            <span className="border border-dark"></span>
                            <span className="border border-white"></span>
                          </div>
                        </div>
                        <div className="tab-pane tab-example-html fade" id="pills-border-color-html" role="tabpanel" aria-labelledby="pills-border-color-html-tab">
                          <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-info<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-light<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>border border-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span></code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </hr>
              <hr className="my-10">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div id="border-radius" className="mb-4">
                      <h2>Border radius</h2>
                      <p>Add classes to an element to easily round its corners.</p>
                    </div>
                    <div className="card">
                      <ul className="nav nav-line-bottom " id="pills-tab-border-radius" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-border-radius-design-tab" data-bs-toggle="pill" href="#pills-border-radius-design" role="tab" aria-controls="pills-border-radius-design" aria-selected="true">Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-border-radius-html-tab" data-bs-toggle="pill" href="#pills-border-radius-html" role="tab" aria-controls="pills-border-radius-html" aria-selected="false">HTML</a>
                        </li>
                      </ul>
                      <div className="tab-content p-4" id="pills-tabContent-border-radius">
                        <div className="tab-pane tab-example-design fade show active" id="pills-border-radius-design" role="tabpanel" aria-labelledby="pills-border-radius-design-tab">
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="..." className="rounded" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-top" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-end" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-bottom" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-start" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-circle" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-pill" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-0" />
                        </div>
                        <div className="tab-pane tab-example-html fade" id="pills-border-radius-html" role="tabpanel" aria-labelledby="pills-border-radius-html-tab">
                          <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-top<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-end<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-bottom<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-start<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-circle<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-pill<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span></code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </hr>
              <hr className="my-10">

                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div id="sizes" className="mb-4">
                      <h2>Sizes</h2>
                      <p>Use <code className="highlighter-rouge">.rounded-3</code> or <code className="highlighter-rouge">.rounded-0</code> for larger or smaller border-radius.
                      </p>
                    </div>

                    <div className="card">
                      <ul className="nav nav-line-bottom " id="pills-tab-sizes" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-sizes-design-tab" data-bs-toggle="pill" href="#pills-sizes-design" role="tab" aria-controls="pills-sizes-design" aria-selected="true">Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-sizes-html-tab" data-bs-toggle="pill" href="#pills-sizes-html" role="tab" aria-controls="pills-sizes-html" aria-selected="false">HTML</a>
                        </li>
                      </ul>

                      <div className="tab-content p-4" id="pills-tabContent-sizes">
                        <div className="tab-pane tab-example-design fade show active" id="pills-sizes-design" role="tabpanel" aria-labelledby="pills-sizes-design-tab">
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-0" />
                          <img src="../assets/images/placeholder/placeholder-img.jpg" alt="" className="rounded-3" />
                        </div>
                        <div className="tab-pane tab-example-html fade" id="pills-sizes-html" role="tabpanel" aria-labelledby="pills-sizes-html-tab">

                          <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded-3<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span></code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </hr>
            </div>
          </div>
        </div>
      </div>
    </body >
  )
}
