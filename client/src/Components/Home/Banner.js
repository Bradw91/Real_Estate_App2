import React from "react";
import Slider from "react-slick";

export default class Banner extends React.Component{
    render() {
        const settings = { 
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: (
              <div>
                <i className="fas fa-chevron-circle-right" />
              </div>
            ),
            prevArrow: (
              <div>
                <i className="fas fa-chevron-circle-left" />
              </div>
            )            
        };
        return (
            <section id="banner">
                <div className="content">
                    <Slider {...settings}>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}