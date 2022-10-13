import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'


export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.slow
  };

  slides = [
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon1.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon2.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon3.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon4.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon1.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon2.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon3.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon4.png" alt="1" /></div>
    }]


  render() {
    return (
      <div style={{ width: "80%", height: "250px", margin: "0 auto" }} className=''>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div className='z-20 flex flex-row justify-between w-full'>
                    {/* Button left */}
                    <div className="z-50 -ml-20 text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-150  hover:text-[#E1B649]"
                        onClick={() => {
                            this.setState({ goToSlide: this.state.goToSlide - 1 });
                        }}>
                        <MdOutlineArrowBackIosNew />
                    </div>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* button right */}
                    <div className="z-50 -mr-20 text-3xl transition duration-300 ease-in-out cursor-pointer  hover:scale-150  hover:text-[#E1B649]"
                        onClick={() => {
                            this.setState({ goToSlide: this.state.goToSlide + 1 });
                        }}>
                        <MdOutlineArrowForwardIos />
                    </div>

                </div>
      </div>
    );
  }
}
