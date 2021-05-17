import { render } from "@testing-library/react";
import { Component } from "react";
import { Link, Router } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchtext: undefined,
    };
  }
  searchtext;
  getsearchText = (event) => {
    //
    this.searchtext = event.target.value;
    this.setState({
      searchtext: this.searchtext,
    });
  };

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">
            <a class="navbar-brand nn" href="#">
              🎂 My Cake
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link to="/dashboard">
                  <button
                    class="btn btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    style={{ height: "60px", width: "60px" }}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="user-lock"
                      class="svg-inline--fa fa-user-lock fa-w-20"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </li>
            </ul>
            <Link to={`/cart`}>
              <button type="button" class="btn btn-info buttons">
                <i class="fas fa-cart-plus"></i>
              </button>
            </Link>

            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                onChange={this.getsearchText}
                placeholder="Search"
                aria-label="Search"
              ></input>
              {/* <Router>
      <Link to={"/search/"+this.nname}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>

      </Router> */}

              <Link to={`/search?q=${this.searchtext}`}>
                <button
                  class="btn btn-outline-success my-2 my-sm-0 buttons"
                  style={{ margin: "10px" }}
                  type="submit"
                >
                  Search
                </button>
              </Link>

              <Link to="/Login">
                <button
                  class="btn btn-outline-success my-2 my-sm-0 buttons"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
