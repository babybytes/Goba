import React from 'react';
import { motion } from "framer-motion"


const Landing = () => {
	

	return(
		<div className="w-full h-full">
			<div className="w-full h-full text-pinky   font-zen flex ">
				<div className="flex flex-col ml-10 w-[50%] pt-[5%] ">
					<div className="text-[16rem]">
						The
					</div>
					<div className="text-7xl ml-[50%] z-10 -mt-[8%] ">
						Perfect
					</div>
				</div>
				<div className="w-[50%]">
					<p className="text-para w-[50%] ml-[30%] pt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget risus nunc eu gravida. Diam sed elit ultricies rhoncus purus aenean sed. Tincidunt viverra vitae imperdiet accumsan lacus, mattis. Lacus nisi, orci, proin risus, molestie pellentesque ultrices rhoncus. Orci orci ultricies placerat duis amet. Sit vitae gravida in amet nec. Purus ut est viverra diam adipiscing integer eget. Vitae, tellus nec lobortis in lectus tincidunt tempus tellus sed. Eget porttitor porttitor lorem mollis ultrices eget posuere duis.
					</p>
				</div>
			</div>
			<div className=" -mt-[7%] ml-[45%]">
				<button className=" bg-para w-[10rem]  font-zen  h-[3rem] text-pinky">		
					OPEN
				</button>
			</div>
			<div className="absolute top-0 ">
				<img src="/images/v1.png" className="w-[1rem] ml-[78rem] mt-[5.5rem]"/>
				<img src="/images/e1.png" className="w-[2rem] ml-[22em] mt-[2rem]  "/>
				<img src="/images/e2.png" className="w-[2rem]  ml-[55rem] pt-[5rem] "/>
				<img src="/images/donut.png" className="w-[39rem] ml-[15rem] -mt-[11rem]"/>
				<img src="/images/e1.png" className="w-[2rem]  ml-[85rem] -mt-[18rem] "/>
				<img src="/images/triangle.png" className="w-[26rem] ml-[80rem] -mt-[2rem]"/>
				<img src="/images/e3.png" className="w-[2rem] ml-[8rem] -mt-[10rem]"/>
				<img src="/images/e2.png" className="w-[2rem] ml-[105rem] -mt-[2rem]"/>
				<img src="/images/e3.png" className="w-[2rem] ml-[90rem] mt-[5rem]"/>
			</div>
		</div>
)};
  
export default Landing;