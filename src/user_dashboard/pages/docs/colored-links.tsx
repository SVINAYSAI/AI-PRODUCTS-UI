import DocNavbar from "../doc-navbar";
import DocSidenav from "../doc-sidenav";

export default function Borders() {
  return (
    <body className="bg-white">
  

  {/* @@include("../partials/doc-navbar.html") */}
    <DocNavbar/>

    <div className="pt-9"/>
      <div className="container-fluid"/>
            <div className="row"/>
            <div className="col-lg-2 col-12 bg-white position-sticky">
                @@include("../partials/doc-sidenav.html")
                <DocSidenav/>
            </div>
            <div className="col-lg-8 col-12 p-8"/>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="mb-7" id="intro">
                    <h1 className="mb-2">Colored links</h1>
                    <p className="mb-0 lead text-muted">Colored links with hover states
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="links" className="mb-4">

                    <p>You can use the <code>.link-*</code> classes to colorize links. Unlike the <code>.text-*</code> classes, these classes have a <code>:hover</code> and <code>:focus</code> state.</p>

                  </div>
                  
                  <div className="card">
                    <ul className="nav nav-line-bottom " id="pills-tab-links" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-links-design-tab" data-bs-toggle="pill"
                          href="#pills-links-design" role="tab" aria-controls="pills-links-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-links-html-tab" data-bs-toggle="pill" href="#pills-links-html"
                          role="tab" aria-controls="pills-links-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    
                    <div className="tab-content p-4" id="pills-tabContent-links">
                      <div className="tab-pane tab-example-design fade show active" id="pills-links-design"
                        role="tabpanel" aria-labelledby="pills-links-design-tab">
                        <a href="#" className="link-primary">Primary link</a>
                        <a href="#" className="link-secondary">Secondary link</a>
                        <a href="#" className="link-success">Success link</a>
                        <a href="#" className="link-danger">Danger link</a>
                        <a href="#" className="link-warning">Warning link</a>
                        <a href="#" className="link-info">Info link</a>
                        <a href="#" className="link-light">Light link</a>
                        <a href="#" className="link-dark">Dark link</a>
                      
                      <div className="tab-pane tab-example-html fade " id="pills-links-html" role="tabpanel"
                        aria-labelledby="pills-links-html-tab">
                        <pre><code className="language-markup"><span className="token comment">&lt;!-- primary link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- secondary link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-secondary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- success link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-success<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- danger link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-danger<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- warning link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-warning<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- info link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-info<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- light link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-light<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>br</span><span className="token punctuation">&gt;</span></span>

 <span className="token comment">&lt;!-- dark link--&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>link-dark<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
</body>

  )
}

