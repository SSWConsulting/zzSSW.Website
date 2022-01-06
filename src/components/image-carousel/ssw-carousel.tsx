import React from "react";
import { Carousel } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from './ssw-carousel.module.css'

const SSWCarousel = () => {
    return(
        <Carousel 
            className={styles.sswCarousel} 
            controls={false}
            indicators
            wrap
            touch>
            <Carousel.Item>
            <a className="lightbox ignore" href="https://vimeo.com/400817895">
                <StaticImage
                    className="d-block w-100"
                    src="../../assets/images/image-carousel/Banner-Why-SSW.jpg"
                    alt='Why SSW'
                    />
            </a>              
            </Carousel.Item>
            <Carousel.Item>
            <a href="/consulting/case-study/sydney-uni">
                <StaticImage
                    className="d-block w-100"
                    src="../../assets/images/image-carousel/Banner-BREAST-case-study.jpg"
                    alt="BREAST case study"
                />
            </a>              
            </Carousel.Item>
            <Carousel.Item style={{height:'410px'}}>
            <a href="https://tv.ssw.com/">
                <StaticImage
                    className="d-block"
                    src="../../assets/images/image-carousel/Banner-SSWTV.png"
                    alt="SSW TV"
                />
            </a>    
            </Carousel.Item>
            <Carousel.Item>
            {/* TODO: Add the are you stuck page */}
                <a href="/consulting/are-you-stuck">
                <StaticImage
                    className="d-block w-100"
                    src="../../assets/images/image-carousel/Banner-Are-You-Stuck.jpg"
                    alt="Are you stuck?"
                />
                </a>
            </Carousel.Item>          
        </Carousel>
    );
}

export default SSWCarousel;