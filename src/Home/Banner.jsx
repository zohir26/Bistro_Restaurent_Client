import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Home/carousel.css'

import img1 from '../asset/home/01.jpg'
import img2 from '../asset/home/02.jpg'
import img3 from '../asset/home/03.png'
import img4 from '../asset/home/04.jpg'
import img5 from '../asset/home/05.png'
import img6 from '../asset/home/06.png'
const Banner = () => {
    return (

        <>
            <Carousel autoPlay ={true} 
            centerMode= {true}
         
            >
                
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img5} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img6} />
                    <p className="legend">Legend 3</p>
                </div>
              
                
            </Carousel>
        </>
    );
};

export default Banner;