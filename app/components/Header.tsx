"use client";

import Link from "next/link";
import { useContext } from "react";

import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/50212d175691373 1.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "../Animation";
import { ProductContext } from "../context/appContext";

const Header = () => {
	const pathname = usePathname();

	const { cart } = useContext(ProductContext);

	return (
		<motion.header
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className=" bg-[#2d276b50] fixed w-full top-0  z-20 filter backdrop-blur-sm saturate-150 md:saturate-100"
		>
			<div className="text-white  py-3 flex items-center justify-between  my-max">
				<motion.div
					initial={{ opacity: 0, x: "-10%" }}
					animate={{ opacity: 1, x: "0%" }}
					transition={{ delay: 1.2, duration: 1.7 }}
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
					className="hidden relative md:flex items-center justify-center gap-5"
				>
					{cart.length >= 1 && (
						<div className="absolute z-10 -top-2 p-2 grid place-content-center font-bold rounded-full w-5 h-5 -right-4 bg-[#3a3add]">
							{cart.length}
						</div>
					)}
					<Link
						className={`${
							pathname === "/" &&
							"before:w-full before:h-[4px] before:!bg-[#6456e1] "
						} text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
						href={"/"}
					>
						Home
					</Link>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
								href={""}
							>
								Featured
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={`${
									pathname === "/shop_now" &&
									"before:w-full before:h-[4px] before:!bg-[#6456e1] "
								} text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
								href={"/shop_now"}
							>
								Shop
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
								href={""}
							>
								Explore
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden">
						<motion.li className="list-none" variants={item}>
							<Link
								className={` text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
								href={""}
							>
								Services
							</Link>
						</motion.li>
					</div>
					<div className="overflow-hidden relative">
						<motion.li className=" list-none" variants={item}>
							<Link
								className={` text-sm font-medium uppercase relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
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
