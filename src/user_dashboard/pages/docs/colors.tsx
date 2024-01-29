import DocNavbar from "../doc-navbar"
import DocSidenav from "../doc-sidenav"

export default function Borders() {
  return (
    <body className="bg-white">
  
  {/* @@include("../partials/doc-navbar.html") */}
    <DocNavbar/>

    <div className="pt-9">
      <div className="container-fluid">
            <div className="row">
            <div className="col-lg-2 col-12 bg-white position-sticky">
                {/* @@include("../partials/doc-sidenav.html") */}
                <DocSidenav/>
            </div>
            <div className="col-lg-8 col-12 p-8">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-0">Colors</h1>
                  </div>
                </div>
              </div>
            
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-8">
                  <div className="mb-4" id="color">
                    <h3 className="mb-0">Theme Colors</h3>
                  </div>
                  
                  <div className="row color-swatches">
                   
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-primary">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Primary</h5>
                          <p className="color-swatch-body-value text-uppercase">#624BFF </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-secondary">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Secondary</h5>
                          <p className="color-swatch-body-value text-uppercase">#637381</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-success">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Success</h5>
                          <p className="color-swatch-body-value text-uppercase">#198754 </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-danger">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Danger</h5>
                          <p className="color-swatch-body-value text-uppercase">#dc3545 </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-warning">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Warning</h5>
                          <p className="color-swatch-body-value text-uppercase">#ffc107</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-info">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Info</h5>
                          <p className="color-swatch-body-value text-uppercase">#0dcaf0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Light</h5>
                          <p className="color-swatch-body-value text-uppercase">#F9FAFB</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Dark</h5>
                          <p className="color-swatch-body-value text-uppercase">#161C24 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mt-5">
                    <h3 className="mb-0">Theme Light Colors</h3>
                  </div>
                  <div className="row color-swatches">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-primary">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Primary</h5>
                          <p className="color-swatch-body-value text-uppercase">#E0DCFE </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-secondary">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Secondary</h5>
                          <p className="color-swatch-body-value text-uppercase">#e9ecef</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-success">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Success</h5>
                          <p className="color-swatch-body-value text-uppercase">#EAF6EC </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-danger">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Danger</h5>
                          <p className="color-swatch-body-value text-uppercase">#FBEBEC </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-warning">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Warning</h5>
                          <p className="color-swatch-body-value text-uppercase">#FFF3CD</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-info">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Info</h5>
                          <p className="color-swatch-body-value text-uppercase">#E7FAFE</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-light-dark">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Dark</h5>
                          <p className="color-swatch-body-value text-uppercase">#d1cfd8</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mt-5">
                    <h3 className="mb-0">Theme Dark Colors</h3>
                  </div>
                  <div className="row color-swatches">
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark-primary">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Primary</h5>
                          <p className="color-swatch-body-value text-uppercase">#593cc1 </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark-secondary">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Secondary</h5>
                          <p className="color-swatch-body-value text-uppercase">#5c596d</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark-success">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Success</h5>
                          <p className="color-swatch-body-value text-uppercase">#139a74 </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark-danger">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Danger</h5>
                          <p className="color-swatch-body-value text-uppercase">#ae302e </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark-warning">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Warning</h5>
                          <p className="color-swatch-body-value text-uppercase">#c28135</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                      <div className="color-swatch">
                        <div className="color-swatch-header bg-dark-info">
                        </div>
                        <div className="color-swatch-body">
                          <h5 className="color-swatch-body-label">Info</h5>
                          <p className="color-swatch-body-value text-uppercase">#51a0c2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                     <div className="mb-4 mt-5">
                      <h3 className="mb-0">Theme Gray Colors</h3>
                    </div>
                    <div className="row color-swatches">
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-100">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-100</h5>
                            <p className="color-swatch-body-value text-uppercase">#F9FAFB </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-200">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-200</h5>
                            <p className="color-swatch-body-value text-uppercase">#F4F6F8</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-300">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-300</h5>
                            <p className="color-swatch-body-value text-uppercase">#DFE3E8 </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-400">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-400</h5>
                            <p className="color-swatch-body-value text-uppercase">#C4CDD5 </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-500">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-500</h5>
                            <p className="color-swatch-body-value text-uppercase">#919EAB</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-600">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-600</h5>
                            <p className="color-swatch-body-value text-uppercase">#637381</p>
                          </div>
                        </div>
                      </div>
                       <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-700">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-700</h5>
                            <p className="color-swatch-body-value text-uppercase">#454F5B</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-800">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-800</h5>
                            <p className="color-swatch-body-value text-uppercase">#212B36</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6">
                        <div className="color-swatch">
                          <div className="color-swatch-header bg-gray-900">
                          </div>
                          <div className="color-swatch-body">
                            <h5 className="color-swatch-body-label">gray-900</h5>
                            <p className="color-swatch-body-value text-uppercase">#161C24</p>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
              </div>
             
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="text-color" className="mb-4">
                    <h3>Text colors</h3>
                  </div>
                  <div className="card">
                    <ul className="nav nav-line-bottom " id="pills-tab-text-color" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-text-color-design-tab" data-bs-toggle="pill" href="#pills-text-color-design" role="tab" aria-controls="pills-text-color-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-text-color-htms-tab" data-bs-toggle="pill" href="#pills-text-color-html" role="tab" aria-controls="pills-text-color-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <div className="tab-content p-4" id="pills-tabContent-text-color">
                      <div className="tab-pane tab-example-design fade show active" id="pills-text-color-design" role="tabpanel" aria-labelledby="pills-text-color-design-tab">
                        <p className="text-primary">.text-primary</p>
                        <p className="text-secondary">.text-secondary</p>
                        <p className="text-success">.text-success</p>
                        <p className="text-danger">.text-danger</p>
                        <p className="text-warning">.text-warning</p>
                        <p className="text-info">.text-info</p>
                        <p className="text-light bg-dark">.text-light</p>
                        <p className="text-dark">.text-dark</p>
                        <p className="text-body">.text-body</p>
                        <p className="text-muted">.text-muted</p>
                        <p className="text-white bg-dark">.text-white</p>
                        <p className="text-black-50">.text-black-50</p>
                        <p className="text-white-50 bg-dark">.text-white-50</p>
                      </div>
                      <div className="tab-pane tab-example-html fade" id="pills-text-color-html" role="tabpanel" aria-labelledby="pills-text-color-htms-tab">
                        <div className="copy-content copy-content-height">
                          <div className="code-toolbar">
                            <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-info<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-light bg-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-body<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-muted<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-white bg-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-white<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-black-50<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-black-50<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>text-white-50 bg-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.text-white-50<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span></code></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-10"/>
]              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="background-color" className="mb-4">
                    <h3>Background color</h3>
                    <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code className="highlighter-rouge">color</code></strong>,
                      so in some cases you’ll want to use <code className="highlighter-rouge">.text-*</code> utilities.
                    </p>
                  </div>
                  <div className="card">
                    <ul className="nav nav-line-bottom " id="pills-tab-background-color" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-background-color-design-tab" data-bs-toggle="pill" href="#pills-background-color-design" role="tab" aria-controls="pills-background-color-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-background-color-htms-tab" data-bs-toggle="pill" href="#pills-background-color-html" role="tab" aria-controls="pills-background-color-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <div className="tab-content p-4" id="pills-tabContent-background-color">
                      <div className="tab-pane tab-example-design fade show active" id="pills-background-color-design" role="tabpanel" aria-labelledby="pills-background-color-design-tab">
                        <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                        <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                        <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
                        <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                        <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                        <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
                        <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
                        <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                        <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
                        <div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
                      </div>
                      <div className="tab-pane tab-example-html fade" id="pills-background-color-html" role="tabpanel" aria-labelledby="pills-background-color-htms-tab">
                        <div className="copy-content copy-content-height">
                          <div className="code-toolbar">
                            <pre><code className="language-markup"><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-primary text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-secondary text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-success text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-danger text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-warning text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-info text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-light text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-dark text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-white text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-white<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>p-3 mb-2 bg-transparent text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>.bg-transparent<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
\
            </div>
          </div>
        </div>
      </div>
</body>
  )
}


