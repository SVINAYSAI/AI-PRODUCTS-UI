import React from "react"
import DocNavbar from "../doc-navbar"
import DocSidenav from "../doc-sidenav"

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
              <DocSidenav/>
            </div>

            <div className="col-lg-8 col-12 p-8">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-2 ">Badges</h1>
                    <p className="mb-0 lead text-muted">Documentation and examples for badges, our small count and labeling
                      component.</p>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="bg-badge" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Background colors</h2>
                    <p>Use our background utility classes to quickly change the appearance of a badge. Please note that
                      when using Bootstrap’s default <code>.bg-light</code>, you’ll likely need a text color utility
                      like <code>.text-dark</code> for proper styling. This is because background utilities do not set
                      anything but <code>background-color</code>.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-bg-badge" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-bg-badge-design-tab" data-bs-toggle="pill"
                          href="#pills-bg-badge-design" role="tab" aria-controls="pills-bg-badge-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-bg-badge-html-tab" data-bs-toggle="pill"
                          href="#pills-bg-badge-html" role="tab" aria-controls="pills-bg-badge-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-bg-badge">
                      <div className="tab-pane tab-example-design fade show active" id="pills-bg-badge-design"
                        role="tabpanel" aria-labelledby="pills-bg-badge-design-tab">

                        <span className="badge bg-primary">Primary</span>


                        <span className="badge bg-secondary">Secondary</span>


                        <span className="badge bg-success">Success</span>


                        <span className="badge bg-danger">Danger</span>


                        <span className="badge bg-warning text-dark">Warning</span>


                        <span className="badge bg-info text-dark">Info</span>


                        <span className="badge bg-light text-dark">Light</span>


                        <span className="badge bg-dark">Dark</span>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-bg-badge-html" role="tabpanel"
                        aria-labelledby="pills-bg-badge-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Primary badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Secondary badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Success badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Danger badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Warning badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-warning text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Info badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-info text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Light badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-light text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Dark badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="pill-badge" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Pill badges</h2>
                    <p>Use the <code>.rounded-pill</code> utility class to make badges more rounded with a larger
                      <code>border-radius</code>.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-pill-badges" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-pill-badges-design-tab" data-bs-toggle="pill"
                          href="#pills-pill-badges-design" role="tab" aria-controls="pills-pill-badges-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-pill-badges-html-tab" data-bs-toggle="pill"
                          href="#pills-pill-badges-html" role="tab" aria-controls="pills-pill-badges-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-pill-badges">
                      <div className="tab-pane tab-example-design fade show active" id="pills-pill-badges-design"
                        role="tabpanel" aria-labelledby="pills-pill-badges-design-tab">

                        <span className="badge rounded-pill bg-primary">Primary</span>

                        <span className="badge rounded-pill bg-secondary">Secondary</span>


                        <span className="badge rounded-pill bg-success">Success</span>


                        <span className="badge rounded-pill bg-danger">Danger</span>


                        <span className="badge rounded-pill bg-warning text-dark">Warning</span>


                        <span className="badge rounded-pill bg-info text-dark">Info</span>


                        <span className="badge rounded-pill bg-light text-dark">Light</span>


                        <span className="badge rounded-pill bg-dark">Dark</span>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-pill-badges-html" role="tabpanel"
                        aria-labelledby="pills-pill-badges-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Primary badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Secondary badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Success badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Danger badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Warning badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-warning text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Info badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-info text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Light badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-light text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Dark badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge rounded-pill bg-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Buttons</h2>
                    <p>Badges can be used as part of links or buttons to provide a counter.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-badge-second" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-badge-second-design-tab" data-bs-toggle="pill"
                          href="#pills-badge-second-design" role="tab" aria-controls="pills-badge-second-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-badge-second-html-tab" data-bs-toggle="pill"
                          href="#pills-badge-second-html" role="tab" aria-controls="pills-badge-second-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-badge-second">
                      <div className="tab-pane tab-example-design fade show active" id="pills-badge-second-design"
                        role="tabpanel" aria-labelledby="pills-badge-second-design-tab">

                        <button type="button" className="btn btn-primary">
                          Notifications <span className="badge bg-secondary">4</span>
                        </button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-badge-second-html" role="tabpanel"
                        aria-labelledby="pills-badge-second-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- Button --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          Notifications <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>4<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="positioned-badge" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Positioned</h2>
                    <p>Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.
                    </p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-positioned-badge" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-positioned-badge-design-tab" data-bs-toggle="pill"
                          href="#pills-positioned-badge-design" role="tab" aria-controls="pills-positioned-badge-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-positioned-badge-html-tab" data-bs-toggle="pill"
                          href="#pills-positioned-badge-html" role="tab" aria-controls="pills-positioned-badge-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-positioned-badge">
                      <div className="tab-pane tab-example-design fade show active" id="pills-positioned-badge-design"
                        role="tabpanel" aria-labelledby="pills-positioned-badge-design-tab">
                        <button type="button" className="btn btn-primary position-relative">
                          Inbox
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            99+
                            <span className="visually-hidden">unread messages</span>
                          </span>
                        </button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-positioned-badge-html" role="tabpanel"
                        aria-labelledby="pills-positioned-badge-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comments">&lt;!-- Positioned --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary position-relative<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          Inbox
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          99+
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>visually-hidden<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>unread messages<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-4">

                    <p>You can also replace the <code>.badge</code> class with a few more utilities without a count for
                      a more generic indicator.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-positioned-badge-without-number" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-positioned-badge-without-number-design-tab"
                          data-bs-toggle="pill" href="#pills-positioned-badge-without-number-design" role="tab"
                          aria-controls="pills-positioned-badge-without-number-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-positioned-badge-without-number-html-tab" data-bs-toggle="pill"
                          href="#pills-positioned-badge-without-number-html" role="tab"
                          aria-controls="pills-positioned-badge-without-number-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-positioned-badge-without-number">
                      <div className="tab-pane tab-example-design fade show active"
                        id="pills-positioned-badge-without-number-design" role="tabpanel"
                        aria-labelledby="pills-positioned-badge-without-number-design-tab">
                        <button type="button" className="btn btn-primary position-relative">
                          Profile
                          <span
                            className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-positioned-badge-without-number-html"
                        role="tabpanel" aria-labelledby="pills-positioned-badge-without-number-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comments">&lt;!-- Positioned --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary position-relative<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          Profile
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>visually-hidden<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New alerts<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="dot-badge" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Dot</h2>
                    <p>Use <code>.badge-dot</code> classes on an <code className="highlighter-rouge">&lt;a&gt;</code>
                      element quickly provide
                      <em>actionable</em> badges with hover and focus states.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-badge-dot" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-badge-dot-design-tab" data-bs-toggle="pill"
                          href="#pills-badge-dot-design" role="tab" aria-controls="pills-badge-dot-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-badge-dot-html-tab" data-bs-toggle="pill"
                          href="#pills-badge-dot-html" role="tab" aria-controls="pills-badge-dot-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-badge-dot">
                      <div className="tab-pane tab-example-design fade show active" id="pills-badge-dot-design"
                        role="tabpanel" aria-labelledby="pills-badge-dot-design-tab">

                        <span className="me-2"><span className="badge bg-dot bg-primary me-1"></span>
                          <span>Primary</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-secondary me-1"></span><span
                          className="text-secondary">Secondary</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-success me-1"></span><span
                          className="text-success">Success</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-danger me-1"></span><span
                          className="text-danger">Danger</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-warning me-1"></span><span
                          className="text-warning">Warning</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-info me-1"></span><span
                          className="text-info">Info</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-light me-1"></span><span
                          className="text-light">Light</span></span>


                        <span className="me-2"><span className="badge bg-dot bg-dark me-1"></span><span
                          className="text-dark">Dark</span></span>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-badge-dot-html" role="tabpanel"
                        aria-labelledby="pills-badge-dot-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Primary badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-primary me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Secondary badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-secondary me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Success badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-success me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Danger badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-danger me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Warning badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-warning me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Info badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-info me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-info<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Light badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-light me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-light<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Dark badge --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>me-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>badge bg-dot bg-dark me-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span>
                            <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                        </code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="simple-badge" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Simple Badge </h2>
                    <p>Badges scale to match the size of the immediate parent element by using relative font sizing and
                      <code className="highlighter-rouge">em</code> units.
                    </p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-simple-badge" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-simple-badge-design-tab" data-bs-toggle="pill"
                          href="#pills-simple-badge-design" role="tab" aria-controls="pills-simple-badge-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-simple-badge-html-tab" data-bs-toggle="pill"
                          href="#pills-simple-badge-html" role="tab" aria-controls="pills-simple-badge-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-simple-badge">
                      <div className="tab-pane tab-example-design fade show active" id="pills-simple-badge-design"
                        role="tabpanel" aria-labelledby="pills-simple-badge-design-tab">
                        <h1>Example heading <span className="badge bg-secondary">New</span></h1>
                        <h2>Example heading <span className="badge bg-secondary">New</span></h2>
                        <h3>Example heading <span className="badge bg-secondary">New</span></h3>
                        <h4>Example heading <span className="badge bg-secondary">New</span></h4>
                        <h5>Example heading <span className="badge bg-secondary">New</span></h5>
                        <h6>Example heading <span className="badge bg-secondary">New</span></h6>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-simple-badge-html" role="tabpanel"
                        aria-labelledby="pills-simple-badge-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Headings --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h1</span><span className="token punctuation">&gt;</span></span>Example heading <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h1</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span><span className="token punctuation">&gt;</span></span>Example heading <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span><span className="token punctuation">&gt;</span></span>Example heading <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h4</span><span className="token punctuation">&gt;</span></span>Example heading <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h4</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span><span className="token punctuation">&gt;</span></span>Example heading <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h6</span><span className="token punctuation">&gt;</span></span>Example heading <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>badge bg-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>New<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h6</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
      </div>
  </body >
  )
}


