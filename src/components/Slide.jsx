import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg';
import photo3 from '../photos/photo3.jpg';
import photo4 from '../photos/photo4.jpg';
import photo5 from '../photos/photo5.jpg';
import './slide.css'

const proprietes = {
    duration: 5000,
    transitionDuration : 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = ()=> {
  return (
    <div className="containerSlide">
      <Slide {...proprietes}>
          <div className="each-slide">
            <div>
              <img src={photo1} alt="photo1" /> 
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={photo2} alt="photo2" /> 
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={photo3} alt="photo3" /> 
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={photo4} alt="photo4" /> 
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={photo5} alt="photo5" /> 
            </div>
          </div>
      </Slide>
    </div>
  )
}

export default Slideshow;