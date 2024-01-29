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
                    <h1 className="mb-2 ">Breadcrumb</h1>
                    <p className="mb-0 lead text-muted">Indicate the current page’s location within a navigational hierarchy
                      that automatically adds separators via CSS.</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="breadcrumb" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Breadcrumb</h2>
                    <p>Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-breadcrumb" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-breadcrumb-design-tab" data-bs-toggle="pill"
                          href="#pills-breadcrumb-design" role="tab" aria-controls="pills-breadcrumb-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-breadcrumb-html-tab" data-bs-toggle="pill"
                          href="#pills-breadcrumb-html" role="tab" aria-controls="pills-breadcrumb-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-breadcrumb">
                      <div className="tab-pane tab-example-design fade show active" id="pills-breadcrumb-design"
                        role="tabpanel" aria-labelledby="pills-breadcrumb-design-tab">

                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Home</li>
                          </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                          </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                          </ol>
                        </nav>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-breadcrumb-html" role="tabpanel"
                        aria-labelledby="pills-breadcrumb-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Breadcrumb --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Breadcrumb --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Library<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span>

                          <span className="token comment">&lt;!-- Breadcrumb --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Library<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Data<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="dividers" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Dividers</h2>
                    <p>Dividers are automatically added in CSS through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before"><code>::before</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content"><code>content</code></a>. They can be changed by modifying a local CSS custom property <code>--bs-breadcrumb-divider</code>, or through the <code>$breadcrumb-divider</code> Sass variable — and <code>$breadcrumb-divider-flipped</code> for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time.</p>
                  </div>

                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-breadcrumb-dividers" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-breadcrumb-dividers-design-tab" data-bs-toggle="pill"
                          href="#pills-breadcrumb-dividers-design" role="tab" aria-controls="pills-breadcrumb-dividers-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-breadcrumb-dividers-html-tab" data-bs-toggle="pill"
                          href="#pills-breadcrumb-dividers-html" role="tab" aria-controls="pills-breadcrumb-dividers-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>

                    <div className="tab-content p-4" id="pills-tabContent-breadcrumb-dividers">
                      <div className="tab-pane tab-example-design fade show active" id="pills-breadcrumb-dividers-design"
                        role="tabpanel" aria-labelledby="pills-breadcrumb-dividers-design-tab">
                        <nav
                          //  style="--bs-breadcrumb-divider: '>';"
                          aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                          </ol>
                        </nav>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-breadcrumb-dividers-html" role="tabpanel"
                        aria-labelledby="pills-breadcrumb-dividers-html-tab">

                        <pre><code className="language-markup"> <span className="token comment">&lt;!-- Breadcrumb --&gt;</span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>nav</span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>--bs-breadcrumb-divider: <span className="token punctuation">'</span>&gt;<span className="token punctuation">'</span>;<span className="token punctuation">"</span></span> <span className="token attr-name">aria-label</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>ol</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Home<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>li</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>breadcrumb-item active<span className="token punctuation">"</span></span> <span className="token attr-name">aria-current</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>page<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Library<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>li</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>ol</span><span className="token punctuation">&gt;</span></span>
                          <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>nav</span><span className="token punctuation">&gt;</span></span></code></pre>
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

