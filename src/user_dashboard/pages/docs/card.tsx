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
              <DocSidenav />
            </div>
            <div className="col-lg-8 col-12 p-8">
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-2 ">Card</h1>
                    <p className="mb-0 lead text-muted">Dash ui cards provide a flexible and extensible content container with
                      multiple variants and options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="card" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Basic Example</h2>
                    <p className="mb-0">Below is an example of a basic card with mixed content and a fixed width.</p>
                  </div>
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-card-basic" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-card-basic-design-tab" data-bs-toggle="pill"
                          href="#pills-card-basic-design" role="tab" aria-controls="pills-card-basic-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-card-basic-html-tab" data-bs-toggle="pill"
                          href="#pills-card-basic-html" role="tab" aria-controls="pills-card-basic-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <div className="tab-content p-4" id="pills-tabContent-card-basic">
                      <div className="tab-pane tab-example-design fade show active " id="pills-card-basic-design"
                        role="tabpanel" aria-labelledby="pills-card-basic-design-tab">
                        <div className="card" style={{ width: "265px" }}>
                          <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="" />
                          <div className="card-body">
                            <h5 className="card-title h3">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                              of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-card-basic-html" role="tabpanel"
                        aria-labelledby="pills-card-basic-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Basic --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>width: 20rem;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span><span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Some quick example text to build on the card title and make up the bulk of the card's content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Go somewhere<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="content-types" className="mb-4">
                    <div id="body">
                      <h2 className="fw-semi-bold mb-1">Card Body</h2>
                      <p>The building block of a card is the <code className="highlighter-rouge">.card-body</code>. Use it
                        whenever you need a padded section within a card.</p>
                    </div>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-card-content" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-card-content-design-tab" data-bs-toggle="pill"
                          href="#pills-card-content-design" role="tab" aria-controls="pills-card-content-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-card-content-html-tab" data-bs-toggle="pill"
                          href="#pills-card-content-html" role="tab" aria-controls="pills-card-content-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-card-content">
                      <div className="tab-pane tab-example-design fade show active " id="pills-card-content-design"
                        role="tabpanel" aria-labelledby="pills-card-content-design-tab">
                        <div className="card">
                          <div className="card-body">
                            This is some text within a card body.
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-card-content-html" role="tabpanel"
                        aria-labelledby="pills-card-content-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- card body --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          This is some text within a card body.
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="titles-text-links" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Titles, text, and links</h2>
                    <p>Card titles are used by adding <code className="highlighter-rouge">.card-title</code> to a <code
                      className="highlighter-rouge">&lt;h*&gt;</code> tag. In the same way, links are added and placed
                      next to each other by adding
                      <code className="highlighter-rouge">.card-link</code> to an <code
                        className="highlighter-rouge">&lt;a&gt;</code> tag.</p>
                    <p>Subtitles are used by adding a <code className="highlighter-rouge">.card-subtitle</code> to a <code
                      className="highlighter-rouge">&lt;h*&gt;</code> tag. If the <code
                        className="highlighter-rouge">.card-title</code> and the
                      <code className="highlighter-rouge">.card-subtitle</code> items are placed in a
                      <code className="highlighter-rouge">.card-body</code> item, the card title and subtitle are aligned
                      nicely.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-titels" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-titels-design-tab" data-bs-toggle="pill"
                          href="#pills-titels-design" role="tab" aria-controls="pills-titels-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-titels-html-tab" data-bs-toggle="pill" href="#pills-titels-html"
                          role="tab" aria-controls="pills-titels-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-titels">
                      <div className="tab-pane tab-example-design fade show active " id="pills-titels-design" role="tabpanel"
                        aria-labelledby="pills-titels-design-tab">
                        <div className="card" style={{ maxWidth: "20rem" }}>
                          <div className="card-body">
                            <h5 className="card-title h3">Card title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                              of the card's content.</p>
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-titels-html" role="tabpanel"
                        aria-labelledby="pills-titels-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Title Text --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>width: 18rem;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h6</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-subtitle mb-2 text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card subtitle<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h6</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Some quick example text to build on the card title and make up the bulk of the card's content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Another link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                        </code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>






              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="kitchen-sink" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Kitchen sink</h2>
                    <p>Mix and match multiple content types to create the card you need, or throw everything in there.
                      Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width
                      card.</p>
                  </div>
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-card-kitchen-sink" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-card-kitchen-sink-design-tab" data-bs-toggle="pill"
                          href="#pills-card-kitchen-sink-design" role="tab"
                          aria-controls="pills-card-kitchen-sink-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-card-kitchen-sink-html-tab" data-bs-toggle="pill"
                          href="#pills-card-kitchen-sink-html" role="tab" aria-controls="pills-card-kitchen-sink-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <div className="tab-content p-4" id="pills-tabContent-card-kitchen-sink">
                      <div className="tab-pane tab-example-design fade show active  " id="pills-card-kitchen-sink-design"
                        role="tabpanel" aria-labelledby="pills-card-kitchen-sink-design-tab">
                        <div className="card" style={{ width: "265px" }}>
                          <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title h3">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk
                              of the card's content.</p>
                          </div>
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                          </ul>
                          <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-card-kitchen-sink-html" role="tabpanel"
                        aria-labelledby="pills-card-kitchen-sink-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Kitchen Sink --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>width: 20rem;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Some quick example text to build on the card title and make up the bulk of the card's content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ul</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>list-group list-group-flush<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>list-group-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Cras justo odio<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>list-group-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dapibus ac facilisis in<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>list-group-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Vestibulum at eros<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ul</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-link<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Another link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="header-footer" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Header and Footer</h2>
                    <p>Add an optional header and/or footer within a card.</p>
                  </div>

                  <div className="mb-6 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-header-footer" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-header-footer-design-tab" data-bs-toggle="pill"
                          href="#pills-header-footer-design" role="tab" aria-controls="pills-header-footer-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-header-footer-html-tab" data-bs-toggle="pill"
                          href="#pills-header-footer-html" role="tab" aria-controls="pills-header-footer-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-header-footer">
                      <div className="tab-pane tab-example-design fade show active " id="pills-header-footer-design"
                        role="tabpanel" aria-labelledby="pills-header-footer-design-tab">
                        <div className="card">
                          <div className="card-header">
                            Featured
                          </div>
                          <div className="card-body">
                            <h5 className="card-title h3">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-header-footer-html" role="tabpanel"
                        aria-labelledby="pills-header-footer-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Header & Footer --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-header<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          Featured
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Special title treatment<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>With supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Go somewhere<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tabcard-headerfooter-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-card-headerfooter-center-design-tab" data-bs-toggle="pill"
                          href="#pills-card-headerfooter-center-design" role="tab"
                          aria-controls="pills-card-headerfooter-center-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-card-headerfooter-center-html-tab" data-bs-toggle="pill"
                          href="#pills-card-headerfooter-center-html" role="tab"
                          aria-controls="pills-card-headerfooter-center-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-card-headerfooter-center">
                      <div className="tab-pane tab-example-design fade show active "
                        id="pills-card-headerfooter-center-design" role="tabpanel"
                        aria-labelledby="pills-card-headerfooter-center-design-tab">
                        <div className="card text-center">
                          <div className="card-header">
                            Featured
                          </div>
                          <div className="card-body">
                            <h5 className="card-title h3">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                          <div className="card-footer text-muted">
                            2 days ago
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-card-headerfooter-center-html"
                        role="tabpanel" aria-labelledby="pills-card-headerfooter-center-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Center alignment --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card text-center<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-header<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          Featured
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Special title treatment<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>With supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Go somewhere<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-footer text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          2 days ago
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="text-alignment" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Text alignment</h2>
                    <p>You can quickly change the text alignment of any card—in its entirety or specific parts—with our
                      text align classes.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-textalign-card" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-textalign-card-design-tab" data-bs-toggle="pill"
                          href="#pills-textalign-card-design" role="tab" aria-controls="pills-textalign-card-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-textalign-card-html-tab" data-bs-toggle="pill"
                          href="#pills-textalign-card-html" role="tab" aria-controls="pills-textalign-card-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-textalign-card">
                      <div className="tab-pane tab-example-design fade show active " id="pills-textalign-card-design"
                        role="tabpanel" aria-labelledby="pills-textalign-card-design-tab">
                        <div className="card mb-3" style={{ width: "18rem" }}>
                          <div className="card-body">
                            <h5 className="card-title h3">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                        <div className="card mb-3 text-center" style={{ width: "18rem" }}>
                          <div className="card-body">
                            <h5 className="card-title h3">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                        <div className="card mb-3 text-end" style={{ width: "18rem" }}>
                          <div className="card-body">
                            <h5 className="card-title h3">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.
                            </p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-textalign-card-html" role="tabpanel"
                        aria-labelledby="pills-textalign-card-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Text alignment --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>width: 18rem;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Special title treatment<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>With supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Go somewhere<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card text-center<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>width: 18rem;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Special title treatment<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>With supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Go somewhere<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card text-end<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>width: 18rem;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Special title treatment<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>With supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Go somewhere<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="images" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Images</h2>
                    <p>Cards include a few options for working with images. Choose from appending “image caps” at either
                      end of a card, overlaying images with card content, or simply embedding the image in a card.</p>

                  </div>

                  <div id="image-on-top">
                    <div className="mb-3">
                      <h3 className="mb-1 fw-semi-bold">Image on Top</h3>
                      <p className="mb-0"><code>.card-img-top</code> places an image to the top of the card. With <code>.card-text</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.</p>
                    </div>
                    <div className="mb-10 card">
                      <ul className="nav nav-line-bottom" id="pills-tab-image-card" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-image-card-design-tab" data-bs-toggle="pill"
                            href="#pills-image-card-design" role="tab" aria-controls="pills-image-card-design"
                            aria-selected="true">Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-image-card-html-tab" data-bs-toggle="pill"
                            href="#pills-image-card-html" role="tab" aria-controls="pills-image-card-html"
                            aria-selected="false">HTML</a>
                        </li>
                      </ul>


                      <div className="tab-content p-4" id="pills-tabContent-image-card">
                        <div className="tab-pane tab-example-design fade show active " id="pills-image-card-design"
                          role="tabpanel" aria-labelledby="pills-image-card-design-tab">
                          <div className="card">
                            <img src="../assets/images/blog/blog-img-1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title h3">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3
                                mins ago</small></p>
                            </div>
                          </div>

                        </div>
                        <div className="tab-pane tab-example-html fade " id="pills-image-card-html" role="tabpanel"
                          aria-labelledby="pills-image-card-html-tab">

                          <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Image on Top --&gt;</span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/blog/blog-img-1.jpg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>small</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3
                            mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>small</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>


                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="image-on-bottom">
                    <div className="mb-3">
                      <h3 className="mb-1 fw-semi-bold">Image on Bottom</h3>
                      <p className="mb-0"><code>.card-img-bottom</code> places an image to the bottom of the card. With <code>.card-text</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.</p>
                    </div>
                    <div className="mb-10 card">
                      <ul className="nav nav-line-bottom" id="pills-tab-image-card-bottom" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="pills-image-card-bottom-design-tab" data-bs-toggle="pill"
                            href="#pills-image-card-bottom-design" role="tab" aria-controls="pills-image-card-bottom-design"
                            aria-selected="true">Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="pills-image-card-bottom-html-tab" data-bs-toggle="pill"
                            href="#pills-image-card-bottom-html" role="tab" aria-controls="pills-image-card-bottom-html"
                            aria-selected="false">HTML</a>
                        </li>
                      </ul>

                      <div className="tab-content p-4" id="pills-tabContent-image-card-bottom">
                        <div className="tab-pane tab-example-design fade show active " id="pills-image-card-bottom-design"
                          role="tabpanel" aria-labelledby="pills-image-card-bottom-design-tab">
                          <div className="card">

                            <div className="card-body">
                              <h5 className="card-title h3">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3
                                mins ago</small></p>
                            </div>
                            <img src="../assets/images/blog/blog-img-1.jpg" className="card-img-bottom" alt="..." />
                          </div>

                        </div>
                        <div className="tab-pane tab-example-html fade " id="pills-image-card-bottom-html" role="tabpanel"
                          aria-labelledby="pills-image-card-html-bottom-tab">

                          <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Image on bottom --&gt;</span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>small</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3
                            mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>small</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/blog/blog-img-1.jpg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-bottom<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="image-overlays" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Image overlays</h2>
                    <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you
                      may or may not need additional styles or utilities.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-image-overlay" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-image-overlay-design-tab" data-bs-toggle="pill"
                          href="#pills-image-overlay-design" role="tab" aria-controls="pills-image-overlay-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-image-overlay-html-tab" data-bs-toggle="pill"
                          href="#pills-image-overlay-html" role="tab" aria-controls="pills-image-overlay-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-image-overlay">
                      <div className="tab-pane tab-example-design fade show active " id="pills-image-overlay-design"
                        role="tabpanel" aria-labelledby="pills-image-overlay-design-tab">
                        <div className="card text-white">
                          <img src="../assets/images/blog/blog-img-1.jpg" className="rounded" alt="..." />
                          <div className="card-img-overlay">
                            <h5 className="card-title h3 text-white">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                              additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-image-overlay-html" role="tabpanel"
                        aria-labelledby="pills-image-overlay-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- image overlay --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card bg-dark text-white<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>rounded<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-img-overlay<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3 mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="horizontal" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Horizontal</h2>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with <code>.g-0</code> and use <code>.col-md-*</code> classes to make the card horizontal at the <code>md</code> breakpoint. Further adjustments may be needed depending on your card content.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-horizontal" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-horizontal-design-tab" data-bs-toggle="pill"
                          href="#pills-horizontal-design" role="tab" aria-controls="pills-horizontal-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-horizontal-html-tab" data-bs-toggle="pill"
                          href="#pills-horizontal-html" role="tab" aria-controls="pills-horizontal-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-horizontal">
                      <div className="tab-pane tab-example-design fade show active " id="pills-horizontal-design"
                        role="tabpanel" aria-labelledby="pills-horizontal-design-tab">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img src="../assets/images/background/profile-cover.jpg" className="img-fluid rounded-start h-100" alt="..." />
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title h3">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-horizontal-html" role="tabpanel"
                        aria-labelledby="pills-horizontal-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Horizontal --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card mb-3<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>max-width: 540px;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>row g-0<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>col-md-4<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/blog/blog-img-1.jpg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>img-fluid rounded-start h-100<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>col-md-8<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>small</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3 mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>small</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="card-layout" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Card layout</h2>
                    <p>In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, these layout options are not yet responsive.</p>
                  </div>
                  <div id="card-groups" className="mb-4">
                    <h3 className="fw-semi-bold mb-1">Card groups</h3>
                    <p>Use card groups to render cards as a single, attached element with equal width and height columns. Card groups start off stacked and use <code>display: flex;</code> to become attached with uniform dimensions starting at the <code>sm</code> breakpoint.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab-card-group" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-card-group-design-tab" data-bs-toggle="pill"
                          href="#pills-card-group-design" role="tab" aria-controls="pills-card-group-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-card-group-html-tab" data-bs-toggle="pill"
                          href="#pills-card-group-html" role="tab" aria-controls="pills-card-group-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <div className="tab-content p-4" id="pills-tabContent-card-group">
                      <div className="tab-pane tab-example-design fade show active " id="pills-card-group-design"
                        role="tabpanel" aria-labelledby="pills-card-group-design-tab">
                        <div className="card-group">
                          <div className="card">
                            <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title h3">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div className="card">
                            <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title h3">Card title</h5>
                              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                          <div className="card">
                            <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title h3">Card title</h5>
                              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-card-group-html" role="tabpanel"
                        aria-labelledby="pills-card-group-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Card group --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-group<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>small</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3 mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>small</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This card has supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>small</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3 mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>small</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>small</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>text-muted<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Last updated 3 mins ago<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>small</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                        </code></pre>

                      </div>
                    </div>
                  </div>
                  <div id="grid-cards" className="mb-4">
                    <h3 className="fw-semi-bold mb-1">Grid cards</h3>
                    <p>Use the Bootstrap grid system and its.row-cols classes to control how many grid columns (wrapped around your cards) you show per row. For example, here’s <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.</p>
                  </div>

                  <div>
                    <ul className="nav nav-line-bottom" id="pills-tab-grid-card" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-grid-card-design-tab" data-bs-toggle="pill"
                          href="#pills-grid-card-design" role="tab" aria-controls="pills-grid-card-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-grid-card-html-tab" data-bs-toggle="pill"
                          href="#pills-grid-card-html" role="tab" aria-controls="pills-grid-card-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-grid-card">
                      <div className="tab-pane tab-example-design fade show active " id="pills-grid-card-design"
                        role="tabpanel" aria-labelledby="pills-grid-card-design-tab">
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                          <div className="col">
                            <div className="card">
                              <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title h3">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card">
                              <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title h3">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card">
                              <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title h3">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="card">
                              <img src="../assets/images/placeholder/placeholder-4by3.svg" className="card-img-top" alt="..." />
                              <div className="card-body">
                                <h5 className="card-title h3">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-grid-card-html" role="tabpanel"
                        aria-labelledby="pills-grid-card-html-tab">

                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Card group --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>row row-cols-1 row-cols-md-2 g-4<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>col<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>col<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>col<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a longer card with supporting text below as a natural lead-in to additional content.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>col<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>img</span> <span className="token attr-name">src</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>../assets/images/placeholder/placeholder-4by3.svg<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-img-top<span className="token punctuation">"</span></span> <span className="token attr-name">alt</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>...<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h5</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-title<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Card title<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h5</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card-text<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
      </div>
    </body >
  )
}


