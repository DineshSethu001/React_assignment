import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel';
import './banner.css'
import tiger from './images/tiger.jpg'
import gal from './images/gal.jpg'
import color from './images/color.jpg'




function Banner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  

  return (
    <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='item'>
        <img style={{maxHeight:"100vh"}}  
           className="d-block w-100"  
           src={tiger}  
           alt="First slide"  
        />   
           <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img style={{maxHeight:"100vh"}}  
             className="d-block w-100"  
             src={gal}  
             alt="First slide"  
        />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item'>
        <img style={{maxHeight:"100vh"}}  
             className="d-block w-100"  
             src={color}  
            alt="First slide"  
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

export default Banner;