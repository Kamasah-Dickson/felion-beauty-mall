/* eslint-disable react/no-unescaped-entities */
"use client";

import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Featured from "./Featured";
import { useRef } from "react";
import Image from "next/image";
import homepageBg from "@/public/assets/homepageBg.svg";

function HeroSection() {
	const featuredRef = useRef<HTMLDivElement | null>(null);

	const scrollToSection = () => {
		if (featuredRef.current) {
			featuredRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<div className="relative min-h-screen overflow-x-hidden w-full">
				<div className="overlay-blend"></div>
				<Image
					src={homepageBg}
					alt="Felion Beauty mall"
					layout="fill"
					objectFit="cover"
					priority
					className="object-top"
				/>
				<section className="md:px-5 z-[2] relative my-max mt-24">
					<motion.h1
						initial={{ opacity: 0, x: "15%" }}
						animate={{
							opacity: 1,
							x: "0",
							transition: { delay: 0.8, duration: 1.3 },
						}}
						className="text-5xl font-bold max-w-xs md:max-w-sm text-white md:p-0 p-5 md:text-7xl ml-auto md:mt-10 text-right"
					>
						Let's Shop Beauty
					</motion.h1>
					<div className="mt-[45%] lg:mt-[30%] pb-20">
						<motion.h2
							initial={{ opacity: 0, y: "-25%" }}
							whileInView={{
								opacity: 1,
								y: "0%",
								transition: { delay: 0.7, ease: "easeIn", duration: 1.1 },
							}}
							viewport={{ once: true }}
							className="p-5 md:p-0 text-white text-6xl md:max-w-lg lg:max-w-3xl lg:text-9xl max-w-sm md:text-8xl font-black "
						>
							Felion Beauty Mall
						</motion.h2>
						<ul>
							<motion.li
								className="list-none"
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
						</ul>
					</div>
					<motion.div
						className="mb-80 relative w-12 h-12 mx-auto before:absolute before:border
						before:border-dashed before:-z-10 before:my-animation before:h-20 before:rounded-full before:w-20"
						initial={{ opacity: 0, y: "25%" }}
						whileInView={{
							opacity: 1,
							y: "0%",
							transition: { delay: 0, ease: "easeIn", duration: 1.5 },
						}}
						onClick={scrollToSection}
					>
						<BsArrowDown
							tabIndex={0}
							aria-label="scroll down"
							color="white"
							size={80}
							className="outline-none cursor-pointer  scale-[0.7] mx-auto mt-20"
						/>
					</motion.div>
				</section>
			</div>
			<Featured featuredRef={featuredRef} />
			{/* Rest of your code */}
		</>
	);
}

export default HeroSection;
