/* eslint-disable react/no-unescaped-entities */
"use client";

import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {
	return (
		<>
			<div>
				<motion.h1
					initial={{ opacity: 0, x: "25%" }}
					animate={{
						opacity: 1,
						x: "0",
						transition: { delay: 2.3, duration: 2.3 },
					}}
					className="text-4xl max-w-xs md:max-w-sm text-white md:p-0 p-5 max-wxs md:text-7xl ml-auto md:mt-10 font-normal text-right"
				>
					Let's Shop Beauty
				</motion.h1>
				<div className="mt-[45%] lg:mt-[30%] pb-20">
					<motion.h2
						initial={{ opacity: 0, y: "-25%" }}
						whileInView={{
							opacity: 1,
							y: "0%",
							transition: { delay: 2.7, ease: "easeIn", duration: 1.2 },
						}}
						className="p-5 md:p-0 text-white text-6xl md:max-w-lg lg:max-w-3xl lg:text-9xl max-w-sm md:text-8xl font-black "
					>
						Felion Beauty Mall
					</motion.h2>
					<motion.li
						initial={{ opacity: 0, y: "40%" }}
						whileInView={{
							opacity: 1,
							y: "0%",
							transition: { delay: 0, ease: "easeIn", duration: 1.5 },
						}}
						// viewport={{ once: true }}
					>
						<Link
							href={"/"}
							className="active
							text-[#6456e7] 
							font-bold hover:text-white md:ml-0 ml-5 relative before:absolute before:rounded-sm before:-bottom-2 before:block before:left-0 before:w-1/2 before:hover:w-full before:h-1 before:bg-white cursor-pointer before:hover:bg-[#6456e7] before:transition-all "
						>
							Shop Now
						</Link>
					</motion.li>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: "25%" }}
				whileInView={{
					opacity: 1,
					y: "0%",
					transition: { delay: 0, ease: "easeIn", duration: 1.5 },
				}}
			>
				<BsArrowDown
					tabIndex={0}
					aria-label="scroll down"
					color="white"
					size={70}
					className="my-animation cursor-pointer mx-auto mt-20 mb-7"
				/>
			</motion.div>
		</>
	);
}

export default HeroSection;
