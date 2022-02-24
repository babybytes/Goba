import React from 'react';


const Landing = () => (
	<div className="w-full h-full ">
		<div className="  w-full h-screen bg-gradient-to-r from-bg via-neutral-900 to-black pt-[5%] font-zen ">
			<div className="  flex  justify-around">
				<div className="text-pinky px-10 w-[50%] flex flex-col pt-[5%]">		
					<div className=" text-[16rem]">
						The
					</div>
					<div className=" text-7xl px-[50%] z-10">
						Perfect
					</div>
					<div className=" absolute px-[5%]  ">
						<img src="/images/donut.png" />
					</div>
				</div>
				<div className=" w-[50%] flex flex-col items-center ">
					<div className="text-para w-[50%] text-md ">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget risus nunc eu gravida. Diam sed elit ultricies rhoncus purus aenean sed. Tincidunt viverra vitae imperdiet accumsan lacus, mattis. Lacus nisi, orci, proin risus, molestie pellentesque ultrices rhoncus. Orci orci ultricies placerat duis amet. Sit vitae gravida in amet nec. Purus ut est viverra diam adipiscing integer eget. Vitae, tellus nec lobortis in lectus tincidunt tempus tellus sed. Eget porttitor porttitor lorem mollis ultrices eget posuere duis.
						</p>
					</div>
					<div className="absolute pt-[20%]">
						<img src="/images/triangle.png" />
					</div>
				</div>
			</div>
		</div>
		
	</div>
	
);
  
export default Landing;