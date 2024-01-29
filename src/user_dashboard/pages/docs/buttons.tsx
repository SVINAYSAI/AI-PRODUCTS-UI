import React from "react";
import DocNavbar from "../doc-navbar";

export default function Borders() {
  return (
    <body className="bg-white">


  @@include("../partials/doc-navbar.html")
    <DocNavbar/>

    <div className="pt-9">
      <div className="container-fluid">
            <div className="row">
            <div className="col-lg-2 col-12 bg-white position-sticky">
                @@include("../partials/doc-sidenav.html")
            </div>
   
    <div className="col-lg-8 col-12 p-8">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="mb-7" id="intro">
                    <h1 className="mb-2 ">Buttons</h1>
                    <p className="mb-0 lead text-muted">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="button" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Buttons</h2>
                    <p>Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
                  </div>
                
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-simple-button-design-tab" data-bs-toggle="pill"
                          href="#pills-simple-button-design" role="tab" aria-controls="pills-simple-button-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-simple-button-html-tab" data-bs-toggle="pill"
                          href="#pills-simple-button-html" role="tab" aria-controls="pills-simple-button-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                   
                    <div className="tab-content p-4" id="pills-tabContent-button">
                      <div className="tab-pane tab-example-design fade show active" id="pills-simple-button-design"
                        role="tabpanel" aria-labelledby="pills-simple-button-design-tab">
                    
                        <button type="button" className="btn btn-primary mb-2">Primary</button>

                        
                        <button type="button" className="btn btn-secondary mb-2">Secondary</button>

                    
                        <button type="button" className="btn btn-success mb-2">Success</button>

                  
                        <button type="button" className="btn btn-danger mb-2">Danger</button>

                    
                        <button type="button" className="btn btn-warning mb-2">Warning</button>

              
                        <button type="button" className="btn btn-info mb-2">Info</button>

                
                        <button type="button" className="btn btn-light mb-2">Light</button>

              
                        <button type="button" className="btn btn-dark mb-2">Dark</button>

                        <button type="button" className="btn btn-link mb-2">Link</button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-simple-button-html" role="tabpanel"
                        aria-labelledby="pills-simple-button-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Primary Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Secondary Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-secondary mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Success Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-success mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Danger Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-danger mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Warning Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-warning mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Info Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-info mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Light Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-light mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Dark Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-dark mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

  <span className="token comment">&lt;!-- Link Button --&gt;</span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-link mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                     <div className="row">
                       <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                         <div id="outline-button" className="mb-4">
                           <h2 className="fw-semi-bold mb-1">Outline buttons</h2>
                           <p>In need of a button, but not the hefty background colors they bring? Replace
                             the default modifier classes with the <code className="highlighter-rouge">.btn-outline-*</code> ones
                             to remove all
                             background images and colors
                             on any button.</p>
                         </div>
                         <div className="mb-10 card">
                           <ul className="nav nav-line-bottom " id="pills-tab-outline-button" role="tablist">
                             <li className="nav-item">
                               <a className="nav-link active" id="pills-outline-button-design-tab" data-bs-toggle="pill"
                                 href="#pills-outline-button-design" role="tab" aria-controls="pills-outline-button-design"
                                 aria-selected="true">Design</a>
                             </li>
                             <li className="nav-item">
                               <a className="nav-link" id="pills-outline-button-html-tab" data-bs-toggle="pill"
                                 href="#pills-outline-button-html" role="tab" aria-controls="pills-outline-button-html"
                                 aria-selected="false">HTML</a>
                             </li>
                           </ul>
                           <div className="tab-content p-4" id="pills-tabContent-outline-button">
                             <div className="tab-pane tab-example-design fade show active" id="pills-outline-button-design"
                               role="tabpanel" aria-labelledby="pills-outline-button-design-tab">
                            
                               <button type="button" className="btn btn-outline-primary mb-2">Primary</button>

                               
                               <button type="button" className="btn btn-outline-secondary mb-2">Secondary</button>

                            
                               <button type="button" className="btn btn-outline-success mb-2">Success</button>

                          
                               <button type="button" className="btn btn-outline-danger mb-2">Danger</button>

                            
                               <button type="button" className="btn btn-outline-warning mb-2">Warning</button>

                      
                               <button type="button" className="btn btn-outline-info mb-2">Info</button>

                        
                               <button type="button" className="btn btn-outline-light mb-2">Light</button>

                      
                               <button type="button" className="btn btn-outline-dark mb-2">Dark</button>


                             </div>
                             <div className="tab-pane tab-example-html fade " id="pills-outline-button-html" role="tabpanel"
                               aria-labelledby="pills-outline-button-html-tab">
                               <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- Primary Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-primary mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Secondary Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-secondary mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Secondary<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Success Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-success mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Success<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Danger Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-danger mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Danger<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Warning Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-warning mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Warning<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Info Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-info mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Info<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Light Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-light mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Light<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

        <span className="token comment">&lt;!-- Dark Outline Button --&gt;</span>
        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-outline-dark mb-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Dark<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
            
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="button-tags" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Button tags</h2>
                    <p>The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
                  </div>
                 
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-tags" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-tags-design-tab" data-bs-toggle="pill"
                          href="#pills-button-tags-design" role="tab" aria-controls="pills-button-tags-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-tags-html-tab" data-bs-toggle="pill"
                          href="#pills-button-tags-html" role="tab" aria-controls="pills-button-tags-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                   
                    <div className="tab-content p-4" id="pills-tabContent-button-tags">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-tags-design"
                        role="tabpanel" aria-labelledby="pills-button-tags-design-tab">

                        <a className="btn btn-primary" href="#" role="button">Link</a>
                        <button className="btn btn-primary" type="submit">Button</button>
                        <input className="btn btn-primary" type="button" value="Input">
                        <input className="btn btn-primary" type="submit" value="Submit">
                        <input className="btn btn-primary" type="reset" value="Reset">
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-tags-html" role="tabpanel"
                        aria-labelledby="pills-button-tags-html-tab">

                            <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Button Tag --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Input<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>submit<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Submit<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>input</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>reset<span className="token punctuation">"</span></span> <span className="token attr-name">value</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>Reset<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Outline buttons -->

              <!-- Sizes -->
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="sizes" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Sizes</h2>
                    <p>Fancy larger or smaller buttons? Add <code className="highlighter-rouge">.btn-lg</code> or <code
                        className="highlighter-rouge">.btn-sm</code> for additional sizes.</p>
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-size-large" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-size-large-design-tab" data-bs-toggle="pill"
                          href="#pills-size-large-design" role="tab" aria-controls="pills-size-large-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-size-large-html-tab" data-bs-toggle="pill"
                          href="#pills-size-large-html" role="tab" aria-controls="pills-size-large-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-size-large">
                      <div className="tab-pane tab-example-design fade show active" id="pills-size-large-design"
                        role="tabpanel" aria-labelledby="pills-size-large-design-tab">
                        <button type="button" className="btn btn-primary btn-lg">Large
                          button</button>
                        <button type="button" className="btn btn-primary">Default
                          button</button>
                        <button type="button" className="btn btn-primary btn-sm">Small
                          button</button>
                        <button type="button" className="btn btn-primary btn-xs">Xtra Small
                          button</button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-size-large-html" role="tabpanel"
                        aria-labelledby="pills-size-large-html-tab">

                            <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Sizing Button --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-lg<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Large
    button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Default
    button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-sm<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Small
   button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-xs<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Xtra Small
 button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Sizes -->

              <!-- Button block -->
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="buttonBlock" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Block buttons</h2>
                    <p>Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors.</p>
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-block" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-block-design-tab" data-bs-toggle="pill"
                          href="#pills-button-block-design" role="tab" aria-controls="pills-button-block-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-block-html-tab" data-bs-toggle="pill"
                          href="#pills-button-block-html" role="tab" aria-controls="pills-button-block-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab Content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-block">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-block-design"
                        role="tabpanel" aria-labelledby="pills-button-block-design-tab">
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary" type="button">Button</button>
                          <button className="btn btn-primary" type="button">Button</button>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-block-html" role="tabpanel"
                        aria-labelledby="pills-button-block-html-tab">

                            <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- Button Block --&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>d-grid gap-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                  <p className="mb-3">Here we create a responsive variation, starting with vertically stacked buttons until the <code>md</code> breakpoint, where <code>.d-md-block</code> replaces the <code>.d-grid</code> class, thus nullifying the <code>gap-2</code> utility. Resize your browser to see them change.</p>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-block-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-block-center-design-tab" data-bs-toggle="pill"
                          href="#pills-button-block-center-design" role="tab" aria-controls="pills-button-block-center-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-block-center-html-tab" data-bs-toggle="pill"
                          href="#pills-button-block-center-html" role="tab" aria-controls="pills-button-block-center-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab Content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-block-center">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-block-center-design"
                        role="tabpanel" aria-labelledby="pills-button-block-center-design-tab">
                        <div className="d-grid gap-2 d-md-block">
                          <button className="btn btn-primary" type="button">Button</button>
                          <button className="btn btn-primary" type="button">Button</button>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-block-center-html" role="tabpanel"
                        aria-labelledby="pills-button-block-center-html-tab">

                            <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Block --&gt;</span> <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>d-grid gap-2 d-md-block<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                              <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                            <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                  <p className="mb-3">You can adjust the width of your block buttons with grid column width classes. For example, for a half-width “block button”, use <code>.col-6</code>. Center it horizontally with <code>.mx-auto</code>, too.</p>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-block-left" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-block-left-design-tab" data-bs-toggle="pill"
                          href="#pills-button-block-left-design" role="tab" aria-controls="pills-button-block-left-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-block-left-html-tab" data-bs-toggle="pill"
                          href="#pills-button-block-left-html" role="tab" aria-controls="pills-button-block-left-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab Content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-block-left">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-block-left-design"
                        role="tabpanel" aria-labelledby="pills-button-block-left-design-tab">
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button className="btn btn-primary" type="button">Button</button>
                          <button className="btn btn-primary" type="button">Button</button>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-block-left-html" role="tabpanel"
                        aria-labelledby="pills-button-block-left-html-tab">
                            <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Button Block --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>d-grid gap-2 col-6 mx-auto<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <p className="mb-3">Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we’ve taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they’re no longer stacked.</p>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-block-right" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-block-right-design-tab" data-bs-toggle="pill"
                          href="#pills-button-block-right-design" role="tab" aria-controls="pills-button-block-right-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-block-right-html-tab" data-bs-toggle="pill"
                          href="#pills-button-block-right-html" role="tab" aria-controls="pills-button-block-right-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab Content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-block-right">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-block-right-design"
                        role="tabpanel" aria-labelledby="pills-button-block-right-design-tab">
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button className="btn btn-primary" type="button">Button</button>
                          <button className="btn btn-primary" type="button">Button</button>
                        </div>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-block-right-html" role="tabpanel"
                        aria-labelledby="pills-button-block-right-html-tab">
                            <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- Button Block --&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>d-grid gap-2 d-md-flex justify-content-md-end<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
   <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
   <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <!-- Button block -->

              <!-- Button Icon -->
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="button-icon" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Button icons </h2>
                    <p>A contained button with an icon.</p>
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-icon" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-icon-design-tab" data-bs-toggle="pill"
                          href="#pills-button-icon-design" role="tab" aria-controls="pills-button-icon-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-icon-html-tab" data-bs-toggle="pill"
                          href="#pills-button-icon-html" role="tab" aria-controls="pills-button-icon-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-icon">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-icon-design"
                        role="tabpanel" aria-labelledby="pills-button-icon-design-tab">
                        <button type="button" className="btn btn-primary">
                          Your Text Goes Here <i className="fe fe-shopping-bag ms-1"></i>
                        </button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-icon-html" role="tabpanel"
                        aria-labelledby="pills-button-icon-html-tab">

                            <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button With Icon --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
 Your Text Goes Here <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>i</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>fe fe-shopping-bag ms-1<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>i</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    With fixed width and height.
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-icon-fixed" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-icon-fixed-design-tab" data-bs-toggle="pill"
                          href="#pills-button-icon-fixed-design" role="tab"
                          aria-controls="pills-button-icon-fixed-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-icon-fixed-html-tab" data-bs-toggle="pill"
                          href="#pills-button-icon-fixed-html" role="tab" aria-controls="pills-button-icon-fixed-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-icon-fixed">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-icon-fixed-design"
                        role="tabpanel" aria-labelledby="pills-button-icon-fixed-design-tab">
                        <!-- Button with Icon-->
                        <button type="button" className="btn btn-primary btn-icon">
                          +
                        </button>
                        <button type="button" className="btn btn-primary btn-icon">
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        </button>

                        <button type="button" className="btn btn-icon btn-white border border-2 rounded-circle btn-dashed ms-2">
                          +
                        </button>

                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-icon-fixed-html" role="tabpanel"
                        aria-labelledby="pills-button-icon-fixed-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- Button with Icon--&gt;</span>
<span className="token comment">&lt;!-- Button with Icon--&gt;</span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-icon<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
      +
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-icon<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
      <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>span</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>spinner-border spinner-border-sm<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>status<span className="token punctuation">"</span></span> <span className="token attr-name">aria-hidden</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span><span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>span</span><span className="token punctuation">&gt;</span></span>
    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>

    <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-icon btn-white border border-2 rounded-circle btn-dashed ms-2<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
      +
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    Also available in all button sizes.
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-icon-fixed-size" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-icon-fixed-size-design-tab" data-bs-toggle="pill"
                          href="#pills-button-icon-fixed-size-design" role="tab"
                          aria-controls="pills-button-icon-fixed-size-design" aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-icon-fixed-size-html-tab" data-bs-toggle="pill"
                          href="#pills-button-icon-fixed-size-html" role="tab"
                          aria-controls="pills-button-icon-fixed-size-html" aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-icon-fixed-size">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-icon-fixed-size-design"
                        role="tabpanel" aria-labelledby="pills-button-icon-fixed-size-design-tab">
                        <!-- Button with icon Size -->
                        <button type="button" className="btn btn-primary btn-lg">
                          +
                        </button>
                        <button type="button" className="btn btn-primary">
                          +
                        </button>
                        <button type="button" className="btn btn-primary btn-sm">
                          +
                        </button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-icon-fixed-size-html"
                        role="tabpanel" aria-labelledby="pills-button-icon-fixed-size-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button with icon Size --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-lg<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    +
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    +
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
  <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary btn-sm<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
    +
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Button Icon -->

              <!-- Active state -->
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="active-state" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Active state</h2>
                    <p>Buttons will appear pressed (with a darker background, darker border, and
                      inset shadow) when active. <strong>There’s no need to add a class to <code
                          className="highlighter-rouge">&lt;button&gt;</code>s as they use a
                        pseudo-class</strong>. However, you can still force the same active
                      appearance with <code className="highlighter-rouge">.active</code> (and include
                      the
                      <code>aria-pressed="true"</code> attribute) should you need to replicate the
                      state programmatically.
                    </p>
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-active" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-active-design-tab" data-bs-toggle="pill"
                          href="#pills-button-active-design" role="tab" aria-controls="pills-button-active-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-active-html-tab" data-bs-toggle="pill"
                          href="#pills-button-active-html" role="tab" aria-controls="pills-button-active-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-active">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-active-design"
                        role="tabpanel" aria-labelledby="pills-button-active-design-tab">
                        <a href="#" className="btn btn-primary  active" role="button" aria-pressed="true">Primary link</a>
                        <a href="#" className="btn btn-secondary  active" role="button" aria-pressed="true">Link</a>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-active-html" role="tabpanel"
                        aria-labelledby="pills-button-active-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Button Active State --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary btn-lg active<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">aria-pressed</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Primary link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>a</span> <span className="token attr-name">href</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>#<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-secondary btn-lg active<span className="token punctuation">"</span></span> <span className="token attr-name">role</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">aria-pressed</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Link<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>a</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Active state -->

              <!-- Disabled state -->
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="disabled-state" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Disabled state</h2>
                    <p>Make buttons look inactive by adding the <code className="highlighter-rouge">disabled</code> boolean
                      attribute to any <code className="highlighter-rouge">&lt;button&gt;</code> element.</p>
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-disabled" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-disabled-design-tab" data-bs-toggle="pill"
                          href="#pills-button-disabled-design" role="tab" aria-controls="pills-button-disabled-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-disabled-html-tab" data-bs-toggle="pill"
                          href="#pills-button-disabled-html" role="tab" aria-controls="pills-button-disabled-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-disabled">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-disabled-design"
                        role="tabpanel" aria-labelledby="pills-button-disabled-design-tab">
                        <button type="button" className="btn btn-primary" disabled>Primary
                          button</button>
                        <button type="button" className="btn btn-secondary" disabled>Button</button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-disabled-html" role="tabpanel"
                        aria-labelledby="pills-button-disabled-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy">  <span className="token comment">&lt;!-- Button Disabled --&gt;</span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span><span className="token punctuation">&gt;</span></span>Primary button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation">=</span><span className="token punctuation">"</span>btn btn-secondary<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span><span className="token punctuation">&gt;</span></span>Button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Disabled state -->

              <!-- Toggle states -->
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div id="toggle-state" className="mb-4">
                    <h2 className="fw-semi-bold mb-1">Toggle states</h2>
                    <p>Add <code className="highlighter-rouge">data-bs-toggle="button"</code> to toggle a
                      button’s <code className="highlighter-rouge">active</code> state. If you’re
                      pre-toggling a button, you must manually add the <code className="highlighter-rouge">.active</code>
                      class <strong>and</strong>
                      <code className="highlighter-rouge">aria-pressed="true"</code> to the <code
                        className="highlighter-rouge">&lt;button&gt;</code>.</p>
                  </div>
                  <!-- Card -->
                  <div className="mb-10 card">
                    <ul className="nav nav-line-bottom " id="pills-tab-button-toggle" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-button-toggle-design-tab" data-bs-toggle="pill"
                          href="#pills-button-toggle-design" role="tab" aria-controls="pills-button-toggle-design"
                          aria-selected="true">Design</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-button-toggle-html-tab" data-bs-toggle="pill"
                          href="#pills-button-toggle-html" role="tab" aria-controls="pills-button-toggle-html"
                          aria-selected="false">HTML</a>
                      </li>
                    </ul>
                    <!-- Tab content -->
                    <div className="tab-content p-4" id="pills-tabContent-button-toggle">
                      <div className="tab-pane tab-example-design fade show active" id="pills-button-toggle-design"
                        role="tabpanel" aria-labelledby="pills-button-toggle-design-tab">
                        <button type="button" className="btn btn-primary" data-bs-toggle="button" autocomplete="off">Toggle button</button>
                        <button type="button" className="btn btn-primary active" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Active toggle button</button>
                        <button type="button" className="btn btn-primary" disabled data-bs-toggle="button" autocomplete="off">Disabled toggle button</button>
                      </div>
                      <div className="tab-pane tab-example-html fade " id="pills-button-toggle-html" role="tabpanel"
                        aria-labelledby="pills-button-toggle-html-tab">
                        <pre><code className="language-markup" data-copy-state="copy"> <span className="token comment">&lt;!-- Toggle State --&gt;</span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Toggle button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary active<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span> <span className="token attr-name">aria-pressed</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Active toggle button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
 <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>btn btn-primary<span className="token punctuation">"</span></span> <span className="token attr-name">disabled</span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">autocomplete</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>off<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Disabled toggle button<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span></code></pre>

                    </div>
                  </div>
                </div>
              </div>
            </div>
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