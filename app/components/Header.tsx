"use client";

import Link from "next/link";
import React from "react";

import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/50212d175691373 1.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "../components/Animation";

const Header = () => {
	const pathname = usePathname();
	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className=" bg-[#ffffff10] sticky top-0  z-20 filter backdrop-blur-sm saturate-150 md:saturate-100"
		>
			<div className="text-white py-3 flex items-center justify-between  my-max">
				<motion.div
					initial={{ opacity: 0, x: "-15%" }}
					animate={{ opacity: 1, x: "0%" }}
					transition={{ delay: 1.4, duration: 2 }}
					variants={container}
				>
					<Link href={"/"}>
						<Image
							className="w-auto cursor-pointer h-auto select-none"
							width={150}
							height={150}
							alt=""
							src={logo}
						></Image>
					</Link>
				</motion.div>
				<motion.nav
					variants={container}
					animate="show"
					initial={"hidden"}
					className="hidden md:flex items-center justify-center gap-5"
				>
					<Link
						className={`${
							pathname === "/" &&
							"before:w-full before:h-[4px] before:!bg-[#6456e7]"
						} text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
						href={"/"}
					>
						Home
					</Link>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
								href={""}
							>
								Shop
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
								href={""}
							>
								Products
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
								href={""}
							>
								Explore
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
								href={""}
							>
								Services
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
								href={""}
							>
								Cart
							</Link>
						</motion.li>
					</div>
				</motion.nav>

				{/* <Link
					className="hidden text-xl md:flex font-bold hover:underline new"
					href={"/"}
				>
					African Beauty
				</Link> */}
				<MobileNav />
			</div>
		</motion.header>
	);
};

export default Header;
