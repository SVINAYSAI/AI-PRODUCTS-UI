import React from "react"
import DocNavbar from "../doc-navbar"
import DocSidenav from "../doc-sidenav"
export default function Accordions() {
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
                                        <h1 className="mb-2">Accordions</h1>
                                        <p className="mb-0 lead text-muted">
                                            Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="accordion-example" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Example</h2>
                                        <p>
                                            Click the accordions below to expand/collapse the
                                            accordion content.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mb-10 card">
                                            <ul className="nav nav-line-bottom nav-example" id="pills-tabTwo" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="pills-accordions-design-tab" data-bs-toggle="pill"
                                                        href="#pills-accordions-design" role="tab" aria-controls="pills-accordions-design"
                                                        aria-selected="true">Design</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-accordions-html-tab" data-bs-toggle="pill"
                                                        href="#pills-accordions-html" role="tab" aria-controls="pills-accordions-html"
                                                        aria-selected="false">HTML</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-4" id="pills-tabTwoContent">
                                                <div className="tab-pane tab-example-design fade show active" id="pills-accordions-design"
                                                    role="tabpanel" aria-labelledby="pills-accordions-design-tab">
                                                    <div className="accordion" id="accordionExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingOne">
                                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    Accordion Item #1
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <strong>This is the first item's accordion
                                                                        body.</strong>
                                                                    It is hidden by default, until the collapse
                                                                    plugin adds the appropriate classes that we
                                                                    use to style each element. These classes
                                                                    control the overall appearance, as well as
                                                                    the showing and hiding via CSS transitions.
                                                                    You can modify any of this with custom CSS
                                                                    or overriding our default variables. It's
                                                                    also worth noting that just about any HTML
                                                                    can go within the
                                                                    <code>.accordion-body</code>, though the
                                                                    transition does limit overflow.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingTwo">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Accordion Item #2
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <strong>This is the second item's accordion
                                                                        body.</strong>
                                                                    It is hidden by default, until the collapse
                                                                    plugin adds the appropriate classes that we
                                                                    use to style each element. These classes
                                                                    control the overall appearance, as well as
                                                                    the showing and hiding via CSS transitions.
                                                                    You can modify any of this with custom CSS
                                                                    or overriding our default variables. It's
                                                                    also worth noting that just about any HTML
                                                                    can go within the
                                                                    <code>.accordion-body</code>, though the
                                                                    transition does limit overflow.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="headingThree">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    Accordion Item #3
                                                                </button>
                                                            </h2>
                                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                                                data-bs-parent="#accordionExample">
                                                                <div className="accordion-body">
                                                                    <strong>This is the third item's accordion
                                                                        body.</strong>
                                                                    It is hidden by default, until the collapse
                                                                    plugin adds the appropriate classes that we
                                                                    use to style each element. These classes
                                                                    control the overall appearance, as well as
                                                                    the showing and hiding via CSS transitions.
                                                                    You can modify any of this with custom CSS
                                                                    or overriding our default variables. It's
                                                                    also worth noting that just about any HTML
                                                                    can go within the
                                                                    <code>.accordion-body</code>, though the
                                                                    transition does limit overflow.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane tab-example-html fade" id="pills-accordions-html" role="tabpanel"
                                                    aria-labelledby="pills-accordions-html-tab">
                                                    <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Accordion Example --&gt;</span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordionExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-header<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>headingOne<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-button<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#collapseOne<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>true<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseOne<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        Accordion Item #1
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseOne<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-collapse collapse show<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>headingOne<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-parent</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#accordionExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>strong</span><span className="token punctuation">&gt;</span></span>This is the first item's accordion
                                                        body.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>strong</span><span className="token punctuation">&gt;</span></span>
                                                        It is hidden by default, until the collapse
                                                        plugin adds the appropriate classes that we
                                                        use to style each element. These classes
                                                        control the overall appearance, as well as
                                                        the showing and hiding via CSS transitions.
                                                        You can modify any of this with custom CSS
                                                        or overriding our default variables. It's
                                                        also worth noting that just about any HTML
                                                        can go within the
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>code</span><span className="token punctuation">&gt;</span></span>.accordion-body<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>code</span><span className="token punctuation">&gt;</span></span>, though the
                                                        transition does limit overflow.
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-header<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>headingTwo<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-button collapsed<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#collapseTwo<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseTwo<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        Accordion Item #2
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseTwo<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-collapse collapse<span className="token punctuation">"</span></span> <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>headingTwo<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-parent</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#accordionExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>strong</span><span className="token punctuation">&gt;</span></span>This is the second item's accordion
                                                        body.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>strong</span><span className="token punctuation">&gt;</span></span>
                                                        It is hidden by default, until the collapse
                                                        plugin adds the appropriate classes that we
                                                        use to style each element. These classes
                                                        control the overall appearance, as well as
                                                        the showing and hiding via CSS transitions.
                                                        You can modify any of this with custom CSS
                                                        or overriding our default variables. It's
                                                        also worth noting that just about any HTML
                                                        can go within the
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>code</span><span className="token punctuation">&gt;</span></span>.accordion-body<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>code</span><span className="token punctuation">&gt;</span></span>, though the
                                                        transition does limit overflow.
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-header<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>headingThree<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-button collapsed<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#collapseThree<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span> <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseThree<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        Accordion Item #3
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapseThree<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-collapse collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>headingThree<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-parent</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#accordionExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>strong</span><span className="token punctuation">&gt;</span></span>This is the third item's accordion
                                                        body.<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>strong</span><span className="token punctuation">&gt;</span></span>
                                                        It is hidden by default, until the collapse
                                                        plugin adds the appropriate classes that we
                                                        use to style each element. These classes
                                                        control the overall appearance, as well as
                                                        the showing and hiding via CSS transitions.
                                                        You can modify any of this with custom CSS
                                                        or overriding our default variables. It's
                                                        also worth noting that just about any HTML
                                                        can go within the
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>code</span><span className="token punctuation">&gt;</span></span>.accordion-body<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>code</span><span className="token punctuation">&gt;</span></span>, though the
                                                        transition does limit overflow.
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
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div id="accordion-flush" className="mb-4">
                                        <h2 className="fw-semi-bold mb-1">Flush</h2>
                                        <p>
                                            Add <code>.accordion-flush</code> to remove the default
                                            <code>background-color</code>, some borders, and some
                                            rounded corners to render accordions edge-to-edge with
                                            their parent container.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mb-10 card">
                                            <ul className="nav nav-line-bottom nav-example" id="pills-tabThree" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="pills-accordions-flush-design-tab" data-bs-toggle="pill"
                                                        href="#pills-accordions-flush-design" role="tab"
                                                        aria-controls="pills-accordions-flush-design" aria-selected="true">Design</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-accordions-flush-html-tab" data-bs-toggle="pill"
                                                        href="#pills-accordions-flush-html" role="tab" aria-controls="pills-accordions-flush-html"
                                                        aria-selected="false">HTML</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content p-4" id="pills-tabThreeContent">
                                                <div className="tab-pane tab-example-design fade show active" id="pills-accordions-flush-design"
                                                    role="tabpanel" aria-labelledby="pills-accordions-flush-design-tab">
                                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="flush-headingOne">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                                                    aria-controls="flush-collapseOne">
                                                                    Accordion Item #1
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                                <div className="accordion-body">
                                                                    Placeholder content for this accordion,
                                                                    which is intended to demonstrate the
                                                                    <code>.accordion-flush</code> class. This is
                                                                    the first item's accordion body.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                                    aria-controls="flush-collapseTwo">
                                                                    Accordion Item #2
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                                <div className="accordion-body">
                                                                    Placeholder content for this accordion,
                                                                    which is intended to demonstrate the
                                                                    <code>.accordion-flush</code> class. This is
                                                                    the second item's accordion body. Let's
                                                                    imagine this being filled with some actual
                                                                    content.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="flush-headingThree">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                                    aria-controls="flush-collapseThree">
                                                                    Accordion Item #3
                                                                </button>
                                                            </h2>
                                                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                                <div className="accordion-body">
                                                                    Placeholder content for this accordion,
                                                                    which is intended to demonstrate the
                                                                    <code>.accordion-flush</code> class. This is
                                                                    the third item's accordion body. Nothing
                                                                    more exciting happening here in terms of
                                                                    content, but just filling up the space to
                                                                    make it look, at least at first glance, a
                                                                    bit more representative of how this would
                                                                    look in a real-world application.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane tab-example-html fade" id="pills-accordions-flush-html" role="tabpanel"
                                                    aria-labelledby="pills-accordions-flush-html-tab">
                                                    <pre><code className="language-markup" data-copy-state="copy"><span className="token comment">&lt;!-- Accordion flush --&gt;</span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion accordion-flush<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordionFlushExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-header<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-headingOne<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-button collapsed<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#flush-collapseOne<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-collapseOne<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        Accordion Item #1
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-collapseOne<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-collapse collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-headingOne<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-parent</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#accordionFlushExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Placeholder content for this accordion, which is intended
                                                        to demonstrate the <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>code</span><span className="token punctuation">&gt;</span></span>.accordion-flush<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>code</span><span className="token punctuation">&gt;</span></span> class. This is the first item's
                                                        accordion body.
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-header<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-headingTwo<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-button collapsed<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#flush-collapseTwo<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-collapseTwo<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        Accordion Item #2
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-collapseTwo<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-collapse collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-headingTwo<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-parent</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#accordionFlushExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Placeholder content for this accordion, which is intended
                                                        to demonstrate the <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>code</span><span className="token punctuation">&gt;</span></span>.accordion-flush<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>code</span><span className="token punctuation">&gt;</span></span> class. This is the second item's
                                                        accordion body. Let's imagine this being filled with
                                                        some actual content.
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>div</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-item<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>h2</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-header<span className="token punctuation">"</span></span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-headingThree<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>button</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-button collapsed<span className="token punctuation">"</span></span> <span className="token attr-name">type</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>button<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-toggle</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">data-bs-target</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#flush-collapseThree<span className="token punctuation">"</span></span> <span className="token attr-name">aria-expanded</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>false<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-controls</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-collapseThree<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        Accordion Item #3
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>button</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>h2</span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">id</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-collapseThree<span className="token punctuation">"</span></span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-collapse collapse<span className="token punctuation">"</span></span>
                                                            <span className="token attr-name">aria-labelledby</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>flush-headingThree<span className="token punctuation">"</span></span> <span className="token attr-name">data-bs-parent</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>#accordionFlushExample<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>
                                                        <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>div</span> <span className="token attr-name">class</span><span className="token attr-value"><span className="token punctuation attr-equals">=</span><span className="token punctuation">"</span>accordion-body<span className="token punctuation">"</span></span><span className="token punctuation">&gt;</span></span>Placeholder content for this accordion, which is intended
                                                        to demonstrate the <span className="token tag"><span className="token tag"><span className="token punctuation">&lt;</span>code</span><span className="token punctuation">&gt;</span></span>.accordion-flush<span className="token tag"><span className="token tag"><span className="token punctuation">&lt;/</span>code</span><span className="token punctuation">&gt;</span></span> class. This is the third item's
                                                        accordion body. Nothing more exciting happening here
                                                        in terms of content, but just filling up the space to make it look, at least at
                                                        first glance, a bit more representative of how this would look in a real-world
                                                        application.
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
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}