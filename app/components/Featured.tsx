"use client";
import { motion } from "framer-motion";
import { MutableRefObject, useState } from "react";
import { container, item } from "../Animation";
import SingleFeaturedProduct from "./SingleFeaturedProduct";

const Featured = ({
	featuredRef,
}: {
	featuredRef: MutableRefObject<HTMLDivElement | null>;
}) => {
	const [category, setCategory] = useState("all");
	const featuredProducts = ["all", "wigs", "nails"];

	return (
		<div
			ref={featuredRef}
			id="featured"
			className=" featured relative bg-[#0a0a14] text-white py-28"
		>
			<div className="my-max">
				<motion.h3
					initial={{ opacity: 0, y: "-40%" }}
					whileInView={{
						opacity: 1,
						y: "0%",
						transition: { ease: "easeIn", duration: 0.7 },
					}}
					className="text-2xl mt-7 md:text-4xl text-[#e67f20] font-bold"
				>
					New{" "}
					<span className="font-medium text-xl md:text-3xl text-white">
						Collections{" "}
					</span>
				</motion.h3>
				<motion.h4
					initial={{ opacity: 0, y: "40%" }}
					whileInView={{
						opacity: 1,
						y: "0%",
						transition: { ease: "easeIn", duration: 0.7 },
					}}
					className=" w-fit overflow-x-hidden md:overflow-x-visible  px-1 md:px-0 sm:text-5xl text-[34px] md:pt-5 font-bold text-white  md:text-7xl"
				>
					Featured Products
					<motion.div
						initial={{ opacity: 0, x: "35%" }}
						whileInView={{
							opacity: 1,
							x: "0%",
							transition: { ease: "easeIn", duration: 0.6, delay: 0.5 },
						}}
						viewport={{ once: true }}
						className="after:rounded-full mb-20 after:top-1/2 after:-translate-y-1/2  after:h-4 after:w-4 after:bg-white after:block after:absolute after:-right-1 rounded-full md:mt-5 sm:mt-6  ml-auto  w-3/4 h-1 bg-white relative "
					></motion.div>
				</motion.h4>

				<motion.ul
					variants={container}
					whileInView={"show"}
					initial={"hidden"}
					className="flex gap-7 uppercase items-center justify-center md:justify-normal"
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
										"before:w-full before:!bg-[#3a3ad0] !font-black"
									} cursor-pointer text-base font-semibold uppercase relative before:absolute before:rounded-2xl before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[5px] before:bg-white before:transition-all `}
								>
									{product}
								</p>
							</motion.li>
						);
					})}
				</motion.ul>
			</div>

			<div className="mySwiper my-max mt-10">
				<SingleFeaturedProduct category={category} />
			</div>
		</div>
	);
};

export default Featured;
