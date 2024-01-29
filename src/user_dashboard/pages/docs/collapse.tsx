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
                    <h1 className="mb-2 ">Collapse</h1>
                    <p className="mb-0 lead text-muted">Toggle the visibility of content across your project with a few
                      classes and our JavaScript plugins.</p>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="collapse" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Example</h2>
                    <p>Click the buttons below to show and hide another element via class changes:
                    </p>
                    <ul>
                      <li><code className="highlighter-rouge">.collapse</code> hides content</li>
                      <li><code className="highlighter-rouge">.collapsing</code> is applied during transitions
                      </li>
                      <li><code className="highlighter-rouge">.collapse.show</code> shows content</li>
                    </ul>
                    <p>You can use a link with the <code className="highlighter-rouge">href</code> attribute, or a button
                      with the <code className="highlighter-rouge">data-bs-target</code> attribute. In both cases, the <code
                        className="highlighter-rouge">data-bs-toggle="collapse"</code> is required.
                    </p>
                  </div>
                 
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tabOne" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-collapse-default-design-tab" data-bs-toggle="pill"
                          href="#pills-collapse-default-design" role="tab" aria-controls="pills-collapse-default-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-collapse-default-html-tab" data-bs-toggle="pill"
                          href="#pills-collapse-default-html" role="tab" aria-controls="pills-collapse-default-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    
                    <div className="tab-content p-4" id="pills-tabOneContent">
                      <div className="tab-pane tab-example-design fade show active" id="pills-collapse-default-design"
                        role="tabpanel" aria-labelledby="pills-collapse-default-design-tab">
                        <p>
                          <a className="btn btn-primary mb-2 mb-md-0" data-bs-toggle="collapse" href="#collapseExample" role="button"
                            aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                          </a>
                          <button className="btn btn-primary " type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-bs-target
                          </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                          <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-collapse-default-html" role="tabpanel"
                        aria-labelledby="pills-collapse-default-html-tab">
                            <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- collapse --&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#collapseExample<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapseExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    Link with href
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#collapseExample<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapseExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    Button with data-bs-target
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapseExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="multiple-targets" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Multiple targets</h2>
                    <p>A <code className="highlighter-rouge">&lt;button&gt;</code> or <code
                        className="highlighter-rouge">&lt;a&gt;</code> can show and hide multiple elements by referencing
                      them with a JQuery selector in its <code className="highlighter-rouge">href</code> or <code
                        className="highlighter-rouge">data-bs-target</code> attribute. Multiple <code
                        className="highlighter-rouge">&lt;button&gt;</code> or <code
                        className="highlighter-rouge">&lt;a&gt;</code> can show and hide an element
                      if they each reference it with their <code className="highlighter-rouge">href</code> or <code
                        className="highlighter-rouge">data-bs-target</code> attribute</p>
                  </div>
                 
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-multiple-collapse-design-tab" data-bs-toggle="pill"
                          href="#pills-multiple-collapse-design" role="tab"
                          aria-controls="pills-multiple-collapse-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-multiple-collapse-html-tab" data-bs-toggle="pill"
                          href="#pills-multiple-collapse-html" role="tab" aria-controls="pills-multiple-collapse-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                   
                    <div className="tab-content p-4" id="pills-tabContent">
                      <div className="tab-pane tab-example-design fade show active" id="pills-multiple-collapse-design"
                        role="tabpanel" aria-labelledby="pills-multiple-collapse-design-tab">
                        <p>
                          <a className="btn btn-primary mb-2 mb-md-0" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                            aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
                          <button className="btn btn-primary mb-2 mb-md-0" type="button" data-bs-toggle="collapse"
                            data-bs-target="#multiCollapseExample2" aria-expanded="false"
                            aria-controls="multiCollapseExample2">Toggle second
                            element</button>
                          <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                            data-bs-target=".multi-collapse" aria-expanded="false"
                            aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle
                            both elements</button>
                        </p>
                        <div className="row">
                          <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                              <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                sapiente ea proident.
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="collapse multi-collapse" id="multiCollapseExample2">
                              <div className="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                sapiente ea proident.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-multiple-collapse-html" role="tabpanel"
                        aria-labelledby="pills-multiple-collapse-html-tab">
                            <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- multiple target collapse --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#multiCollapseExample1<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>multiCollapseExample1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Toggle first element<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#multiCollapseExample2<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>multiCollapseExample2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Toggle second element<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>.multi-collapse<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>multiCollapseExample1 multiCollapseExample2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Toggle both elements<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>row<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>col<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse multi-collapse<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>multiCollapseExample1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>col<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>collapse multi-collapse<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>multiCollapseExample2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>card card-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
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
                  <div id="horizontal" className="mb-4">
                    <h2 className="fw-semi-bold mb-1" >Horizontal</h2>

                  </div>
                 
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-horizontal-collapse-design-tab" data-bs-toggle="pill"
                          href="#pills-horizontal-collapse-design" role="tab"
                          aria-controls="pills-horizontal-collapse-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-horizontal-collapse-html-tab" data-bs-toggle="pill"
                          href="#pills-horizontal-collapse-html" role="tab" aria-controls="pills-horizontal-collapse-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                   
                    <div className="tab-content p-4" id="pills-tabContent">
                      <div className="tab-pane tab-example-design fade show active" id="pills-horizontal-collapse-design"
                        role="tabpanel" aria-labelledby="pills-horizontal-collapse-design-tab">

                        <p>
                          <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                            Toggle width collapse
                          </button>
                        </p>
                        <div style={{minHeight: "120px"}}>
                          <div className="collapse collapse-horizontal" id="collapseWidthExample">
                            <div className="card card-body border shadow-none" style={{width: "300px"}}>
                              This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-horizontal-collapse-html" role="tabpanel"
                        aria-labelledby="pills-horizontal-collapse-html-tab">

                            <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Horizontal --&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>p</span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#collapseWidthExample<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseWidthExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
   Toggle width collapse
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
     <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>p</span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>min-height: 120px;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse collapse-horizontal<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseWidthExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
   <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>card card-body<span className="token punctuation">"</span></span> <span className="token attr-name">style</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>width: 300px;<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
     This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
   <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
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
</body>

  )
}
