import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <>
      <div
        className="toast toast-onload align-items-center text-bg-primary border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true">
        <div className="toast-body hstack align-items-start gap-6">
          <i className="ti ti-alert-circle fs-6" />
          <div>
            <h5 className="text-white fs-3 mb-1">Welcome to Modernize</h5>
            <h6 className="text-white fs-2 mb-0">
              Easy to costomize the Template!!!
            </h6>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white fs-2 m-0 ms-auto shadow-none"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
      {/* Preloader */}

      <div id="main-wrapper">
        {/* Sidebar Start */}
        <aside className="left-sidebar with-vertical">
          <div>
            {/* ---------------------------------- */}
            {/* Start Vertical Layout Sidebar */}
            {/* ---------------------------------- */}

            <div className="brand-logo d-flex align-items-center justify-content-between">
              <Link to="./main/index.html" className="text-nowrap logo-img">
                <img
                  src="./assets/images/logos/dark-logo.svg"
                  className="dark-logo"
                  alt="Logo-Dark"
                />
              </Link>
              <Link
                to="#"
                className="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
                <i className="ti ti-x" />
              </Link>
            </div>
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav text-dark">
                {/* ---------------------------------- */}
                {/* Home */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Home</span>
                </li>
                {/* ---------------------------------- */}
                {/* Dashboard */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to=""
                    id="get-url"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-aperture" />
                    </span>
                    <span className="hide-menu">Profile</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/index2.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-shopping-cart" />
                    </span>
                    <span className="hide-menu">Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/index3.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-currency-dollar" />
                    </span>
                    <span className="hide-menu">Portfolio</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/index4.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-cpu" />
                    </span>
                    <span className="hide-menu">Groups</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/index5.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-activity-heartbeat" />
                    </span>
                    <span className="hide-menu">Companies</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/index6.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-playlist" />
                    </span>
                    <span className="hide-menu">Modules</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* Frontend page */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-layout-grid" />
                    </span>
                    <span className="hide-menu">Topics</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/frontend-landingpage.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Homepage</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/frontend-aboutpage.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">About Us</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/frontend-contactpage.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Contact Us</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/frontend-blogpage.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Blog</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/frontend-blogdetailpage.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Blog Details</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Apps */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Apps</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-calendar.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-calendar" />
                    </span>
                    <span className="hide-menu">Calendar</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-kanban.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-layout-kanban" />
                    </span>
                    <span className="hide-menu">Kanban</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-chat.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-message-dots" />
                    </span>
                    <span className="hide-menu">Chat</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-email.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-mail" />
                    </span>
                    <span className="hide-menu">Email</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-notes.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-notes" />
                    </span>
                    <span className="hide-menu">Notes</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-contact.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-phone" />
                    </span>
                    <span className="hide-menu">Contact Table</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-contact2.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-list-details" />
                    </span>
                    <span className="hide-menu">Contact List</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/app-invoice.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-file-text" />
                    </span>
                    <span className="hide-menu">Invoice</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/page-user-profile.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-user-circle" />
                    </span>
                    <span className="hide-menu">User Profile</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-chart-donut-3" />
                    </span>
                    <span className="hide-menu">Blog</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/blog-posts.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Posts</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/blog-detail.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Details</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-basket" />
                    </span>
                    <span className="hide-menu">Ecommerce</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link to="./main/eco-shop.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Shop</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/eco-shop-detail.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Details</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/eco-product-list.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">List</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/eco-checkout.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Checkout</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/eco-add-product.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Add Product</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/eco-edit-product.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Edit Product</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* PAGES */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">PAGES</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/page-pricing.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-currency-dollar" />
                    </span>
                    <span className="hide-menu">Pricing</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/page-faq.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-help" />
                    </span>
                    <span className="hide-menu">FAQ</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/page-account-settings.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-user-circle" />
                    </span>
                    <span className="hide-menu">Account Setting</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./landingpage/index.html"
                    aria-expanded="false">
                    <span>
                      <i className="ti ti-app-window" />
                    </span>
                    <span className="hide-menu">Landing Page</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-layout" />
                    </span>
                    <span className="hide-menu">Widgets</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/widgets-cards.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Cards</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/widgets-banners.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Banner</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/widgets-charts.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Charts</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/widgets-feeds.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Feed Widgets</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/widgets-apps.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Apps Widgets</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/widgets-data.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Data Widgets</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* UI */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">UI</span>
                </li>
                {/* ---------------------------------- */}
                {/* UI Elements */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-layout-grid" />
                    </span>
                    <span className="hide-menu">UI Elements</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-accordian.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Accordian</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="./main/ui-badge.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Badge</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-buttons.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Buttons</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-dropdowns.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dropdowns</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="./main/ui-modals.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Modals</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="./main/ui-tab.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Tab</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-tooltip-popover.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Tooltip &amp; Popover</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-notification.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Alerts</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-progressbar.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Progressbar</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-pagination.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Pagination</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-typography.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Typography</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-bootstrap-ui.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap UI</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-breadcrumb.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Breadcrumb</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-offcanvas.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Offcanvas</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="./main/ui-lists.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Lists</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="./main/ui-grid.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Grid</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-carousel.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Carousel</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-scrollspy.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Scrollspy</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-spinner.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Spinner</span>
                      </Link>
                    </li>
                    <li className="sidebar-item mb-3">
                      <Link to="./main/ui-link.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Link</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Cards */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-cards" />
                    </span>
                    <span className="hide-menu">Cards</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link to="./main/ui-cards.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Basic Cards</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-card-customs.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Custom Cards</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-card-weather.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Weather Cards</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/ui-card-draggable.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Draggable Cards</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Component */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-components" />
                    </span>
                    <span className="hide-menu">Component</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/component-sweetalert.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Sweet Alert</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/component-nestable.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Nestable</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/component-noui-slider.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Noui slider</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/component-rating.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Rating</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/component-toastr.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Toastr</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Forms */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Forms</span>
                </li>
                {/* ---------------------------------- */}
                {/* Form Elements */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file-text" />
                    </span>
                    <span className="hide-menu">Form Elements</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-inputs.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Forms Input</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-input-groups.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Input Groups</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-input-grid.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Input Grid</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-checkbox-radio.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Checkbox &amp; Radios</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-bootstrap-switch.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Switch</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-select2.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Select2</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Form Addons */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-qrcode" />
                    </span>
                    <span className="hide-menu">Form Addons</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-dropzone.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dropzone</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link to="./main/form-mask.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Form Mask</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-typeahead.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Form Typehead</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Form Validation */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-alert-circle" />
                    </span>
                    <span className="hide-menu">Form Validation</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-bootstrap-validation.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Validation</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-custom-validation.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Custom Validation</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Form Pickers */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file-pencil" />
                    </span>
                    <span className="hide-menu">Form Pickers</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-picker-colorpicker.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Colorpicker</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-picker-bootstrap-rangepicker.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Rangepicker</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-picker-bootstrap-datepicker.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Datepicker</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-picker-material-datepicker.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Material Datepicker</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Form Editor */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-dna" />
                    </span>
                    <span className="hide-menu">Form Editor</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-editor-quill.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Quill Editor</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/form-editor-tinymce.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Tinymce Editor</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Form Input */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-basic.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-archive" />
                    </span>
                    <span className="hide-menu">Basic Form</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-vertical.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-box-align-left" />
                    </span>
                    <span className="hide-menu">Form Vertical</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-horizontal.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-box-align-bottom" />
                    </span>
                    <span className="hide-menu">Form Horizontal</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-actions.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file-export" />
                    </span>
                    <span className="hide-menu">Form Actions</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-row-separator.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-separator-horizontal" />
                    </span>
                    <span className="hide-menu">Row Separator</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-bordered.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-border-outer" />
                    </span>
                    <span className="hide-menu">Form Bordered</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-detail.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file-description" />
                    </span>
                    <span className="hide-menu">Form Detail</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-striped-row.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file-analytics" />
                    </span>
                    <span className="hide-menu">Striped Rows</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-floating-input.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file-dots" />
                    </span>
                    <span className="hide-menu">Form Floating Input</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* Form Wizard */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-wizard.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-files" />
                    </span>
                    <span className="hide-menu">Form Wizard</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* Form Repeater */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="./main/form-repeater.html"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-topology-star-3" />
                    </span>
                    <span className="hide-menu">Form Repeater</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* Tables */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Tables</span>
                </li>
                {/* ---------------------------------- */}
                {/* Bootstrap Table */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-layout-sidebar" />
                    </span>
                    <span className="hide-menu">Bootstrap Table</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/table-basic.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Basic Table</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/table-dark-basic.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dark Basic Table</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/table-sizing.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Sizing Table</span>
                      </Link>
                    </li>
                    <li className="sidebar-item mb-3">
                      <Link
                        to="./main/table-layout-coloured.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Coloured Table</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Datatable */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-air-conditioning-disabled" />
                    </span>
                    <span className="hide-menu">Datatables</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/table-datatable-basic.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Basic Initialisation</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/table-datatable-api.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">API</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/table-datatable-advanced.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">
                          Advanced Initialisation
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Table Jsgrid */}
                {/* ---------------------------------- */}
                {/* ---------------------------------- */}
                {/* Charts */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Charts</span>
                </li>
                {/* ---------------------------------- */}
                {/* Apex Chart */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-chart-pie" />
                    </span>
                    <span className="hide-menu">Apex Charts</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/chart-apex-line.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Line Chart</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/chart-apex-area.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Area Chart</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/chart-apex-bar.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bar Chart</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/chart-apex-pie.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Pie Chart</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/chart-apex-radial.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Radial Chart</span>
                      </Link>
                    </li>
                    <li className="sidebar-item mb-3">
                      <Link
                        to="./main/chart-apex-radar.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Radar Chart</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Sample Pages */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Sample Pages</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-file" />
                    </span>
                    <span className="hide-menu">Sample Pages</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/pages-animation.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Animation</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/pages-search-result.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Search Result</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/pages-gallery.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Gallery</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/pages-treeview.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Treeview</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/pages-block-ui.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Block-Ui</span>
                      </Link>
                    </li>
                    <li className="sidebar-item mb-3">
                      <Link
                        to="./main/pages-session-timeout.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Session Timeout</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* ---------------------------------- */}
                {/* Icons */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Icons</span>
                </li>
                {/* ---------------------------------- */}
                {/* Tabler Icon */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link sidebar-link"
                    to="./main/icon-tabler.html"
                    aria-expanded="false">
                    <span className="rounded-3">
                      <i className="ti ti-archive" />
                    </span>
                    <span className="hide-menu">Tabler Icon</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* Solar Icon */}
                {/* ---------------------------------- */}
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link sidebar-link"
                    to="./main/icon-solar.html"
                    aria-expanded="false">
                    <span className="rounded-3">
                      <i className="ti ti-mood-smile" />
                    </span>
                    <span className="hide-menu">Solar Icon</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* AUTH */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">AUTH</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link sidebar-link"
                    to="./main/authentication-error.html"
                    aria-expanded="false">
                    <span className="rounded-3">
                      <i className="ti ti-alert-circle" />
                    </span>
                    <span className="hide-menu">Error</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-login" />
                    </span>
                    <span className="hide-menu">Login</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-login.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Login</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-login2.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Login</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-user-plus" />
                    </span>
                    <span className="hide-menu">Register</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-register.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Register</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-register2.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Register</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-rotate" />
                    </span>
                    <span className="hide-menu">Forgot Password</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-forgot-password.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Forgot Password</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-forgot-password2.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Forgot Password</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-zoom-code" />
                    </span>
                    <span className="hide-menu">Two Steps</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-two-steps.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Two Steps</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        to="./main/authentication-two-steps2.html"
                        className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Two Steps</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link sidebar-link"
                    to="./main/authentication-maintenance.html"
                    aria-expanded="false">
                    <span className="rounded-3">
                      <i className="ti ti-settings" />
                    </span>
                    <span className="hide-menu">Maintenance</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* DOCUMENTATION */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">DOCUMENTATION</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link sidebar-link"
                    to="./docs/index.html"
                    aria-expanded="false">
                    <span className="rounded-3">
                      <i className="ti ti-file-text" />
                    </span>
                    <span className="hide-menu">Getting Started</span>
                  </Link>
                </li>
                {/* ---------------------------------- */}
                {/* OTHER */}
                {/* ---------------------------------- */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">OTHER</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link has-arrow"
                    to=""
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-box-multiple" />
                    </span>
                    <span className="hide-menu">Menu Level</span>
                  </Link>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <Link to="" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Level 1</span>
                      </Link>
                    </li>
                    <li className="sidebar-item">
                      <Link
                        className="sidebar-link has-arrow"
                        to=""
                        aria-expanded="false">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Level 1.1</span>
                      </Link>
                      <ul aria-expanded="false" className="collapse two-level">
                        <li className="sidebar-item">
                          <Link to="" className="sidebar-link">
                            <div className="round-16 d-flex align-items-center justify-content-center">
                              <i className="ti ti-circle" />
                            </div>
                            <span className="hide-menu">Level 2</span>
                          </Link>
                        </li>
                        <li className="sidebar-item">
                          <Link
                            className="sidebar-link has-arrow"
                            to=""
                            aria-expanded="false">
                            <div className="round-16 d-flex align-items-center justify-content-center">
                              <i className="ti ti-circle" />
                            </div>
                            <span className="hide-menu">Level 2.1</span>
                          </Link>
                          <ul
                            aria-expanded="false"
                            className="collapse three-level">
                            <li className="sidebar-item">
                              <Link to="" className="sidebar-link">
                                <div className="round-16 d-flex align-items-center justify-content-center">
                                  <i className="ti ti-circle" />
                                </div>
                                <span className="hide-menu">Level 3</span>
                              </Link>
                            </li>
                            <li className="sidebar-item">
                              <Link to="" className="sidebar-link">
                                <div className="round-16 d-flex align-items-center justify-content-center">
                                  <i className="ti ti-circle" />
                                </div>
                                <span className="hide-menu">Level 3.1</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link link-disabled"
                    to="#disabled"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-ban" />
                    </span>
                    <span className="hide-menu">Disabled</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="#sub"
                    aria-expanded="false">
                    <i className="ti ti-star" />
                    <div className="hide-menu lh-base">
                      <span className="hide-menu d-block">SubCaption</span>
                      <span className="hide-menu d-block fs-2">
                        This is the sutitle
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link justify-content-between"
                    to="#chip"
                    aria-expanded="false">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-flex">
                        <i className="ti ti-award" />
                      </span>
                      <span className="hide-menu">Chip</span>
                    </div>
                    <div className="hide-menu">
                      <span className="badge rounded-circle bg-primary d-flex align-items-center justify-content-center rounded-pill fs-2">
                        9
                      </span>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link justify-content-between"
                    to="#outlined"
                    aria-expanded="false">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-flex">
                        <i className="ti ti-mood-smile" />
                      </span>
                      <span className="hide-menu">Outlined</span>
                    </div>
                    <span className="hide-menu badge rounded-pill border border-primary text-primary fs-2 py-1 px-2">
                      Outline
                    </span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="https://google.com"
                    aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-star" />
                    </span>
                    <span className="hide-menu">External Link</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="fixed-profile p-3 mx-4 mb-2 bg-secondary-subtle rounded mt-3">
              <div className="hstack gap-3">
                <div className="john-img">
                  <img
                    src="./assets/images/profile/user-1.jpg"
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt="modernize-img"
                  />
                </div>
                <div className="john-title">
                  <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                  <span className="fs-2">Designer</span>
                </div>
                <button
                  className="border-0 bg-transparent text-primary ms-auto"
                  tabIndex={0}
                  type="button"
                  aria-label="logout"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="logout">
                  <i className="ti ti-power fs-6" />
                </button>
              </div>
            </div>
            {/* ---------------------------------- */}
            {/* Start Vertical Layout Sidebar */}
            {/* ---------------------------------- */}
          </div>
        </aside>
        {/*  Sidebar End */}
        <div className="page-wrapper">
          {/*  Header Start */}
          <header className="topbar">
            <div className="with-vertical">
              {/* ---------------------------------- */}
              {/* Start Vertical Layout Header */}
              {/* ---------------------------------- */}
              <nav className="navbar navbar-expand-lg p-0">
                <ul className="navbar-nav">
                  <li className="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                    <Link
                      className="nav-link sidebartoggler"
                      id="headerCollapse"
                      to="">
                      <i className="ti ti-menu-2" />
                    </Link>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-lg-flex">
                    <Link
                      className="nav-link"
                      to=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      <i className="ti ti-search" />
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <Link className="nav-link" to="./main/app-chat.html">
                      Chat
                    </Link>
                  </li>
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <Link className="nav-link" to="./main/app-calendar.html">
                      Calendar
                    </Link>
                  </li>
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <Link className="nav-link" to="./main/app-email.html">
                      Email
                    </Link>
                  </li>
                </ul>
                <div className="d-block d-lg-none py-4">
                  <Link to="./main/index.html" className="text-nowrap logo-img">
                    <img
                      src="./assets/images/logos/dark-logo.svg"
                      className="dark-logo"
                      alt="Logo-Dark"
                    />
                  </Link>
                </div>
                <Link
                  className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
                  to=""
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i className="ti ti-dots fs-7" />
                </Link>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link
                      to=""
                      className="nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#mobilenavbar"
                      aria-controls="offcanvasWithBothOptions">
                      <i className="ti ti-align-justified fs-7" />
                    </Link>
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                      {/* ------------------------------- */}
                      {/* ------------------------------- */}
                      {/* start notification Dropdown */}
                      {/* ------------------------------- */}
                      <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                        <Link
                          className="nav-link position-relative"
                          to=""
                          id="drop2"
                          aria-expanded="false">
                          <i className="ti ti-bell-ringing" />
                          <div className="notification bg-primary rounded-circle" />
                        </Link>
                        <div
                          className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                          aria-labelledby="drop2">
                          <div className="d-flex align-items-center justify-content-between py-3 px-7">
                            <h5 className="mb-0 fs-5 fw-semibold">
                              Notifications
                            </h5>
                            <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                              5 new
                            </span>
                          </div>
                          <div className="message-body" data-simplebar="">
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-2.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Roman Joined the Team!
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Congratulate him
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-3.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  New message
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Salma sent you new message
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-4.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Bianca sent payment
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Check your earnings
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-5.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Jolly completed tasks
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Assign her new tasks
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-6.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  John received payment
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  $230 deducted from account
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-7.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Roman Joined the Team!
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Congratulate him
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="py-6 px-7 mb-1">
                            <button className="btn btn-outline-primary w-100">
                              See All Notifications
                            </button>
                          </div>
                        </div>
                      </li>
                      {/* ------------------------------- */}
                      {/* end notification Dropdown */}
                      {/* ------------------------------- */}
                      {/* ------------------------------- */}
                      {/* start profile Dropdown */}
                      {/* ------------------------------- */}
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link pe-0"
                          to=""
                          id="drop1"
                          aria-expanded="false">
                          <div className="d-flex align-items-center">
                            <div className="user-profile-img">
                              <img
                                src="./assets/images/profile/user-1.jpg"
                                className="rounded-circle"
                                width={35}
                                height={35}
                                alt="modernize-img"
                              />
                            </div>
                          </div>
                        </Link>
                        <div
                          className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                          aria-labelledby="drop1">
                          <div
                            className="profile-dropdown position-relative"
                            data-simplebar="">
                            <div className="py-3 px-7 pb-0">
                              <h5 className="mb-0 fs-5 fw-semibold">
                                User Profile
                              </h5>
                            </div>
                            <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                              <img
                                src="./assets/images/profile/user-1.jpg"
                                className="rounded-circle"
                                width={80}
                                height={80}
                                alt="modernize-img"
                              />
                              <div className="ms-3">
                                <h5 className="mb-1 fs-3">Mathew Anderson</h5>
                                <span className="mb-1 d-block">Designer</span>
                                <p className="mb-0 d-flex align-items-center gap-2">
                                  <i className="ti ti-mail fs-4" />{" "}
                                  info@modernize.com
                                </p>
                              </div>
                            </div>
                            <div className="message-body">
                              <Link
                                to="./main/page-user-profile.html"
                                className="py-8 px-7 mt-8 d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                  <img
                                    src="./assets/images/svgs/icon-account.svg"
                                    alt="modernize-img"
                                    width={24}
                                    height={24}
                                  />
                                </span>
                                <div className="w-100 ps-3">
                                  <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                    My Profile
                                  </h6>
                                  <span className="fs-2 d-block text-body-secondary">
                                    Account Settings
                                  </span>
                                </div>
                              </Link>
                              <Link
                                to="./main/app-email.html"
                                className="py-8 px-7 d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                  <img
                                    src="./assets/images/svgs/icon-inbox.svg"
                                    alt="modernize-img"
                                    width={24}
                                    height={24}
                                  />
                                </span>
                                <div className="w-100 ps-3">
                                  <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                    My Inbox
                                  </h6>
                                  <span className="fs-2 d-block text-body-secondary">
                                    Messages &amp; Emails
                                  </span>
                                </div>
                              </Link>
                              <Link
                                to="./main/app-notes.html"
                                className="py-8 px-7 d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                  <img
                                    src="./assets/images/svgs/icon-tasks.svg"
                                    alt="modernize-img"
                                    width={24}
                                    height={24}
                                  />
                                </span>
                                <div className="w-100 ps-3">
                                  <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                    My Task
                                  </h6>
                                  <span className="fs-2 d-block text-body-secondary">
                                    To-do and Daily Tasks
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="d-grid py-4 px-7 pt-8">
                              <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                                <div className="row">
                                  <div className="col-6">
                                    <h5 className="fs-4 mb-3 fw-semibold">
                                      Unlimited Access
                                    </h5>
                                    <button className="btn btn-primary">
                                      Upgrade
                                    </button>
                                  </div>
                                  <div className="col-6">
                                    <div className="m-n4 unlimited-img">
                                      <img
                                        src="./assets/images/backgrounds/unlimited-bg.png"
                                        alt="modernize-img"
                                        className="w-100"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Link
                                to="./main/authentication-login.html"
                                className="btn btn-outline-primary">
                                Log Out
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* ------------------------------- */}
                      {/* end profile Dropdown */}
                      {/* ------------------------------- */}
                    </ul>
                  </div>
                </div>
              </nav>
              {/* ---------------------------------- */}
              {/* End Vertical Layout Header */}
              {/* ---------------------------------- */}
              {/* ------------------------------- */}
              {/* apps Dropdown in Small screen */}
              {/* ------------------------------- */}
              {/*  Mobilenavbar */}
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex={-1}
                id="mobilenavbar"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <nav className="sidebar-nav scroll-sidebar">
                  <div className="offcanvas-header justify-content-between">
                    <img
                      src="./assets/images/logos/favicon.ico"
                      alt="modernize-img"
                      className="img-fluid"
                    />
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body h-n80" data-simplebar="">
                    <ul id="sidebarnav">
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link has-arrow"
                          to=""
                          aria-expanded="false">
                          <span>
                            <i className="ti ti-apps" />
                          </span>
                          <span className="hide-menu">Apps</span>
                        </Link>
                        <ul
                          aria-expanded="false"
                          className="collapse first-level my-3">
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-chat.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-chat.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Chat Application
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  New messages arrived
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-invoice.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-invoice.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Invoice App
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  Get latest invoice
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-cotact.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-mobile.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Contact Application
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  2 Unsaved Contacts
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-email.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-message-box.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Email App
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  Get new emails
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/page-user-profile.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-cart.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  User Profile
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  learn more information
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-calendar.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-date.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Calendar App
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  Get dates
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-contact2.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-lifebuoy.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Contact List Table
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  Add new contact
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li className="sidebar-item py-2">
                            <Link
                              to="./main/app-notes.html"
                              className="d-flex align-items-center">
                              <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                <img
                                  src="./assets/images/svgs/icon-dd-application.svg"
                                  alt="modernize-img"
                                  className="img-fluid"
                                  width={24}
                                  height={24}
                                />
                              </div>
                              <div>
                                <h6 className="mb-1 bg-hover-primary">
                                  Notes Application
                                </h6>
                                <span className="fs-2 d-block text-muted">
                                  To-do and Daily tasks
                                </span>
                              </div>
                            </Link>
                          </li>
                          <ul className="px-8 mt-7 mb-4">
                            <li className="sidebar-item mb-3">
                              <h5 className="fs-5 fw-semibold">Quick Links</h5>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/page-pricing.html">
                                Pricing Page
                              </Link>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/authentication-login.html">
                                Authentication Design
                              </Link>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/authentication-register.html">
                                Register Now
                              </Link>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/authentication-error.html">
                                404 Error Page
                              </Link>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/app-notes.html">
                                Notes App
                              </Link>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/page-user-profile.html">
                                User Application
                              </Link>
                            </li>
                            <li className="sidebar-item py-2">
                              <Link
                                className="fw-semibold text-dark"
                                to="./main/page-account-settings.html">
                                Account Settings
                              </Link>
                            </li>
                          </ul>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="./main/app-chat.html"
                          aria-expanded="false">
                          <span>
                            <i className="ti ti-message-dots" />
                          </span>
                          <span className="hide-menu">Chat</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="./main/app-calendar.html"
                          aria-expanded="false">
                          <span>
                            <i className="ti ti-calendar" />
                          </span>
                          <span className="hide-menu">Calendar</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="./main/app-email.html"
                          aria-expanded="false">
                          <span>
                            <i className="ti ti-mail" />
                          </span>
                          <span className="hide-menu">Email</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="app-header with-horizontal">
              <nav className="navbar navbar-expand-xl container-fluid p-0">
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2">
                    <Link
                      className="nav-link sidebartoggler"
                      id="sidebarCollapse"
                      to="">
                      <i className="ti ti-menu-2" />
                    </Link>
                  </li>
                  <li className="nav-item d-none d-xl-block">
                    <Link
                      to="./main/index.html"
                      className="text-nowrap nav-link">
                      <img
                        src="./assets/images/logos/dark-logo.svg"
                        className="dark-logo"
                        width={180}
                        alt="modernize-img"
                      />
                      <img
                        src="./assets/images/logos/light-logo.svg"
                        className="light-logo"
                        width={180}
                        alt="modernize-img"
                      />
                    </Link>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex">
                    <Link
                      className="nav-link"
                      to=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      <i className="ti ti-search" />
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav quick-links d-none d-xl-flex align-items-center">
                  {/* ------------------------------- */}
                  {/* start apps Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-flex">
                    <div className="hover-dd">
                      <Link className="nav-link" to="">
                        Apps
                        <span className="mt-1">
                          <i className="ti ti-chevron-down fs-3" />
                        </span>
                      </Link>
                      <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                        <div className="row">
                          <div className="col-8">
                            <div className="ps-7 pt-7">
                              <div className="border-bottom">
                                <div className="row">
                                  <div className="col-6">
                                    <div className="position-relative">
                                      <Link
                                        to="./main/app-chat.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-chat.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Chat Application
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            New messages arrived
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        to="./main/app-invoice.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-invoice.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Invoice App
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            Get latest invoice
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        to="./main/app-contact2.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-mobile.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Contact Application
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            2 Unsaved Contacts
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        to="./main/app-email.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-message-box.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Email App
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            Get new emails
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="position-relative">
                                      <Link
                                        to="./main/page-user-profile.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-cart.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            User Profile
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            learn more information
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        to="./main/app-calendar.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-date.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Calendar App
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            Get dates
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        to="./main/app-contact.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-lifebuoy.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Contact List Table
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            Add new contact
                                          </span>
                                        </div>
                                      </Link>
                                      <Link
                                        to="./main/app-notes.html"
                                        className="d-flex align-items-center pb-9 position-relative">
                                        <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                          <img
                                            src="./assets/images/svgs/icon-dd-application.svg"
                                            alt="modernize-img"
                                            className="img-fluid"
                                            width={24}
                                            height={24}
                                          />
                                        </div>
                                        <div>
                                          <h6 className="mb-1 fw-semibold fs-3">
                                            Notes Application
                                          </h6>
                                          <span className="fs-2 d-block text-body-secondary">
                                            To-do and Daily tasks
                                          </span>
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row align-items-center py-3">
                                <div className="col-8">
                                  <Link
                                    className="fw-semibold d-flex align-items-center lh-1"
                                    to="">
                                    <i className="ti ti-help fs-6 me-2" />
                                    Frequently Asked Questions
                                  </Link>
                                </div>
                                <div className="col-4">
                                  <div className="d-flex justify-content-end pe-4">
                                    <button className="btn btn-primary">
                                      Check
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-4 ms-n4">
                            <div className="position-relative p-7 border-start h-100">
                              <h5 className="fs-5 mb-9 fw-semibold">
                                Quick Links
                              </h5>
                              <ul className="">
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/page-pricing.html">
                                    Pricing Page
                                  </Link>
                                </li>
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/authentication-login.html">
                                    Authentication Design
                                  </Link>
                                </li>
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/authentication-register.html">
                                    Register Now
                                  </Link>
                                </li>
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/authentication-error.html">
                                    404 Error Page
                                  </Link>
                                </li>
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/app-notes.html">
                                    Notes App
                                  </Link>
                                </li>
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/page-user-profile.html">
                                    User Application
                                  </Link>
                                </li>
                                <li className="mb-3">
                                  <Link
                                    className="fw-semibold bg-hover-primary"
                                    to="./main/page-account-settings.html">
                                    Account Settings
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end apps Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <Link className="nav-link" to="./main/app-chat.html">
                      Chat
                    </Link>
                  </li>
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <Link className="nav-link" to="./main/app-calendar.html">
                      Calendar
                    </Link>
                  </li>
                  <li className="nav-item dropdown-hover d-none d-lg-block">
                    <Link className="nav-link" to="./main/app-email.html">
                      Email
                    </Link>
                  </li>
                </ul>
                <div className="d-block d-xl-none">
                  <Link to="./main/index.html" className="text-nowrap nav-link">
                    <img
                      src="./assets/images/logos/dark-logo.svg"
                      width={180}
                      alt="modernize-img"
                    />
                  </Link>
                </div>
                <Link
                  className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
                  to=""
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="p-2">
                    <i className="ti ti-dots fs-7" />
                  </span>
                </Link>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNav">
                  <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                    <Link
                      to=""
                      className="nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#mobilenavbar"
                      aria-controls="offcanvasWithBothOptions">
                      <i className="ti ti-align-justified fs-7" />
                    </Link>
                    <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                      {/* ------------------------------- */}
                      {/* start language Dropdown */}
                      {/* ------------------------------- */}
                      <li className="nav-item nav-icon-hover-bg rounded-circle">
                        <Link className="nav-link moon dark-layout" to="">
                          <i className="ti ti-moon moon" />
                        </Link>
                        <Link className="nav-link sun light-layout" to="">
                          <i className="ti ti-sun sun" />
                        </Link>
                      </li>
                      <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                        <Link
                          className="nav-link"
                          to=""
                          id="drop2"
                          aria-expanded="false">
                          <img
                            src="./assets/images/svgs/icon-flag-en.svg"
                            alt="modernize-img"
                            width="20px"
                            height="20px"
                            className="rounded-circle object-fit-cover round-20"
                          />
                        </Link>
                        <div
                          className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                          aria-labelledby="drop2">
                          <div className="message-body">
                            <Link
                              to=""
                              className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                              <div className="position-relative">
                                <img
                                  src="./assets/images/svgs/icon-flag-en.svg"
                                  alt="modernize-img"
                                  width="20px"
                                  height="20px"
                                  className="rounded-circle object-fit-cover round-20"
                                />
                              </div>
                              <p className="mb-0 fs-3">English (UK)</p>
                            </Link>
                            <Link
                              to=""
                              className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                              <div className="position-relative">
                                <img
                                  src="./assets/images/svgs/icon-flag-cn.svg"
                                  alt="modernize-img"
                                  width="20px"
                                  height="20px"
                                  className="rounded-circle object-fit-cover round-20"
                                />
                              </div>
                              <p className="mb-0 fs-3">中国人 (Chinese)</p>
                            </Link>
                            <Link
                              to=""
                              className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                              <div className="position-relative">
                                <img
                                  src="./assets/images/svgs/icon-flag-fr.svg"
                                  alt="modernize-img"
                                  width="20px"
                                  height="20px"
                                  className="rounded-circle object-fit-cover round-20"
                                />
                              </div>
                              <p className="mb-0 fs-3">français (French)</p>
                            </Link>
                            <Link
                              to=""
                              className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                              <div className="position-relative">
                                <img
                                  src="./assets/images/svgs/icon-flag-sa.svg"
                                  alt="modernize-img"
                                  width="20px"
                                  height="20px"
                                  className="rounded-circle object-fit-cover round-20"
                                />
                              </div>
                              <p className="mb-0 fs-3">عربي (Arabic)</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                      {/* ------------------------------- */}
                      {/* end language Dropdown */}
                      {/* ------------------------------- */}
                      {/* ------------------------------- */}
                      {/* start shopping cart Dropdown */}
                      {/* ------------------------------- */}
                      <li className="nav-item nav-icon-hover-bg rounded-circle">
                        <Link
                          className="nav-link position-relative"
                          to=""
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight">
                          <i className="ti ti-basket" />
                          <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                            2
                          </span>
                        </Link>
                      </li>
                      {/* ------------------------------- */}
                      {/* end shopping cart Dropdown */}
                      {/* ------------------------------- */}
                      {/* ------------------------------- */}
                      {/* start notification Dropdown */}
                      {/* ------------------------------- */}
                      <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                        <Link
                          className="nav-link position-relative"
                          to=""
                          id="drop2"
                          aria-expanded="false">
                          <i className="ti ti-bell-ringing" />
                          <div className="notification bg-primary rounded-circle" />
                        </Link>
                        <div
                          className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                          aria-labelledby="drop2">
                          <div className="d-flex align-items-center justify-content-between py-3 px-7">
                            <h5 className="mb-0 fs-5 fw-semibold">
                              Notifications
                            </h5>
                            <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                              5 new
                            </span>
                          </div>
                          <div className="message-body" data-simplebar="">
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-2.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Roman Joined the Team!
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Congratulate him
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-3.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  New message
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Salma sent you new message
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-4.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Bianca sent payment
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Check your earnings
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-5.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Jolly completed tasks
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Assign her new tasks
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-6.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  John received payment
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  $230 deducted from account
                                </span>
                              </div>
                            </Link>
                            <Link
                              to=""
                              className="py-6 px-7 d-flex align-items-center dropdown-item">
                              <span className="me-3">
                                <img
                                  src="./assets/images/profile/user-7.jpg"
                                  alt="user"
                                  className="rounded-circle"
                                  width={48}
                                  height={48}
                                />
                              </span>
                              <div className="w-100">
                                <h6 className="mb-1 fw-semibold lh-base">
                                  Roman Joined the Team!
                                </h6>
                                <span className="fs-2 d-block text-body-secondary">
                                  Congratulate him
                                </span>
                              </div>
                            </Link>
                          </div>
                          <div className="py-6 px-7 mb-1">
                            <button className="btn btn-outline-primary w-100">
                              See All Notifications
                            </button>
                          </div>
                        </div>
                      </li>
                      {/* ------------------------------- */}
                      {/* end notification Dropdown */}
                      {/* ------------------------------- */}
                      {/* ------------------------------- */}
                      {/* start profile Dropdown */}
                      {/* ------------------------------- */}
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link pe-0"
                          to=""
                          id="drop1"
                          aria-expanded="false">
                          <div className="d-flex align-items-center">
                            <div className="user-profile-img">
                              <img
                                src="./assets/images/profile/user-1.jpg"
                                className="rounded-circle"
                                width={35}
                                height={35}
                                alt="modernize-img"
                              />
                            </div>
                          </div>
                        </Link>
                        <div
                          className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                          aria-labelledby="drop1">
                          <div
                            className="profile-dropdown position-relative"
                            data-simplebar="">
                            <div className="py-3 px-7 pb-0">
                              <h5 className="mb-0 fs-5 fw-semibold">
                                User Profile
                              </h5>
                            </div>
                            <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                              <img
                                src="./assets/images/profile/user-1.jpg"
                                className="rounded-circle"
                                width={80}
                                height={80}
                                alt="modernize-img"
                              />
                              <div className="ms-3">
                                <h5 className="mb-1 fs-3">Mathew Anderson</h5>
                                <span className="mb-1 d-block">Designer</span>
                                <p className="mb-0 d-flex align-items-center gap-2">
                                  <i className="ti ti-mail fs-4" />{" "}
                                  info@modernize.com
                                </p>
                              </div>
                            </div>
                            <div className="message-body">
                              <Link
                                to="./main/page-user-profile.html"
                                className="py-8 px-7 mt-8 d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                  <img
                                    src="./assets/images/svgs/icon-account.svg"
                                    alt="modernize-img"
                                    width={24}
                                    height={24}
                                  />
                                </span>
                                <div className="w-100 ps-3">
                                  <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                    My Profile
                                  </h6>
                                  <span className="fs-2 d-block text-body-secondary">
                                    Account Settings
                                  </span>
                                </div>
                              </Link>
                              <Link
                                to="./main/app-email.html"
                                className="py-8 px-7 d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                  <img
                                    src="./assets/images/svgs/icon-inbox.svg"
                                    alt="modernize-img"
                                    width={24}
                                    height={24}
                                  />
                                </span>
                                <div className="w-100 ps-3">
                                  <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                    My Inbox
                                  </h6>
                                  <span className="fs-2 d-block text-body-secondary">
                                    Messages &amp; Emails
                                  </span>
                                </div>
                              </Link>
                              <Link
                                to="./main/app-notes.html"
                                className="py-8 px-7 d-flex align-items-center">
                                <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                  <img
                                    src="./assets/images/svgs/icon-tasks.svg"
                                    alt="modernize-img"
                                    width={24}
                                    height={24}
                                  />
                                </span>
                                <div className="w-100 ps-3">
                                  <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                    My Task
                                  </h6>
                                  <span className="fs-2 d-block text-body-secondary">
                                    To-do and Daily Tasks
                                  </span>
                                </div>
                              </Link>
                            </div>
                            <div className="d-grid py-4 px-7 pt-8">
                              <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                                <div className="row">
                                  <div className="col-6">
                                    <h5 className="fs-4 mb-3 fw-semibold">
                                      Unlimited Access
                                    </h5>
                                    <button className="btn btn-primary">
                                      Upgrade
                                    </button>
                                  </div>
                                  <div className="col-6">
                                    <div className="m-n4 unlimited-img">
                                      <img
                                        src="./assets/images/backgrounds/unlimited-bg.png"
                                        alt="modernize-img"
                                        className="w-100"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Link
                                to="./main/authentication-login.html"
                                className="btn btn-outline-primary">
                                Log Out
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* ------------------------------- */}
                      {/* end profile Dropdown */}
                      {/* ------------------------------- */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/*  Header End */}
          <aside className="left-sidebar with-horizontal">
            {/* Sidebar scroll*/}
            <div>
              {/* Sidebar navigation*/}
              <nav
                id="sidebarnavh"
                className="sidebar-nav scroll-sidebar container-fluid">
                <ul id="sidebarnav">
                  {/* ============================= */}
                  {/* Home */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Home</span>
                  </li>
                  {/* =================== */}
                  {/* Dashboard */}
                  {/* =================== */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span>
                        <i className="ti ti-home-2" />
                      </span>
                      <span className="hide-menu">Dashboard</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link to="./main/index.html" className="sidebar-link">
                          <i className="ti ti-aperture" />
                          <span className="hide-menu">Modern</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/index2.html" className="sidebar-link">
                          <i className="ti ti-shopping-cart" />
                          <span className="hide-menu">eCommerce</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/index3.html" className="sidebar-link">
                          <i className="ti ti-currency-dollar" />
                          <span className="hide-menu">NFT</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/index4.html" className="sidebar-link">
                          <i className="ti ti-cpu" />
                          <span className="hide-menu">Crypto</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/index5.html" className="sidebar-link">
                          <i className="ti ti-activity-heartbeat" />
                          <span className="hide-menu">General</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/index6.html" className="sidebar-link">
                          <i className="ti ti-playlist" />
                          <span className="hide-menu">Music</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* Apps */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Apps</span>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link two-column has-arrow"
                      to=""
                      aria-expanded="false">
                      <span>
                        <i className="ti ti-archive" />
                      </span>
                      <span className="hide-menu">Apps</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-calendar.html"
                          className="sidebar-link">
                          <i className="ti ti-calendar" />
                          <span className="hide-menu">Calendar</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-kanban.html"
                          className="sidebar-link">
                          <i className="ti ti-layout-kanban" />
                          <span className="hide-menu">Kanban</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-chat.html"
                          className="sidebar-link">
                          <i className="ti ti-message-dots" />
                          <span className="hide-menu">Chat</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="./main/app-email.html"
                          aria-expanded="false">
                          <span>
                            <i className="ti ti-mail" />
                          </span>
                          <span className="hide-menu">Email</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-contact.html"
                          className="sidebar-link">
                          <i className="ti ti-phone" />
                          <span className="hide-menu">Contact Table</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-contact2.html"
                          className="sidebar-link">
                          <i className="ti ti-list-details" />
                          <span className="hide-menu">Contact List</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-notes.html"
                          className="sidebar-link">
                          <i className="ti ti-notes" />
                          <span className="hide-menu">Notes</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/app-invoice.html"
                          className="sidebar-link">
                          <i className="ti ti-file-text" />
                          <span className="hide-menu">Invoice</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/page-user-profile.html"
                          className="sidebar-link">
                          <i className="ti ti-user-circle" />
                          <span className="hide-menu">User Profile</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/blog-posts.html"
                          className="sidebar-link">
                          <i className="ti ti-article" />
                          <span className="hide-menu">Posts</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/blog-detail.html"
                          className="sidebar-link">
                          <i className="ti ti-details" />
                          <span className="hide-menu">Detail</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/eco-shop.html"
                          className="sidebar-link">
                          <i className="ti ti-shopping-cart" />
                          <span className="hide-menu">Shop</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/eco-shop-detail.html"
                          className="sidebar-link">
                          <i className="ti ti-basket" />
                          <span className="hide-menu">Shop Detail</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/eco-product-list.html"
                          className="sidebar-link">
                          <i className="ti ti-list-check" />
                          <span className="hide-menu">List</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/eco-checkout.html"
                          className="sidebar-link">
                          <i className="ti ti-brand-shopee" />
                          <span className="hide-menu">Checkout</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="./main/eco-add-product.html">
                          <i className="ti ti-file-plus" />
                          <span className="hide-menu">Add Product</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="./main/eco-edit-product.html">
                          <i className="ti ti-file-pencil" />
                          <span className="hide-menu">Edit Product</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* Frontend pages */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Frontend pages</span>
                  </li>
                  {/* =================== */}
                  {/* pages */}
                  {/* =================== */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <i className="ti ti-app-window" />
                      </span>
                      <span className="hide-menu">Frontend pages</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/frontend-landingpage.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Homepage</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/frontend-aboutpage.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">About Us</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/frontend-contactpage.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Contact Us</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/frontend-blogpage.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Blog</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/frontend-blogdetailpage.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Blog Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* PAGES */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">PAGES</span>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span>
                        <i className="ti ti-notebook" />
                      </span>
                      <span className="hide-menu">Pages</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/page-faq.html"
                          className="sidebar-link">
                          <i className="ti ti-help" />
                          <span className="hide-menu">FAQ</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/page-account-settings.html"
                          className="sidebar-link">
                          <i className="ti ti-user-circle" />
                          <span className="hide-menu">Account Setting</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/page-pricing.html"
                          className="sidebar-link">
                          <i className="ti ti-currency-dollar" />
                          <span className="hide-menu">Pricing</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/widgets-cards.html"
                          className="sidebar-link">
                          <i className="ti ti-cards" />
                          <span className="hide-menu">Card</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/widgets-banners.html"
                          className="sidebar-link">
                          <i className="ti ti-ad" />
                          <span className="hide-menu">Banner</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/widgets-charts.html"
                          className="sidebar-link">
                          <i className="ti ti-chart-bar" />
                          <span className="hide-menu">Charts</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./landingpage/index.html"
                          className="sidebar-link">
                          <i className="ti ti-app-window" />
                          <span className="hide-menu">Landing Page</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* UI */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">UI</span>
                  </li>
                  {/* =================== */}
                  {/* UI Elements */}
                  {/* =================== */}
                  <li className="sidebar-item mega-dropdown">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <i className="ti ti-layout-grid" />
                      </span>
                      <span className="hide-menu">UI</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-accordian.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Accordian</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-badge.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Badge</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-buttons.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Buttons</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-dropdowns.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Dropdowns</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-modals.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Modals</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/ui-tab.html" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Tab</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-tooltip-popover.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">
                            Tooltip &amp; Popover
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-notification.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Alerts</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-progressbar.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Progressbar</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-pagination.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Pagination</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-typography.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Typography</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-bootstrap-ui.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Bootstrap UI</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-breadcrumb.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Breadcrumb</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-offcanvas.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Offcanvas</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-lists.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Lists</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/ui-grid.html" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Grid</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-carousel.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Carousel</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-scrollspy.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Scrollspy</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/ui-spinner.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Spinner</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="./main/ui-link.html" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Link</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* Forms */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Forms</span>
                  </li>
                  {/* =================== */}
                  {/* Forms */}
                  {/* =================== */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link two-column has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <i className="ti ti-file-text" />
                      </span>
                      <span className="hide-menu">Forms</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      {/* form elements */}
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-inputs.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Forms Input</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-input-groups.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Input Groups</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-input-grid.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Input Grid</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-checkbox-radio.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">
                            Checkbox &amp; Radios
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-bootstrap-switch.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Bootstrap Switch</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-select2.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Select2</span>
                        </Link>
                      </li>
                      {/* form inputs */}
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-basic.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Basic Form</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-vertical.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Form Vertical</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-horizontal.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Form Horizontal</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-actions.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Form Actions</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-row-separator.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Row Separator</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-bordered.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Form Bordered</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-detail.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Form Detail</span>
                        </Link>
                      </li>
                      {/* form wizard */}
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-wizard.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Form Wizard</span>
                        </Link>
                      </li>
                      {/* Quill Editor */}
                      <li className="sidebar-item">
                        <Link
                          to="./main/form-editor-quill.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Quill Editor</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* Tables */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Tables</span>
                  </li>
                  {/* =================== */}
                  {/* Bootstrap Table */}
                  {/* =================== */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <i className="ti ti-layout-sidebar" />
                      </span>
                      <span className="hide-menu">Tables</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-basic.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Basic Table</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-dark-basic.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Dark Basic Table</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-sizing.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Sizing Table</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-layout-coloured.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Coloured Table</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-datatable-basic.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">
                            Basic Initialisation
                          </span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-datatable-api.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">API</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/table-datatable-advanced.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">
                            Advanced Initialisation
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* Charts */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Charts</span>
                  </li>
                  {/* =================== */}
                  {/* Apex Chart */}
                  {/* =================== */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <i className="ti ti-chart-pie" />
                      </span>
                      <span className="hide-menu">Charts</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/chart-apex-line.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Line Chart</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/chart-apex-area.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Area Chart</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/chart-apex-bar.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Bar Chart</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/chart-apex-pie.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Pie Chart</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/chart-apex-radial.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Radial Chart</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/chart-apex-radar.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Radar Chart</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* ============================= */}
                  {/* Icons */}
                  {/* ============================= */}
                  <li className="nav-small-cap">
                    <i className="ti ti-dots nav-small-cap-icon fs-4" />
                    <span className="hide-menu">Icons</span>
                  </li>
                  {/* =================== */}
                  {/* Tabler Icon */}
                  {/* =================== */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <i className="ti ti-archive" />
                      </span>
                      <span className="hide-menu">Icon</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link
                          to="./main/icon-tabler.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Tabler Icon</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          to="./main/icon-solar.html"
                          className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Solar Icon</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* multi level */}
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow"
                      to=""
                      aria-expanded="false">
                      <span className="rounded-3">
                        <iconify-icon
                          icon="solar:airbuds-case-minimalistic-line-duotone"
                          className="ti"
                        />
                      </span>
                      <span className="hide-menu">Multi DD</span>
                    </Link>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <Link to="./docs/index.html" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Documentation</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 1</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link to="" className="sidebar-link has-arrow">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2</span>
                        </Link>
                        <ul
                          aria-expanded="false"
                          className="collapse second-level">
                          <li className="sidebar-item">
                            <Link to="" className="sidebar-link">
                              <i className="ti ti-circle" />
                              <span className="hide-menu">Page 2.1</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            <Link to="" className="sidebar-link">
                              <i className="ti ti-circle" />
                              <span className="hide-menu">Page 2.2</span>
                            </Link>
                          </li>
                          <li className="sidebar-item">
                            <Link to="" className="sidebar-link">
                              <i className="ti ti-circle" />
                              <span className="hide-menu">Page 2.3</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="sidebar-item">
                        <Link to="" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 3</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* End Sidebar navigation */}
            </div>
            {/* End Sidebar scroll*/}
          </aside>
        </div>
        {/*  Search Bar */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content rounded-1">
              <div className="modal-header border-bottom">
                <input
                  type="search"
                  className="form-control fs-3"
                  placeholder="Search here"
                  id="search"
                />
                <Link to="" data-bs-dismiss="modal" className="lh-1">
                  <i className="ti ti-x fs-5 ms-3" />
                </Link>
              </div>
              <div className="modal-body message-body" data-simplebar="">
                <h5 className="mb-0 fs-5 p-1">Quick Page Links</h5>
                <ul className="list mb-0 py-2">
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Modern</span>
                      <span className="text-muted d-block">
                        /dashboards/dashboard1
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Dashboard</span>
                      <span className="text-muted d-block">
                        /dashboards/dashboard2
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Contacts</span>
                      <span className="text-muted d-block">/apps/contacts</span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Posts</span>
                      <span className="text-muted d-block">
                        /apps/blog/posts
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Detail</span>
                      <span className="text-muted d-block">
                        /apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Shop</span>
                      <span className="text-muted d-block">
                        /apps/ecommerce/shop
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Modern</span>
                      <span className="text-muted d-block">
                        /dashboards/dashboard1
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Dashboard</span>
                      <span className="text-muted d-block">
                        /dashboards/dashboard2
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Contacts</span>
                      <span className="text-muted d-block">/apps/contacts</span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Posts</span>
                      <span className="text-muted d-block">
                        /apps/blog/posts
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Detail</span>
                      <span className="text-muted d-block">
                        /apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow
                      </span>
                    </Link>
                  </li>
                  <li className="p-1 mb-1 bg-hover-light-black">
                    <Link to="">
                      <span className="d-block">Shop</span>
                      <span className="text-muted d-block">
                        /apps/ecommerce/shop
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*  Shopping Cart */}
      </div>
    </>
  );
}

export default Header;
