import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import { Container } from 'react-bootstrap/lib/Tab';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel className="d-block w-100" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gamechangersmovie.com/wp-content/uploads/2019/09/recipes-header-1600x1066.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Halibut and Summer Squash with Pumpkin Seeds</h3>
          <p>If you can only find skin-on halibut, carry on: After the fish is cooked, wiggle a spatula between the skin and the fillet, and it will slip right off.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.foodsafety.gov/sites/default/files/styles/og_image_style/public/2019-05/Keep%20Food%20Safe.jpg?h=a4d068ee&itok=1SFsheMq"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Halibut and Summer Squash with Pumpkin Seeds</h3>
          <p>If you can only find skin-on halibut, carry on: After the fish is cooked, wiggle a spatula between the skin and the fillet, and it will slip right off.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/proxy/MGZ09OX6x9B5YM5tg8gNxnTfu0D2yMWhwfdyXQTD8kaAR-uUXfGbAGrSli8w43ep1ZtT2lOKBWOKm3ROnbKuQrd_c6kTY_vYhc3o1PgdzaNswu8i5NZxKq9I8-75r9xmKVP8vdXG5kA8a9H9EmvgHYY"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Halibut and Summer Squash with Pumpkin Seeds</h3>
          <p>If you can only find skin-on halibut, carry on: After the fish is cooked, wiggle a spatula between the skin and the fillet, and it will slip right off.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dta0yqvfnusiq.cloudfront.net/thewaterstreetgrill/2016/12/entreesmenupic2-161202-5841c3d988f25.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Buckwheat and Shiitake Mushroom Salad with Gouda</h3>
          <p>A salad where one of the main ingredients is cheese? Okay yes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.bonappetit.com/photos/596a82e72b659b48a371c338/1:1/w_1600%2Cc_limit/braised-chicken-and-tomatoes.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lemony Braised Chicken Legs and Tomatoes</h3>
          <p>
            If you are on the fence about cinnamon in savory dishes, this could be the chicken recipe that puts it in your YES column.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default ControlledCarousel;