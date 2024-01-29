import DocNavbar from "../doc-navbar"

export default function Borders() {
	return (
		<body className="bg-white">


			@@include("../partials/doc-navbar.html")
			<DocNavbar />

			<div className="pt-9">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-2 col-12 bg-white position-sticky">
							@@include("../partials/doc-sidenav.html")
						</div>
						<div className="col-lg-8 col-12 p-8">
							<div className="row">
								<div className="col-md-12">
									<div className="row">
										<div className="col-md-4"></div>
										<div className="col-md-8">
											<div className="mb-5 mt-5" id="intro">
												<h1 className="mb-2">Changelog</h1>
												<p className="mb-0 lead text-dark fw-semi-bold">
													We’re constantly improving & updating Dashui. See the
													latest features and improvements.
												</p>
											</div>
										</div>
									</div>
									<hr />
									<div className="docs-example row mt-7">
										<div className="col-md-4 col-12">
											<div id="initial">
												<h5 className="mb-3 fw-bold">
													<code>v1.0.3</code> - Feb 25, 2023
												</h5>
											</div>
										</div>
										<div className="col-md-8 col-12">
											<div>
												<h4 className="mb-0">Updated bootstrap@5.3.0-alpha1</h4>
											</div>
										</div>
									</div>
									<div className="docs-example row mt-7">
										<div className="col-md-4 col-12">
											<div id="initial">
												<h5 className="mb-3 fw-bold">
													<code>v1.0.2</code> - Dec 2, 2021
												</h5>
											</div>
										</div>
										<div className="col-md-8 col-12">
											<div>
												<h4 className="mb-2">Updated All plugins to latest</h4>
												<h4 className="mb-2">Updated Docs </h4>
												<ul className="list-unstyled">
													<li>Added Bootstrap 5 Components
														<ul>
															<li>Offcanvas</li>
															<li>Close Button</li>
														</ul>


													</li>
													<li>Added Utilities
														<ul>
															<li>Colord Links</li>
															<li>Ratio</li>
															<li>Stacks</li>
															<li>Text</li>
															<li>Text Truncation</li>
															<li>Vertical rule</li>
															<li>Opacity</li>

														</ul>
													</li>
													<li>Updated Gray colors</li>

												</ul>


											</div>
										</div>
									</div>
									<div className="docs-example row mt-7">
										<div className="col-md-4 col-12">
											<div id="initial">
												<h5 className="mb-3 fw-bold">
													<code>v1.0.1</code> - Aug 17, 2021
												</h5>
											</div>
										</div>
										<div className="col-md-8 col-12">
											<div>
												<h4 className="mb-2">Updated Docs </h4>

											</div>
										</div>
									</div>

									<div className="docs-example row mt-7">
										<div className="col-md-4 col-12">
											<div id="initial">
												<h5 className="mb-3 fw-bold">
													<code>v1.0.0</code> - June 19, 2021
												</h5>
											</div>
										</div>
										<div className="col-md-8 col-12">
											<div>
												<h4 className="mb-2">Inital Release </h4>
												<p>
													Dashui is a fully responsive and yet modern premium
													bootstrap dashboard Admin template.
												</p>
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

