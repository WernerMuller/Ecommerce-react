
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import keyboard from '../img/keyboard.jpg';
import skull from '../img/skull.jpg';


const Slider = props => {
  return (
    
    <div className='slider'>
      <Carousel autoPlay={true} showThumbs={false} showArrows={true} transitionTime={1} infiniteLoop={true}>
        <div>
            <img src={keyboard}  />
        </div>
        <div>
            <img src={skull} />
        </div>
        <div>
            <img src={keyboard} />
        </div>
      </Carousel>

    </div>
  )
}



export default Slider