import React from 'react';
import { Carousel } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

import { carouselItem } from './index.module.css';

const { Item } = Carousel;

//TODO: Look into looping through StaticImages, rather than hard coding
const SSWCarousel = () => (
    <div className="main-container">
        <Carousel controls={false}>
            <Item className={carouselItem}>
                <a href="https://vimeo.com/400817895" target="_blank">
                    <figure>
                        <StaticImage
                            src="../../../assets/images/why-ssw.jpeg"
                            alt="why ssw"
                        />
                    </figure>
                </a>
            </Item>
            <Item className={carouselItem}>
                <a
                    // TODO: Update link after implement this page
                    href="https://www.ssw.com.au/SSW/Consulting/Case-Study/SydneyUni.aspx"
                >
                    <figure>
                        <StaticImage
                            src="../../../assets/images/case-study.jpeg"
                            alt="case study"
                        />
                    </figure>
                </a>
            </Item>
            <Item className={carouselItem}>
                <a href="https://tv.ssw.com/" target="_blank">
                    <figure>
                        <StaticImage
                            src="../../../assets/images/ssw-tv.png"
                            alt="ssw tv"
                            width={1140}
                            height={410}
                        />
                    </figure>
                </a>
            </Item>
            <Item className={carouselItem}>
                <a
                    // TODO: Update link after implement this page
                    href="https://www.ssw.com.au/ssw/Consulting/Are-You-Stuck.aspx"
                >
                    <figure>
                        <StaticImage
                            src="../../../assets/images/need-help.jpeg"
                            alt="need help?"
                        />
                    </figure>
                </a>
            </Item>
        </Carousel>
    </div>
);

export default SSWCarousel;
