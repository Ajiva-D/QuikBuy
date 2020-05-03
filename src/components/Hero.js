import React from "react";
import "./Hero.css";
// import herobg from './../images/ladybg.jpg'
// import vans from './../images/vans.jpg'
// import jean from './../images/jeanjacket.jpg'
// import redbag from './../images/redbag.jpg'
// import sneakers from './../images/hotsneakers.jpg'
import { Image, Video, Transformation, CloudinaryContext } from "cloudinary-react";
import bg from "./../images/ladybg.jpg";
import one from "./../images/fs-1.jpg";
import two from "./../images/fs-2.jpg";
import three from "./../images/fs-3.jpg";
import four from "./../images/fs-4.jpg";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";

const Hero = () => {
	return (
		<div className="hero">
			<div className="empty">
				<Slide left>
					<h1>SHOP SAVE</h1>
					<h1 id="h1-2">CHECKOUT</h1>
				</Slide>

				<div className="grid-con">
					
						<Image cloudName="ajiva" className="img1" publicId="quikbuy/fs-1.jpg">
							<Transformation quality="auto" fetchFormat="auto" />
						</Image>
						<Image cloudName="ajiva" className="img2" publicId="quikbuy/fs-2.jpg">
							<Transformation quality="auto" fetchFormat="auto" />
						</Image>
						<Image cloudName="ajiva" className="img3" publicId="quikbuy/fs-3.jpg">
							<Transformation quality="auto" fetchFormat="auto" />
						</Image>
						<Image cloudName="ajiva" className="img4" publicId="quikbuy/fs-4.jpg">
							<Transformation quality="auto" fetchFormat="auto" />
						</Image>
						{/* <img className="img1" src={one} alt=""/>
						<img className="img2" src={two} alt=""/>
						<img className="img3" src={three} alt=""/>
						<img className="img4" src={four} alt=""/> */}
				</div>
			</div>
			<div className="hero-bg">
				<Image cloudName="ajiva" publicId="quikbuy/ladybg.jpg">
					<Transformation quality="auto" />
				</Image>
			</div>
		</div>
	);
};
export default Hero;
