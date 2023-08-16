"use client";
import { motion } from "framer-motion";
import { MutableRefObject, useState } from "react";
import { container, item } from "../Animation";

const Featured = ({
	featuredRef,
}: {
	featuredRef: MutableRefObject<HTMLElement | null>;
}) => {
	const [category, setCategory] = useState("all");
	const featuredProducts = ["all", "wigs", "nails", "serums"];

	const marqueeData = [
		"enjoy a free discount by buying one of the best products from felion artistry",
		"remember your skin really do matters and counts to your beauty",
	];
	return (
		<section
			ref={featuredRef}
			id="featured"
			className=" featured relative bg-[#0a0a14] text-white text-center py-20"
		>
			<div className="w-full flex  bg-[#3da73d] overflow-hidden text-black h-16 absolute -top-8 ">
				<div className="flex w-fit scrolling-text h-full gap-20 ">
					{marqueeData.map((cat) => (
						<>
							<p
								key={cat}
								className={`text-white font-black uppercase grid place-content-center text-2xl md:text-3xl h-full w-full `}
							>
								{cat}
							</p>
						</>
					))}
				</div>
			</div>

			<motion.h1
				initial={{ opacity: 0, y: "-40%" }}
				whileInView={{
					opacity: 1,
					y: "0%",
					transition: { ease: "easeIn", duration: 0.7 },
				}}
				className="text-2xl mt-7 pb-3 md:text-3xl text-[#3da73d] font-black"
			>
				New <span className="font-light text-white">Collections </span>
			</motion.h1>
			<motion.h2
				initial={{ opacity: 0, y: "40%" }}
				whileInView={{
					opacity: 1,
					y: "0%",
					transition: { ease: "easeIn", duration: 0.7 },
				}}
				className="text-4xl md:text-5xl mb-20 font-black"
			>
				Featured Products
			</motion.h2>
			<motion.ul
				variants={container}
				whileInView={"show"}
				initial={"hidden"}
				className="flex gap-7 uppercase items-center justify-center"
			>
				{featuredProducts.map((product) => {
					return (
						<motion.li
							variants={item}
							className="list-none"
							onClick={() => setCategory(product)}
							key={product}
						>
							<p
								className={`${
									product === category &&
									"before:w-full before:!bg-[#6456e7] !font-bold"
								} cursor-pointer text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
							>
								{product}
							</p>
						</motion.li>
					);
				})}
			</motion.ul>
		</section>
	);
};

export default Featured;
