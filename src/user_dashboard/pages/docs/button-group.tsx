import React from "react";
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
              @@include("../partials/doc-sidenav.html")
              <DocSidenav />
            </div>

            <div className="col-lg-8 col-12 p-8">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-2 ">Button Group</h1>
                    <p className="mb-0 lead text-muted">Group a series of buttons together on a single line with the button
                      group, and super-power them with JavaScript.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="button" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Basic example</h2>
                    <p>Wrap a series of buttons with <code className="highlighter-rouge">.btn</code> in
                      <code className="highlighter-rouge">.btn-group</code>. Add on optional JavaScript radio and checkbox
                      style behavior with plugin</a>.</p>
                </div>

                <div className="mb-10 card">
                  <ul className="nav nav-line-bottom " id="pills-tab-buttongroup-basic" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-buttongroup-basic-design-tab" data-bs-toggle="pill"
                        href="#pills-buttongroup-basic-design" role="tab"
                        aria-controls="pills-buttongroup-basic-design" aria-selected="true">Design</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-buttongroup-basic-html-tab" data-bs-toggle="pill"
                        href="#pills-buttongroup-basic-html" role="tab" aria-controls="pills-buttongroup-basic-html"
                        aria-selected="false">HTML</a>
                    </li>
                  </ul>

                  <div className="tab-content p-4" id="pills-tabContent-buttongroup-basic">
                    <div className="tab-pane tab-example-design fade show active" id="pills-buttongroup-basic-design"
                      role="tabpanel" aria-labelledby="pills-buttongroup-basic-design-tab">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary">Left</button>
                        <button type="button" className="btn btn-primary">Middle</button>
                        <button type="button" className="btn btn-primary">Right</button>
                      </div>
                    </div>
                    <div className="tab-pane tab-example-html fade " id="pills-buttongroup-basic-html" role="tabpanel"
                      aria-labelledby="pills-buttongroup-basic-html-tab">
                      <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Group --&gt;</span>
                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Basic example<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                    </div>
                  </div>
                </div>

                <div>
                  <p>These classes can also be added to groups of links, as an alternative to the navigation components</a>.</p>

              </div>
              <div className="mb-10 card">
                <ul className="nav nav-line-bottom " id="pills-tab-buttongroup-link" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-buttongroup-link-design-tab" data-bs-toggle="pill"
                      href="#pills-buttongroup-link-design" role="tab"
                      aria-controls="pills-buttongroup-link-design" aria-selected="true">Design</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-buttongroup-link-html-tab" data-bs-toggle="pill"
                      href="#pills-buttongroup-link-html" role="tab" aria-controls="pills-buttongroup-link-html"
                      aria-selected="false">HTML</a>
                  </li>
                </ul>

                <div className="tab-content p-4" id="pills-tabContent-buttongroup-link">
                  <div className="tab-pane tab-example-design fade show active" id="pills-buttongroup-link-design"
                    role="tabpanel" aria-labelledby="pills-buttongroup-link-design-tab">
                    <div className="btn-group">
                      <a href="#" className="btn btn-primary active" aria-current="page">Active link</a>
                      <a href="#" className="btn btn-primary">Link</a>
                      <a href="#" className="btn btn-primary">Link</a>
                    </div>
                  </div>
                  <div className="tab-pane tab-example-html fade " id="pills-buttongroup-link-html" role="tabpanel"
                    aria-labelledby="pills-buttongroup-link-html-tab">
                    <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Group with active --&gt;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Basic example<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div id="mixed-styles" className="mb-4">
                <h2 className="fw-semi-bold mb-1">Mixed Styles</h2>

              </div>

              <div className="mb-10 card">
                <ul className="nav nav-line-bottom " id="pills-tab-button-mixed" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-button-mixed-design-tab" data-bs-toggle="pill"
                      href="#pills-button-mixed-design" role="tab" aria-controls="pills-button-mixed-design"
                      aria-selected="true">Design</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-button-mixed-html-tab" data-bs-toggle="pill"
                      href="#pills-button-mixed-html" role="tab" aria-controls="pills-button-mixed-html"
                      aria-selected="false">HTML</a>
                  </li>
                </ul>

                <div className="tab-content p-4" id="pills-tabContent-button-mixed">
                  <div className="tab-pane tab-example-design fade show active" id="pills-button-mixed-design"
                    role="tabpanel" aria-labelledby="pills-button-mixed-design-tab">
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button type="button" className="btn btn-danger">Left</button>
                      <button type="button" className="btn btn-warning">Middle</button>
                      <button type="button" className="btn btn-success">Right</button>
                    </div>
                  </div>
                  <div className="tab-pane tab-example-html fade " id="pills-button-mixed-html" role="tabpanel"
                    aria-labelledby="pills-button-mixed-html-tab">
                    <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Mixed Style --&gt;</span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Basic mixed styles example<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div id="mixed-outline-styles" className="mb-4">
                <h2 className="fw-semi-bold mb-1">Outline Styles</h2>

              </div>

              <div className="mb-10 card">
                <ul className="nav nav-line-bottom " id="pills-tab-button-mixed-outline" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-button-mixed-outline-design-tab" data-bs-toggle="pill"
                      href="#pills-button-mixed-outline-design" role="tab" aria-controls="pills-button-mixed-outline-design"
                      aria-selected="true">Design</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-button-mixed-outline-html-tab" data-bs-toggle="pill"
                      href="#pills-button-mixed-outline-html" role="tab" aria-controls="pills-button-mixed-outline-html"
                      aria-selected="false">HTML</a>
                  </li>
                </ul>

                <div className="tab-content p-4" id="pills-tabContent-button-mixed-outline">
                  <div className="tab-pane tab-example-design fade show active" id="pills-button-mixed-outline-design"
                    role="tabpanel" aria-labelledby="pills-button-mixed-outline-design-tab">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" className="btn btn-outline-primary">Left</button>
                      <button type="button" className="btn btn-outline-primary">Middle</button>
                      <button type="button" className="btn btn-outline-primary">Right</button>
                    </div>
                  </div>
                  <div className="tab-pane tab-example-html fade " id="pills-button-mixed-outline-html" role="tabpanel"
                    aria-labelledby="pills-button-mixed-outline-html-tab">
                    <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Outline Styled --&gt;</span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Basic outlined example<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="checkbox-and-radio-button-groups" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Checkbox and radio button groups</h2>
                    <p>Combine button-like checkbox and radio toggle buttons into a seamless looking button group.</p>

                  </div>

                  <div className="mb-4">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-checked-button" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-checked-button-design-tab" data-bs-toggle="pill"
                          href="#pills-button-checked-button-design" role="tab" aria-controls="pills-button-checked-button-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-checked-button-html-tab" data-bs-toggle="pill"
                          href="#pills-button-checked-button-html" role="tab" aria-controls="pills-button-checked-button-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-button-checked-button">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-checked-button-design"
                        role="tabpanel" aria-labelledby="pills-button-checked-button-design-tab">
                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">

                          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off">
                            <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

                            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off">
                              <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

                              <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off">
                                <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
                              </div>
                            </div>
                            <div className="tab-pane tab-example-html fade " id="pills-button-checked-button-html" role="tabpanel"
                              aria-labelledby="pills-button-checked-button-html-tab">
                              <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Checkbox and radio button groups --&gt;</span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Basic checkbox toggle button group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>checkbox<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-check<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btncheck1<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btncheck1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Checkbox 1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>

                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>checkbox<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-check<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btncheck2<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btncheck2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Checkbox 2<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>

                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>checkbox<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-check<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btncheck3<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btncheck3<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Checkbox 3<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Card -->
                  <div className=" mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-radio-button" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-radio-button-design-tab" data-bs-toggle="pill"
                          href="#pills-button-radio-button-design" role="tab" aria-controls="pills-button-radio-button-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-radio-button-html-tab" data-bs-toggle="pill"
                          href="#pills-button-radio-button-html" role="tab" aria-controls="pills-button-radio-button-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-radio-button">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-radio-button-design"
                        role="tabpanel" aria-labelledby="pills-button-radio-button-design-tab">
                        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked>
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off">
                              <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off">
                                <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                              </div>
                            </div>
                            <div className="tab-pane tab-example-html fade " id="pills-button-radio-button-html" role="tabpanel"
                              aria-labelledby="pills-button-radio-button-html-tab">
                              <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Checkbox and radio button groups --&gt;</span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Basic radio toggle button group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>radio<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-check<span className="token punctuation">"</span></span> <span className="token attr-name">name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio1<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span> <span className="token attr-name">checked</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Radio 1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>

                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>radio<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-check<span className="token punctuation">"</span></span> <span className="token attr-name">name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio2<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Radio 2<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>

                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>radio<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-check<span className="token punctuation">"</span></span> <span className="token attr-name">name</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio3<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>label</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary<span className="token punctuation">"</span></span> <span className="token attr-name">for</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btnradio3<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Radio 3<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>label</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Button mixed outline styles -->

                  <!-- Button toolbar -->
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div id="button-toolbar" className="mb-4">
                        <h2 className="fw-semi-bold mb-1">Button toolbar</h2>
                        <p>Combine sets of button groups into button toolbars for more complex components. Use utility
                          classes as needed to space out groups, buttons, and more.
                        </p>
                      </div>
                      <!-- Card -->
                      <div className="mb-10 card">
                        <ul className="nav nav-line-bottom " id="pills-tab-button-toolbar" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="pills-button-toolbar-design-tab" data-bs-toggle="pill"
                              href="#pills-button-toolbar-design" role="tab" aria-controls="pills-button-toolbar-design"
                              aria-selected="true">Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="pills-button-toolbar-html-tab" data-bs-toggle="pill"
                              href="#pills-button-toolbar-html" role="tab" aria-controls="pills-button-toolbar-html"
                              aria-selected="false">HTML</a>
                          </li>
                        </ul>
                        <!-- Tab content -->
                        <div className="tab-content p-4" id="pills-tabContent-button-toolbar">
                          <div className="tab-pane tab-example-design fade show active" id="pills-button-toolbar-design"
                            role="tabpanel" aria-labelledby="pills-button-toolbar-design-tab">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                              <div className="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" className="btn btn-primary">1</button>
                                <button type="button" className="btn btn-primary">2</button>
                                <button type="button" className="btn btn-primary">3</button>
                                <button type="button" className="btn btn-primary">4</button>
                              </div>
                              <div className="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" className="btn btn-primary">5</button>
                                <button type="button" className="btn btn-primary">6</button>
                                <button type="button" className="btn btn-primary">7</button>
                              </div>
                              <div className="btn-group" role="group" aria-label="Third group">
                                <button type="button" className="btn btn-primary">8</button>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane tab-example-html fade " id="pills-button-toolbar-html" role="tabpanel"
                            aria-labelledby="pills-button-toolbar-html-tab">


                            <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Toolbar --&gt;</span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-toolbar<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>toolbar<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Toolbar with button groups<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group me-2<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>First group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>2<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>3<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>4<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group me-2<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Second group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>5<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>6<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>7<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Third group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>8<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Button Toolbar -->

                  <!-- Sizing -->
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div id="button-sizing" className="mb-4">
                        <h2 className="fw-semi-bold mb-1">Sizing</h2>
                        <p>Instead of applying button sizing classes to every button in a group, just add <code
                          className="highlighter-rouge">.btn-group-*</code> to each <code
                            className="highlighter-rouge">.btn-group</code>, including each one when
                          nesting multiple groups.</p>
                      </div>
                      <!-- Card -->
                      <div className="mb-10 card">
                        <ul className="nav nav-line-bottom " id="pills-tab-button-sizing" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="pills-button-sizing-design-tab" data-bs-toggle="pill"
                              href="#pills-button-sizing-design" role="tab" aria-controls="pills-button-sizing-design"
                              aria-selected="true">Design</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="pills-button-sizing-html-tab" data-bs-toggle="pill"
                              href="#pills-button-sizing-html" role="tab" aria-controls="pills-button-sizing-html"
                              aria-selected="false">HTML</a>
                          </li>
                        </ul>
                        <!-- Tab content -->
                        <div className="tab-content p-4" id="pills-tabContent-button-sizing">
                          <div className="tab-pane tab-example-design fade show active" id="pills-button-sizing-design"
                            role="tabpanel" aria-labelledby="pills-button-sizing-design-tab">
                            <div className="btn-group btn-group-lg mb-2" role="group" aria-label="Large button group">
                              <button type="button" className="btn btn-primary">Left</button>
                              <button type="button" className="btn btn-primary">Middle</button>
                              <button type="button" className="btn btn-primary">Right</button>
                            </div>
                            <br>
                              <div className="btn-group mb-2" role="group" aria-label="Large button group">
                                <button type="button" className="btn btn-primary">Left</button>
                                <button type="button" className="btn btn-primary">Middle</button>
                                <button type="button" className="btn btn-primary">Right</button>
                              </div>
                              <br>
                                <div className="btn-group btn-group-sm mb-2" role="group" aria-label="Large button group">
                                  <button type="button" className="btn btn-primary">Left</button>
                                  <button type="button" className="btn btn-primary">Middle</button>
                                  <button type="button" className="btn btn-primary">Right</button>
                                </div>
                              </div>
                              <div className="tab-pane tab-example-html fade " id="pills-button-sizing-html" role="tabpanel"
                                aria-labelledby="pills-button-sizing-html-tab">
                                <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Sizing --&gt;</span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group btn-group-lg mb-2<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Large button group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token comment">&lt;!-- Button Sizing --&gt;</span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group mb-2<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token comment">&lt;!-- Button Sizing --&gt;</span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group btn-group-sm mb-2<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Small button group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Left<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Middle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Right<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Sizing -->

                    <!-- Button Nesting -->
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div id="button-nesting" className="mb-4">
                          <h2 className="fw-semi-bold mb-1">Button Nesting</h2>
                          <p>Place a <code className="highlighter-rouge">.btn-group</code> within another
                            <code className="highlighter-rouge">.btn-group</code> when you want dropdown menus mixed with a series
                            of buttons.</p>
                        </div>
                        <!-- Card -->
                        <div className="mb-10 card">
                          <ul className="nav nav-line-bottom " id="pills-tab-button-nesting" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" id="pills-button-nesting-design-tab" data-bs-toggle="pill"
                                href="#pills-button-nesting-design" role="tab" aria-controls="pills-button-nesting-design"
                                aria-selected="true">Design</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-button-nesting-html-tab" data-bs-toggle="pill"
                                href="#pills-button-nesting-html" role="tab" aria-controls="pills-button-nesting-html"
                                aria-selected="false">HTML</a>
                            </li>
                          </ul>
                          <!-- Tab content -->
                          <div className="tab-content p-4" id="pills-tabContent-button-nesting">
                            <div className="tab-pane tab-example-design fade show active" id="pills-button-nesting-design"
                              role="tabpanel" aria-labelledby="pills-button-nesting-design-tab">
                              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button type="button" className="btn btn-primary">1</button>
                                <button type="button" className="btn btn-primary">2</button>
                                <div className="btn-group" role="group">
                                  <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane tab-example-html fade " id="pills-button-nesting-html" role="tabpanel"
                              aria-labelledby="pills-button-nesting-html-tab">
                              <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Nesting --&gt;</span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Button group with nested dropdown<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>1<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>2<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupDrop1<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary dropdown-toggle<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown<span className="token punctuation">"</span></span> <span className="token attr-name">aria-haspopup</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                Dropdown
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-menu<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupDrop1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Button Nesting -->

                    <!-- Button Verticle -->
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div id="vertical-variation" className="mb-4">
                          <h2 className="fw-semi-bold mb-1">Vertical variation</h2>
                          <p>Make a set of buttons appear vertically stacked rather than horizontally.
                            <strong>Split button dropdowns are not supported here.</strong></p>
                        </div>
                        <!-- Card -->
                        <div className="mb-10 card">
                          <ul className="nav nav-line-bottom " id="pills-tab-button-vertical" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" id="pills-button-vertical-design-tab" data-bs-toggle="pill"
                                href="#pills-button-vertical-design" role="tab" aria-controls="pills-button-vertical-design"
                                aria-selected="true">Design</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="pills-button-vertical-html-tab" data-bs-toggle="pill"
                                href="#pills-button-vertical-html" role="tab" aria-controls="pills-button-vertical-html"
                                aria-selected="false">HTML</a>
                            </li>
                          </ul>
                          <!-- Tab content -->
                          <div className="tab-content p-4" id="pills-tabContent-button-vertical">
                            <div className="tab-pane tab-example-design fade show active" id="pills-button-vertical-design"
                              role="tabpanel" aria-labelledby="pills-button-vertical-design-tab">
                              <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                <button type="button" className="btn btn-primary">Button</button>
                                <button type="button" className="btn btn-primary">Button</button>
                                <div className="btn-group" role="group">
                                  <button id="btnGroupVerticalDrop1" type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </button>
                                  <div class="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1"
                                    style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                  </div>
                                </div>
                                <button type="button" className="btn btn-primary">Button</button>
                                <button type="button" className="btn btn-primary">Button</button>
                                <div className="btn-group" role="group">
                                  <button id="btnGroupVerticalDrop2" type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop2">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                  </div>
                                </div>
                                <div className="btn-group" role="group">
                                  <button id="btnGroupVerticalDrop3" type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop3">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                  </div>
                                </div>
                                <div className="btn-group" role="group">
                                  <button id="btnGroupVerticalDrop4" type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop4">
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane tab-example-html fade " id="pills-button-vertical-html" role="tabpanel"
                              aria-labelledby="pills-button-vertical-html-tab">
                              <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Vertical Align --&gt;</span>
                                <span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group-vertical<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Vertical button group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop1<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary dropdown-toggle<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown<span className="token punctuation">"</span></span> <span className="token attr-name">aria-haspopup</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                Dropdown
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-menu<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop1<span className="token punctuation">"</span></span> <span className="token attr-name">x-placement</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>bottom-start<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop2<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary dropdown-toggle<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown<span className="token punctuation">"</span></span> <span className="token attr-name">aria-haspopup</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                Dropdown
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-menu<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop3<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary dropdown-toggle<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown<span className="token punctuation">"</span></span> <span className="token attr-name">aria-haspopup</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                Dropdown
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-menu<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop3<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-group<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop4<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary dropdown-toggle<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown<span className="token punctuation">"</span></span> <span className="token attr-name">aria-haspopup</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                Dropdown
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-menu<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btnGroupVerticalDrop4<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>dropdown-item<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dropdown link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Button Vertical -->
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- Scripts -->
      @@include("../partials/scripts.html")
    </body>
  )
}

