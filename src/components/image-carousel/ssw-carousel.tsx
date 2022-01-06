import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Modal from 'react-bootstrap/Modal'

import './ssw-carousel.css'

const SSWCarousel = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            {/*TODO: Fix the video modal*/}
            <Modal 
                size="lg"
                show={isOpen}
                dialogClassName="modal-80w"
                onHide={()=>{setIsOpen(false)}}>
                <Modal.Header closeButton> 
                    <Modal.Title>SSW Introduction Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe 
                        src="https://player.vimeo.com/video/400817895?h=caf7b4856a&autoplay=1&color=cc4444&title=0&byline=0&portrait=0" 
                        width="640" 
                        height="360" 
                        allow="autoplay; fullscreen; picture-in-picture"></iframe>
                </Modal.Body>
            </Modal>
            <Carousel 
                controls={false}
                indicators
                wrap
                touch>
                <Carousel.Item>
                    <StaticImage
                        className="d-block w-100"
                        src="../../assets/images/image-carousel/Banner-Why-SSW.jpg"
                        alt='Why SSW'
                        onClick={() => {setIsOpen(true)}}
                        />             
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
        </>
    );
}

export default SSWCarousel;