import React from 'react';
import { motion } from "framer-motion"


const Landing = () => {
	

	return(
		<div className="w-full h-full ">
			<div className="  w-full h-screen bg-gradient-to-r from-bg via-neutral-900 to-black pt-[5%] font-zen ">
				<div className="  flex  justify-around h-[95%]">
					<div className="text-pinky px-10 w-[55%] flex flex-col pt-[5%]">
						<div className="absolute px-[14%] -mt-5 ">
							<img src="/images/e1.png" className="w-[70%]" />
						</div>
						<div className="absolute px-[40%] mt-[5%]">
							<img src="/images/e2.png" className="w-[70%]" />
						</div>
						<div className="absolute px-[5%] mt-[25%]">
							<img src="/images/e3.png" className="w-[70%]" />
						</div>
						<div className="  px-[8%]  absolute">
							<img src="/images/donut.png" className=" w-[85%]  -mt-[10%]"/>
						</div>		
						<div className=" text-[14rem]">
							The
						</div>
						
						<div className=" text-7xl px-[42%] z-10 -mt-[6%]">
							Perfect
						</div>
						<div className="flex justify-end z-10 pt-[20%] ">
							<button className="rounded-none bg-para w-[15%] flex justify-center items-center h-[3rem]">
								<span>
									OPEN
								</span>
							</button>
						</div>
						
					</div>
					<div className=" w-[50%] flex flex-col items-center ">

						<div className="text-para w-[35%] text-sm ">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget risus nunc eu gravida. Diam sed elit ultricies rhoncus purus aenean sed. Tincidunt viverra vitae imperdiet accumsan lacus, mattis. Lacus nisi, orci, proin risus, molestie pellentesque ultrices rhoncus. Orci orci ultricies placerat duis amet. Sit vitae gravida in amet nec. Purus ut est viverra diam adipiscing integer eget. Vitae, tellus nec lobortis in lectus tincidunt tempus tellus sed. Eget porttitor porttitor lorem mollis ultrices eget posuere duis.
							</p>
						</div>
						<div className="absolute   -mx-[8%] -mt-4">
							<img src="/images/v1.png" className="w-[70%]" />
						</div>
						<div className="absolute pt-[20%]  -mx-[5%] ">
							<img src="/images/e1.png" className="w-[70%]" />
						</div>
						<div className="absolute pt-[30%] mx-[10%]">
							<img src="/images/e2.png" className="w-[70%]" />
						</div>
						<div className="absolute pt-[38%] -mx-5  ">
							<img src="/images/e3.png" className="w-[70%]" />
						</div>
						<div className="absolute pt-[20%]">
							<img src="/images/triangle.png" />
						</div>
					</div>
					
				</div>
				<div className=" flex  w-full  justify-around space-x-[60%] ">
						<div className="text-para  font-zen ">
							qewrefgrh dfgnhmj dfbgnh sfgh
						</div>
						<div className="font-zen text-pinky flex ">
							<div className="px-5">
								FB
							</div>
							<div className="px-5">
								INSTA
							</div>
							<div className="px-5">
								TW
							</div>			
						</div>
				</div>
				
			</div>
			
		</div>
)};
  
export default Landing;