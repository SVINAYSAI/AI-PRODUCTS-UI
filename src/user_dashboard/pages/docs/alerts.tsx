import React from "react"
import DocNavbar from "../doc-navbar"
import DocSidenav from "../doc-sidenav"

export default function Alerts() {
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
                                        <h1 className="mb-2 ">Alerts</h1>
                                        <p className="mb-6 lead text-muted">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="simple-alert" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Simple Alert </h2>
                                        <p>Alerts are available for any length of text, as well as an optional dismiss button. For proper
                                            styling, use one of the eight</p> <strong>required</strong> contextual classes (e.g.,
                                        <code>.alert-success</code>).
                                    </div>

                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom nav-example mb-3" id="pills-tab-alert-simple" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-alert-simple-design-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-simple-design" role="tab" aria-controls="pills-alert-simple-design"
                                                    aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-alert-simple-html-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-simple-html" role="tab" aria-controls="pills-alert-simple-html"
                                                    aria-selected="false">HTML</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content p-4" id="pills-tabContent-alert-simple">
                                            <div className="tab-pane tab-example-design fade show active" id="pills-alert-simple-design"
                                                role="tabpanel" aria-labelledby="pills-alert-simple-design-tab">

                                                <div className="alert alert-primary" role="alert">
                                                    This is a primary alert—check it out!
                                                </div>

                                                <div className="alert alert-secondary" role="alert">
                                                    This is a secondary alert—check it out!
                                                </div>


                                                <div className="alert alert-success" role="alert">
                                                    This is a success alert—check it out!
                                                </div>


                                                <div className="alert alert-danger" role="alert">
                                                    This is a danger alert—check it out!
                                                </div>


                                                <div className="alert alert-warning" role="alert">
                                                    This is a warning alert—check it out!
                                                </div>


                                                <div className="alert alert-info" role="alert">
                                                    This is a info alert—check it out!
                                                </div>


                                                <div className="alert alert-light" role="alert">
                                                    This is a light alert—check it out!
                                                </div>


                                                <div className="alert alert-dark" role="alert">
                                                    This is a dark alert—check it out!
                                                </div>
                                            </div>
                                            <div className="tab-pane tab-example-html fade" id="pills-alert-simple-html" role="tabpanel"
                                                aria-labelledby="pills-alert-simple-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Primary alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-primary<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a primary alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Secondary alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-secondary<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a secondary alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Success alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-success<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a success alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Danger alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-danger<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a danger alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Warning alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-warning<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a warning alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Info alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-info<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a info alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Light alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-light<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a light alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Dark alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-dark<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    This is a dark alert—check it out!
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                </code></pre>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="live-alert" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Live Alert</h2>
                                        <p>Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button.</p>
                                    </div>

                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-alert-live" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-alert-live-design-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-live-design" role="tab" aria-controls="pills-alert-live-design"
                                                    aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-alert-live-html-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-live-html" role="tab" aria-controls="pills-alert-live-html"
                                                    aria-selected="false">HTML</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content p-4" id="pills-tabContent-alert-live">
                                            <div className="tab-pane tab-example-design fade show active" id="pills-alert-live-design"
                                                role="tabpanel" aria-labelledby="pills-alert-live-design-tab">
                                                <div id="liveAlertPlaceholder"></div>
                                                <button type="button" className="btn btn-primary" id="liveAlertBtn">Show live alert</button>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-alert-live-html" role="tabpanel"
                                                aria-labelledby="pills-alert-live-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Live Alert --&gt;</span>

                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>liveAlertBtn<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Show live alert<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-primary alert-dismissible<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>liveAlert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>strong</span><span className="token punctuation">&gt;</span></span>Nice!<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>strong</span><span className="token punctuation">&gt;</span></span> You've triggered this alert.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-close<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-dismiss</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Close<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="link-alert" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Link color </h2>
                                        <p>Use the <code className="highlighter-rouge">.alert-link</code> utility class to quickly provide
                                            matching colored links within any alert.</p>
                                    </div>

                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom " id="pills-tab-alert-link" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-alert-link-design-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-link-design" role="tab" aria-controls="pills-alert-link-design"
                                                    aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-alert-link-html-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-link-html" role="tab" aria-controls="pills-alert-link-html"
                                                    aria-selected="false">HTML</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content p-4" id="pills-tabContent-alert-link">
                                            <div className="tab-pane tab-example-design fade show active" id="pills-alert-link-design"
                                                role="tabpanel" aria-labelledby="pills-alert-link-design-tab">

                                                <div className="alert alert-primary" role="alert">
                                                    A simple primary alert with <a href="#" className="alert-link">an
                                                        example link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-secondary" role="alert">
                                                    A simple secondary alert with <a href="#" className="alert-link">an
                                                        example link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-success" role="alert">
                                                    A simple success alert with <a href="#" className="alert-link">an
                                                        example link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-danger" role="alert">
                                                    A simple danger alert with <a href="#" className="alert-link">an example
                                                        link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-warning" role="alert">
                                                    A simple warning alert with <a href="#" className="alert-link">an
                                                        example link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-info" role="alert">
                                                    A simple info alert with <a href="#" className="alert-link">an example
                                                        link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-light" role="alert">
                                                    A simple light alert with <a href="#" className="alert-link">an example
                                                        link</a>. Give it a click if you like.
                                                </div>

                                                <div className="alert alert-dark" role="alert">
                                                    A simple dark alert with <a href="#" className="alert-link">an example
                                                        link</a>. Give it a click if you like.
                                                </div>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-alert-link-html" role="tabpanel"
                                                aria-labelledby="pills-alert-link-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Primary alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-primary<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple primary alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an
                                                    example link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Secondary alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-secondary<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple secondary alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an
                                                    example link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Success alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-success<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple success alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an
                                                    example link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Danger alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-danger<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple danger alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an example
                                                    link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Warning alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-warning<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple warning alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an
                                                    example link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Info alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-info<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple info alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an example
                                                    link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Light alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-light<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple light alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an example
                                                    link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Dark alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-dark<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    A simple dark alert with <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>an example
                                                    link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>. Give it a click if you like.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="additional-content" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Additional content </h2>
                                        <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>
                                    </div>

                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-alert-additional" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-alert-additional-design-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-additional-design" role="tab" aria-controls="pills-alert-additional-design"
                                                    aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-alert-additional-html-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-additional-html" role="tab" aria-controls="pills-alert-additional-html"
                                                    aria-selected="false">HTML</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content p-4" id="pills-tabContent-alert-additional">
                                            <div className="tab-pane tab-example-design fade show active" id="pills-alert-additional-design"
                                                role="tabpanel" aria-labelledby="pills-alert-additional-design-tab">
                                                <div className="alert alert-success" role="alert">
                                                    <h4 className="alert-heading">Well done!</h4>
                                                    <p>Aww yeah, you successfully read this important alert message. This example text is going to
                                                        run a bit longer so that you can see how spacing within an alert works with this kind of
                                                        content.
                                                    </p>
                                                    {/* <hr> */}
                                                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and
                                                        tidy.</p>
                                                </div>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-alert-additional-html" role="tabpanel"
                                                aria-labelledby="pills-alert-additional-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Additional content --&gt;</span>

                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert alert-success<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h4</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert-heading<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Well done!<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h4</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>hr</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>mb-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="alert-icons" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Icons </h2>
                                        <p>Similarly, you can use  <a href="https://icons.getbootstrap.com/">Bootstrap Icons</a> to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.</p>
                                    </div>

                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-alert-icon" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-alert-icon-design-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-icon-design" role="tab" aria-controls="pills-alert-icon-design"
                                                    aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-alert-icon-html-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-icon-html" role="tab" aria-controls="pills-alert-icon-html"
                                                    aria-selected="false">HTML</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content p-4" id="pills-tabContent-alert-icon">
                                            <div className="tab-pane tab-example-design fade show active" id="pills-alert-icon-design"
                                                role="tabpanel" aria-labelledby="pills-alert-icon-design-tab">


                                                <div className="alert alert-primary d-flex align-items-center" role="alert">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle-fill me-2" viewBox="0 0 16 16">
                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                                    </svg>
                                                    <div>
                                                        An example alert with an icon
                                                    </div>
                                                </div>

                                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                    <div>
                                                        An example success alert with an icon
                                                    </div>
                                                </div>

                                                <div className="alert alert-warning d-flex align-items-center" role="alert">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill me-2" viewBox="0 0 16 16">
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                    <div>
                                                        An example warning alert with an icon
                                                    </div>
                                                </div>

                                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill me-2" viewBox="0 0 16 16">
                                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg>
                                                    <div>
                                                        An example danger alert with an icon
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-alert-icon-html" role="tabpanel"
                                                aria-labelledby="pills-alert-icon-html-tab">
                                                <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Primary alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-primary d-flex align-items-center<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>svg</span> <span className="token attr-name">xmlns</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>http://www.w3.org/2000/svg<span className="token punctuation">"</span></span> <span className="token attr-name">width</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">height</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">fill</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>currentColor<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>bi bi-info-circle-fill me-2<span className="token punctuation">"</span></span> <span className="token attr-name">viewBox</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>0 0 16 16<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>path</span> <span className="token attr-name">d</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z<span className="token punctuation">"</span></span><span className="token punctuation">/&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>svg</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    An example alert with an icon
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Success alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-success d-flex align-items-center<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>svg</span> <span className="token attr-name">xmlns</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>http://www.w3.org/2000/svg<span className="token punctuation">"</span></span> <span className="token attr-name">width</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">height</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">fill</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>currentColor<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>bi bi-check-circle-fill me-2<span className="token punctuation">"</span></span> <span className="token attr-name">viewBox</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>0 0 16 16<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>path</span> <span className="token attr-name">d</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z<span className="token punctuation">"</span></span><span className="token punctuation">/&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>svg</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    An example success alert with an icon
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Warning alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-warning d-flex align-items-center<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>svg</span> <span className="token attr-name">xmlns</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>http://www.w3.org/2000/svg<span className="token punctuation">"</span></span> <span className="token attr-name">width</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">height</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">fill</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>currentColor<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>bi bi-exclamation-triangle-fill me-2<span className="token punctuation">"</span></span> <span className="token attr-name">viewBox</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>0 0 16 16<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>path</span> <span className="token attr-name">d</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z<span className="token punctuation">"</span></span><span className="token punctuation">/&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>svg</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    An example warning alert with an icon
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>

                                                    <span className="token comment">&lt;!-- Danger alert --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert alert-danger d-flex align-items-center<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>svg</span> <span className="token attr-name">xmlns</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>http://www.w3.org/2000/svg<span className="token punctuation">"</span></span> <span className="token attr-name">width</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">height</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>24<span className="token punctuation">"</span></span> <span className="token attr-name">fill</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>currentColor<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>bi bi-exclamation-triangle-fill me-2<span className="token punctuation">"</span></span> <span className="token attr-name">viewBox</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>0 0 16 16<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>path</span> <span className="token attr-name">d</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z<span className="token punctuation">"</span></span><span className="token punctuation">/&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>svg</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    An example danger alert with an icon
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="dismissing" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Dismissing </h2>
                                        <p>Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:</p>
                                    </div>

                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-alert-dismissing" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-alert-dismissing-design-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-dismissing-design" role="tab" aria-controls="pills-alert-dismissing-design"
                                                    aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-alert-dismissing-html-tab" data-bs-toggle="pill"
                                                    href="#pills-alert-dismissing-html" role="tab" aria-controls="pills-alert-dismissing-html"
                                                    aria-selected="false">HTML</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content p-4" id="pills-tabContent-alert-dismissing">
                                            <div className="tab-pane tab-example-design fade show active" id="pills-alert-dismissing-design"
                                                role="tabpanel" aria-labelledby="pills-alert-dismissing-design-tab">
                                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">

                                                    </button>
                                                </div>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-alert-dismissing-html" role="tabpanel"
                                                aria-labelledby="pills-alert-dismissing-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Dismissing alert --&gt;</span>

                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert alert-warning alert-dismissible fade show<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>strong</span><span className="token punctuation">&gt;</span></span>Holy guacamole!<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>strong</span><span className="token punctuation">&gt;</span></span> You should check in on some of those fields below.
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn-close<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-dismiss</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>alert<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>Close<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">aria-hidden</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token entity" title="×">&amp;times;</span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

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