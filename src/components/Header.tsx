import React from 'react';
import { motion } from "framer-motion"

const Header = () => {
	const line = "GOBA."

	const sentence =
	{
		hidden: {  },
		visible:
		{
			transition:{	
				staggerChildren: 0.5,
			},
		},
	}
	const letter = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 2,
				ease: "easeInOut"			
			}
		}
	}
	const svgV = {
		hidden: {},
		visible: {
		    transition: {
			staggerChildren: 0.5
		    }
		}
	}
	const pathV = {
		hidden: {
		    opacity: 0,
		    pathLength: 0 
		},
		visible: {
		    opacity: 1,
		    pathLength: 1,
		    transition: {
			duration: 2,
			ease: "easeInOut"
		    }
		}
	}

	return(
	<div className="w-full  ">
		<div className=" flex  w-full pt-10 justify-start space-x-[40%] items-center">
			<motion.svg width="60" height="40"  fill="none" xmlns="http://www.w3.org/2000/svg"
				variants={svgV}
				initial="hidden"
				animate="visible"
				className="mx-8"
			>
				<motion.line x1="6" y1="6.5" x2="46" y2="6.5" stroke-width="5" className='stroke-pinky  ease-in-out pt-10' variants={pathV}/>
				<motion.line x1="6" y1="16.5" x2="26" y2="16.5" stroke-width="5"  className='stroke-pinky  ease-in-out' variants={pathV}/>
				<motion.line x1="6" y1="26.5" x2="46" y2="26.5" stroke-width="5" className='stroke-pinky  ease-in-out pt-10' variants={pathV}/>
			</motion.svg>
			<motion.div initial="hidden" animate="visible" variants={sentence} className=" text-header text-3xl font-zen">
							{line.split("").map((char, index) => {
								return (
									<motion.span key={char + "-" + index} variants={letter}>
										{char}
									</motion.span>
								)
							})}
						</motion.div>
		</div>
		
	</div>
	
)};
  
export default Header;