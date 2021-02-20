import React from "react";

function Navbar() {
  return (
    <div class=" bg2">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light  pb-5 ">
          <a class="navbar-brand" href="index.html">
            <img src="https://i.imgur.com/rhu0feA.png" />
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div
            class="collapse navbar-collapse mx-5 px-5 c1"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item c1">
                <a class="nav-link" href="About us.html">
                  About Us{" "}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button
                class="btn btn-outline-na my-2 my-sm-0 mr-2"
                type="submit"
              >
                Login
              </button>
              <button class="btn btn-outline-nav my-2 my-sm-0" type="submit">
                Sign up
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
