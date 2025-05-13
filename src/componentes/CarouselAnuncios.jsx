import { Carousel } from "react-bootstrap";
import img1 from "./../assets/images/banner_img (1).jpg";
import img2 from "./../assets/images/banner_img (2).jpg";
import img3 from "./../assets/images/banner_img (3).jpg";
import img4 from "./../assets/images/banner_img (4).jpg";
import img5 from "./../assets/images/banner_img (5).jpg";
import img6 from "./../assets/images/banner_img (6).jpg";

function CarouselAnuncios() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x200.png?text=Anuncio+8"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselAnuncios;
