import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from 'react-bootstrap/Modal';

import './ssw-carousel.css';

const { Item } = Carousel;

const SSWCarousel = () => {
    const [isOpen, setIsOpen] = useState(false);

    //TODO: Look into looping through StaticImages, rather than hard coding
    return (
        <>
            {/*TODO: Fix the video modal*/}
            <Modal
                size="lg"
                show={isOpen}
                dialogClassName="modal-80w"
                onHide={() => {
                    setIsOpen(false);
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>SSW Introduction Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        src="https://player.vimeo.com/video/400817895?h=caf7b4856a&autoplay=1&color=cc4444&title=0&byline=0&portrait=0"
                        width="640"
                        height="360"
                        allow="autoplay; fullscreen; picture-in-picture"
                    ></iframe>
                </Modal.Body>
            </Modal>
            <Carousel controls={false} indicators wrap touch>
                <Item>
                    <figure>
                        <StaticImage
                            src="../../assets/images/why-ssw.jpeg"
                            alt="why ssw"
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        />
                    </figure>
                </Item>
                <Item>
                    <figure>
                        <StaticImage
                            src="../../assets/images/case-study.jpeg"
                            alt="case study"
                        />
                    </figure>
                </Item>
                <Item>
                    <figure>
                        <StaticImage
                            src="../../assets/images/ssw-tv.png"
                            alt="ssw tv"
                            width={1140}
                            height={410}
                        />
                    </figure>
                </Item>
                <Item>
                    <figure>
                        <StaticImage
                            src="../../assets/images/need-help.jpeg"
                            alt="need help?"
                        />
                    </figure>
                </Item>
            </Carousel>
        </>
    );
};

export default SSWCarousel;
