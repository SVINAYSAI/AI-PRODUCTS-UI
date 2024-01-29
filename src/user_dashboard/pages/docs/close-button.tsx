import DocSidenav from "../doc-sidenav";

export default function Borders() {
    return (
        <body className="bg-white" >




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
                                        <h1 className="mb-2 ">Close Button</h1>
                                        <p className="mb-0 lead text-muted">A generic close button for dismissing content like modals and alerts.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Examples</h2>
                                        <p className="mb-0">Provide an option to dismiss or close a component with <code>.btn-close</code>. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default <code>background-image</code>. <strong>Be sure to include text for screen readers</strong>, as we’ve done with <code>aria-label</code>.</p>
                                    </div>
                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-closeButton" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-closeButton-design-tab" data-bs-toggle="pill" href="#pills-closeButton-design" role="tab" aria-controls="pills-closeButton-design" aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-closeButton-html-tab" data-bs-toggle="pill" href="#pills-closeButton-html" role="tab" aria-controls="pills-closeButton-html" aria-selected="false">HTML</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content p-4" id="pills-tabContent-closeButton">
                                            <div className="tab-pane tab-example-design fade show active  bg-light p-4" id="pills-closeButton-design" role="tabpanel" aria-labelledby="pills-closeButton-design-tab">
                                                <button type="button" className="btn-close" aria-label="Close"></button>
                                            </div>
                                            <div className="tab-pane tab-example-html fade" id="pills-closeButton-html" role="tabpanel" aria-labelledby="pills-closeButton-html-tab">
                                                <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- close button --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-close<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Close<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Disabled state</h2>
                                        <p className="mb-0">Disabled close buttons change their <code>opacity</code>. We’ve also applied <code>pointer-events: none</code> and <code>user-select: none</code> to preventing hover and active states from triggering.</p>
                                    </div>
                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-disabledButton" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-disabledButton-design-tab" data-bs-toggle="pill" href="#pills-disabledButton-design" role="tab" aria-controls="pills-disabledButton-design" aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-disabledButton-html-tab" data-bs-toggle="pill" href="#pills-disabledButton-html" role="tab" aria-controls="pills-disabledButton-html" aria-selected="false">HTML</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content p-4" id="pills-tabContent-disabledButton">
                                            <div className="tab-pane tab-example-design fade show active bg-light p-4" id="pills-disabledButton-design" role="tabpanel" aria-labelledby="pills-disabledButton-design-tab">
                                                <button type="button" className="btn-close" disabled aria-label="Close"></button>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-disabledButton-html" role="tabpanel" aria-labelledby="pills-disabledButton-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Disabled state --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-close<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Close<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">White variant</h2>
                                        <p className="mb-0">Change the default <code>.btn-close</code> to be white with the <code>.btn-close-white</code> class. This class uses the <code>filter</code> property to invert the <code>background-image</code>.</p>
                                    </div>
                                    <div className="mb-10 card">
                                        <ul className="nav nav-line-bottom" id="pills-tab-whiteVarient" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-whiteVarient-design-tab" data-bs-toggle="pill" href="#pills-whiteVarient-design" role="tab" aria-controls="pills-whiteVarient-design" aria-selected="true">Design</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-whiteVarient-html-tab" data-bs-toggle="pill" href="#pills-whiteVarient-html" role="tab" aria-controls="pills-whiteVarient-html" aria-selected="false">HTML</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content p-4" id="pills-tabContent-whiteVarient">
                                            <div className="tab-pane tab-example-design fade show active bg-dark p-4" id="pills-whiteVarient-design" role="tabpanel" aria-labelledby="pills-whiteVarient-design-tab">
                                                <button type="button" className="btn-close btn-close-white" aria-label="Close"></button>
                                                <button type="button" className="btn-close btn-close-white" disabled aria-label="Close"></button>
                                            </div>
                                            <div className="tab-pane tab-example-html fade " id="pills-whiteVarient-html" role="tabpanel" aria-labelledby="pills-whiteVarient-html-tab">

                                                <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- White variant --&gt;</span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-close btn-close-white<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Close<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn-close btn-close-white<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Close<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

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


