"use client";
import TrendingProduct from "./TrendingProduct";
import { motion } from "framer-motion";

const Trending = () => {
	return (
		<div className="trending-bg">
			<section className="my-max pb-20">
				<motion.h6
					initial={{ opacity: 0, y: "30%" }}
					whileInView={{
						opacity: 1,
						y: "0%",
						transition: { ease: "easeIn", duration: 0.9 },
					}}
					viewport={{ once: true }}
					className=" w-fit sm:text-5xl text-[36px] mb-5 pt-20 font-bold text-white  md:text-7xl"
				>
					Trending Products
					<div className="after:rounded-full after:top-1/2 after:-translate-y-1/2  after:h-4 after:w-4 after:bg-white after:block after:absolute after:-right-1 rounded-full md:mt-5 sm:mt-6  ml-auto  w-3/4 h-1 bg-white relative"></div>
				</motion.h6>
				<motion.p
					initial={{ opacity: 0, y: "40%" }}
					whileInView={{
						opacity: 1,
						y: "0%",
						transition: { ease: "easeIn", duration: 0.9 },
					}}
					viewport={{ once: true }}
					className=" max-w-md text-base text-white mb-20"
				>
					Explore the newest and trending products in demand. The more you buy,
					the more you get gifted
				</motion.p>
				<div className="flex h-full gap-10  md:flex-row flex-col items-center justify-between">
					<TrendingProduct />
					<div className="trending-bg-small relative">
						<motion.p
							initial={{ opacity: 0, y: "-20%" }}
							whileInView={{
								opacity: 1,
								y: "0%",
								transition: { ease: "easeIn", duration: 0.3 },
							}}
							className="text-white font-medium absolute top-10 left-5"
						>
							Explore top quality products from Felion.
						</motion.p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Trending;
