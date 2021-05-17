import { Component } from "react";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  img =
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN";
  img1 =
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80  ";

  img2 = "https://www.giftstoindia24x7.com/ASP_Img/IMG1000/GTI423986.jpg";

  render() {
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={this.img}
              class="d-block w-100"
              style={{ height: "700px" }}
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={this.img1}
              class="d-block w-100"
              style={{ height: "700px" }}
              alt="..."
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={this.img2}
              class="d-block w-100"
              style={{ height: "800px" }}
              alt="..."
            ></img>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;
