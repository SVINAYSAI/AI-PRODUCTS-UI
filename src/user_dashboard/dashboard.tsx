import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';
// import 'jquery-slimscroll';
// import 'jquery';
import Dropzone from 'react-dropzone'
import "./assets/css/theme.css"
import NavBar from "./pages/navbar";
import Header from "./pages/header";
import React, { useEffect } from 'react';
import feather from 'feather-icons';
import $ from 'jquery';
import ApexCharts from 'apexcharts';
import { Toast } from 'bootstrap';
import { Offcanvas } from 'bootstrap';
{/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
// interface JQuery {
//     slimScroll(options?: any): any;
// }

export default function Dashboard() {
    useEffect(() => {
        feather.replace();
    }, []); // Empty dependency array to run only once after the component mounts

    // useEffect(() => {
    //     // Menu toggle for admin dashboard
    //     if ($("#nav-toggle").length) {
    //         $("#nav-toggle").on("click", function (e) {
    //             e.preventDefault();
    //             $("#db-wrapper").toggleClass("toggled");
    //         });
    //     }

    //     // Slimscroll for sidebar nav
    //     if ($(".nav-scroller").length) {
    //         $(".nav-scroller").slimScroll({
    //             height: "97%",
    //         });
    //     }

    //     // Notification dropdown scroll List
    //     if ($('.notification-list-scroll').length) {
    //         $(".notification-list-scroll").slimScroll({
    //             height: "300px", // Convert numeric value to string
    //         });
    //     }
        

    //     // Default Tooltip
    //     if ($('[data-bs-toggle="tooltip"]').length) {
    //         $('[data-bs-toggle="tooltip"]').tooltip();
    //     }

    //     // Default Popover
    //     if ($('[data-bs-toggle="popover"]').length) {
    //         $('[data-bs-toggle="popover"]').popover();
    //     }

    //     // Scrollspy
    //     if ($('[data-bs-spy="scroll"]').length) {
    //         $('[data-bs-spy="scroll"]').each(function () {
    //             const element = $(this)[0]; // Extract the DOM element
    //             new window.bootstrap.ScrollSpy(element, {
    //                 // Options if any
    //             }).refresh();
    //         });
    //     }
        
        

    //     // Toast
    //     if ($('.toast').length) {
    //         $('.toast').each(function () {
    //             const toastElement = $(this).get(0); // Extract the DOM element
    //             if (toastElement) {
    //                 new Toast(toastElement).show();
    //             }
    //         });
    //     }
        

    //     // Perfomance Chart
    //     if ($("#perfomanceChart").length) {
    //         const options: any = {
    //             series: [100, 78, 89],
    //             chart: {
    //                 height: 320,
    //                 type: 'radialBar',
    //             },
    //             colors: ['#28a745', '#ffc107', '#dc3545'],
    //             stroke: {
    //                 lineCap: "round",
    //             },
    //             plotOptions: {
    //                 radialBar: {
    //                     startAngle: -168,
    //                     endAngle: -450,
    //                     hollow: {
    //                         size: '55%',
    //                     },
    //                     track: {
    //                         background: 'transaprent',
    //                     },
    //                     dataLabels: {
    //                         show: false,
    //                     }
    //                 }
    //             },
    //         };

    //         const chart = new ApexCharts(document.querySelector("#perfomanceChart"), options);
    //         chart.render();
    //     }

    //     // Offcanvas
    //     if ($(".offcanvas").length) {
    //         $(".offcanvas").each(function () {
    //             const offcanvasElement = $(this).get(0); // Extract the DOM element
    //             if (offcanvasElement) {
    //                 new Offcanvas(offcanvasElement);
    //             }
    //         });
    //     }
        

    // }, []);


    return (
        <body className="bg-light">
            <div id="db-wrapper">
                {/* <!-- navbar vertical -->
        @@include('partials/navbar-vertical.html', { "page": "dashboard", }) */}
                <NavBar />
                <div id="page-content">
                    <Header />
                    <div className="bg-primary pt-10 pb-21"></div>
                    <div className="container-fluid mt-n22 px-6">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12">
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mb-2 mb-lg-0">
                                            <h3 className="mb-0  text-white">Projects</h3>
                                        </div>
                                        <div>
                                            <a href="#" className="btn btn-white">Create New Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mt-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-centermb-3">
                                            <div>
                                                <h4 className="mb-0">Projects</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-primary text-primaryrounded-2">
                                                <i className="bi bi-briefcase fs-4"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="fw-bold">18</h1>
                                            <p className="mb-0"><span className="text-dark me-2">2</span>Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mt-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-centermb-3">
                                            <div>
                                                <h4 className="mb-0">Active Task</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-primary text-primaryrounded-2">
                                                <i className="bi bi-list-task fs-4"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="fw-bold">132</h1>
                                            <p className="mb-0"><span className="text-dark me-2">28</span>Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mt-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-centermb-3">
                                            <div>
                                                <h4 className="mb-0">Teams</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-primary text-primaryrounded-2">
                                                <i className="bi bi-people fs-4"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="fw-bold">12</h1>
                                            <p className="mb-0"><span className="text-dark me-2">1</span>Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-12 col-12 mt-6">
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-centermb-3">
                                            <div>
                                                <h4 className="mb-0">Productivity</h4>
                                            </div>
                                            <div className="icon-shape icon-md bg-light-primary text-primaryrounded-2">
                                                <i className="bi bi-bullseye fs-4"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="fw-bold">76%</h1>
                                            <p className="mb-0"><span className="text-success me-2">5%</span>Completed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-6">
                            <div className="col-md-12 col-12">
                                <div className="card">
                                    <div className="card-header bg-white  py-4">
                                        <h4 className="mb-0">Active Projects</h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Project name</th>
                                                    <th>Hours</th>
                                                    <th>priority</th>
                                                    <th>Members</th>
                                                    <th>Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div className="icon-shape icon-md border p-4 rounded-1">
                                                                    <img src="assets/images/brand/dropbox-logo.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1"> <a href="#" className="text-inherit">Dropbox Design
                                                                    System</a></h5>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">34</td>
                                                    <td className="align-middle"><span className="badge bg-warning">Medium</span></td>
                                                    <td className="align-middle">
                                                        <div className="avatar-group">
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-1.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-2.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-3.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-primary">
                                                                <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-dark">
                                                        <div className="float-start me-3">15%</div>
                                                        <div className="mt-2">
                                                            <div className="progress" style={{ height: "5px" }}>
                                                                <div className="progress-bar"
                                                                //  role="progressbar" 
                                                                //  style={{width:"15%"}} 
                                                                //  aria-valuenow="15" 
                                                                //  aria-valuemin="0" 
                                                                //  aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div className="icon-shape icon-md border p-4 rounded-1">
                                                                    <img src="assets/images/brand/slack-logo.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1"> <a href="#" className="text-inherit">Slack Team UI Design</a></h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">47</td>
                                                    <td className="align-middle"><span className="badge bg-danger">High</span></td>
                                                    <td className="align-middle">
                                                        <div className="avatar-group">
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-4.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-5.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-6.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-primary">
                                                                <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-dark">
                                                        <div className="float-start me-3">35%</div>
                                                        <div className="mt-2">
                                                            <div className="progress" style={{ height: "5px" }}>
                                                                <div className="progress-bar"
                                                                // role="progressbar" 
                                                                // style={{width:"35%"}} 
                                                                // aria-valuenow="35" 
                                                                // aria-valuemin="0" 
                                                                // aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div className="icon-shape icon-md border p-4 rounded-1">
                                                                    <img src="assets/images/brand/github-logo.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1"> <a href="#" className="text-inherit">GitHub Satellite</a></h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">120</td>
                                                    <td className="align-middle"><span className="badge bg-info">Low</span></td>
                                                    <td className="align-middle">
                                                        <div className="avatar-group">
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-7.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-8.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-9.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-primary">
                                                                <span className="avatar-initials rounded-circle
                                fs-6">+1</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-dark">
                                                        <div className="float-start me-3">75%</div>
                                                        <div className="mt-2">
                                                            <div className="progress" style={{ height: "5px" }}>
                                                                <div className="progress-bar"
                                                                // role="progressbar" 
                                                                // style="width:75%" 
                                                                // aria-valuenow="75" 
                                                                // aria-valuemin="0" 
                                                                // aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div className="icon-shape icon-md border p-4 rounded-1">
                                                                    <img src="assets/images/brand/3dsmax-logo.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1"> <a href="#" className="text-inherit">3D Character Modelling</a></h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">89</td>
                                                    <td className="align-middle"><span className="badge bg-warning">Medium</span></td>
                                                    <td className="align-middle">
                                                        <div className="avatar-group">
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-10.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-11.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-12.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-primary">
                                                                <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-dark">
                                                        <div className="float-start me-3">63%</div>
                                                        <div className="mt-2">
                                                            <div className="progress" style={{ height: "5px" }}>
                                                                <div className="progress-bar"
                                                                // role="progressbar" 
                                                                // style="width:63%" 
                                                                // aria-valuenow="63" 
                                                                // aria-valuemin="0" 
                                                                // aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div className="icon-shape icon-md border p-4 rounded bg-primary">
                                                                    <img src="assets/images/brand/layers-logo.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1"> <a href="#" className="text-inherit">Webapp Design System</a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">108</td>
                                                    <td className="align-middle"><span className="badge bg-success">Track</span></td>
                                                    <td className="align-middle">
                                                        <div className="avatar-group">
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-13.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-14.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-15.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-primary">
                                                                <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-dark">
                                                        <div className="float-start me-3">100%</div>
                                                        <div className="mt-2">
                                                            <div className="progress" style={{ height: "5px" }}>
                                                                <div
                                                                    className="progress-bar bg-success"
                                                                // role="progressbar" 
                                                                // style="width:100%" 
                                                                // aria-valuenow="100" 
                                                                // aria-valuemin="0"
                                                                //  aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle border-bottom-0">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <div className="icon-shape icon-md border p-4 rounded-1">
                                                                    <img src="assets/images/brand/github-logo.svg" alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1"> <a href="#" className="text-inherit">Github Event Design</a>
                                                                </h5>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle border-bottom-0">120</td>
                                                    <td className="align-middle border-bottom-0"><span className="badge bg-info">Low</span></td>
                                                    <td className="align-middle border-bottom-0">
                                                        <div className="avatar-group">
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-13.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-14.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm">
                                                                <img alt="avatar"
                                                                    src="assets/images/avatar/avatar-15.jpg"
                                                                    className="rounded-circle" />
                                                            </span>
                                                            <span className="avatar avatar-sm avatar-primary">
                                                                <span className="avatar-initials rounded-circle fs-6">+1</span>
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle text-dark border-bottom-0">
                                                        <div className="float-start me-3">75%</div>
                                                        <div className="mt-2">
                                                            <div className="progress" style={{ height: "5px" }}>
                                                                <div className="progress-bar"
                                                                //  role="progressbar" 
                                                                //  style="width:75%" 
                                                                //  aria-valuenow="75" 
                                                                //  aria-valuemin="0" 
                                                                //  aria-valuemax="100"
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-footer bg-white text-center">
                                        <a href="#" className="link-primary">View All Projects</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-6">
                            <div className="col-xl-4 col-lg-12 col-md-12 col-12 mb-6 mb-xl-0">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h4 className="mb-0">Tasks Performance </h4>
                                            </div>
                                            <div className="dropdown dropstart">
                                                <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTask" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="icon-xxs" data-feather="more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="dropdownTask">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-8">
                                            <div id="perfomanceChart"></div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-around">
                                            <div className="text-center">
                                                <i className="icon-sm text-success" data-feather="check-circle"></i>
                                                <h1 className="mt-3  mb-1 fw-bold">76%</h1>
                                                <p>Completed</p>
                                            </div>
                                            <div className="text-center">
                                                <i className="icon-sm text-warning" data-feather="trending-up"></i>
                                                <h1 className="mt-3  mb-1 fw-bold">32%</h1>
                                                <p>In-Progress</p>
                                            </div>
                                            <div className="text-center">
                                                <i className="icon-sm text-danger" data-feather="trending-down"></i>
                                                <h1 className="mt-3  mb-1 fw-bold">13%</h1>
                                                <p>Behind</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                                <div className="card h-100">
                                    <div className="card-header bg-white py-4">
                                        <h4 className="mb-0">Teams </h4>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Role</th>
                                                    <th>Last Activity</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img src="assets/images/avatar/avatar-2.jpg" alt="" className="avatar-md avatar rounded-circle" />
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1">Anita Parmar</h5>
                                                                <p className="mb-0">anita@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">Front End Developer</td>
                                                    <td className="align-middle">3 May, 2023</td>
                                                    <td className="align-middle">
                                                        <div className="dropdown dropstart">
                                                            <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTeamOne" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="icon-xxs" data-feather="more-vertical"></i>
                                                            </a>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownTeamOne">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img src="assets/images/avatar/avatar-1.jpg" alt="" className="avatar-md avatar rounded-circle" />
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1">Jitu Chauhan</h5>
                                                                <p className="mb-0">jituchauhan@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">Project Director </td>
                                                    <td className="align-middle">Today</td>
                                                    <td className="align-middle">
                                                        <div className="dropdown dropstart">
                                                            <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTeamTwo" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="icon-xxs" data-feather="more-vertical"></i>
                                                            </a>
                                                            <div className="dropdown-menu" aria-labelledby="dropdownTeamTwo">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img src="assets/images/avatar/avatar-3.jpg" alt="" className="avatar-md avatar rounded-circle" />
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1">Sandeep Chauhan</h5>
                                                                <p className="mb-0">sandeepchauhan@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">Full- Stack Developer</td>
                                                    <td className="align-middle">Yesterday</td>
                                                    <td className="align-middle">
                                                        <div className="dropdown dropstart">
                                                            <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTeamThree" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="icon-xxs" data-feather="more-vertical"></i>
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownTeamThree">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">

                                                            <div>
                                                                <img src="assets/images/avatar/avatar-4.jpg" alt="" className="avatar-md avatar rounded-circle" />
                                                            </div>

                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1">Amanda Darnell</h5>
                                                                <p className="mb-0">amandadarnell@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">Digital Marketer</td>
                                                    <td className="align-middle">3 May, 2023</td>
                                                    <td className="align-middle">
                                                        <div className="dropdown dropstart">
                                                            <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTeamFour" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="icon-xxs" data-feather="more-vertical"></i>
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownTeamFour">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>

                                                    <td className="align-middle">
                                                        <div className="d-flex align-items-center">

                                                            <div>
                                                                <img src="assets/images/avatar/avatar-5.jpg" alt="" className="avatar-md avatar rounded-circle" />
                                                            </div>

                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1">Patricia Murrill</h5>
                                                                <p className="mb-0">patriciamurrill@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">Account Manager</td>
                                                    <td className="align-middle">3 May, 2023</td>
                                                    <td className="align-middle">
                                                        <div className="dropdown dropstart">
                                                            <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTeamFive" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="icon-xxs" data-feather="more-vertical"></i>
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownTeamFive">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="align-middle border-bottom-0">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <img src="assets/images/avatar/avatar-6.jpg" alt="" className="avatar-md avatar rounded-circle" />
                                                            </div>
                                                            <div className="ms-3 lh-1">
                                                                <h5 className=" mb-1">Darshini Nair</h5>
                                                                <p className="mb-0">darshininair@example.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle border-bottom-0">Front End Developer</td>
                                                    <td className="align-middle border-bottom-0">3 May, 2023</td>
                                                    <td className="align-middle border-bottom-0">
                                                        <div className="dropdown dropstart">
                                                            <a className="text-muted text-primary-hover" href="#" role="button" id="dropdownTeamSix" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="icon-xxs" data-feather="more-vertical"></i>
                                                            </a>

                                                            <div className="dropdown-menu" aria-labelledby="dropdownTeamSix">
                                                                <a className="dropdown-item" href="#">Action</a>
                                                                <a className="dropdown-item" href="#">Another action</a>
                                                                <a className="dropdown-item" href="#">Something else
                                                                    here</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
