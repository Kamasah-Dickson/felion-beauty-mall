"use client";

import Link from "next/link";
import React from "react";

import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/50212d175691373 1.svg";
import Image from "next/image";

const Header = () => {
	const pathname = usePathname();
	return (
		<header className=" bg-[#ffffff10] sticky top-0 p-4 z-20 filter backdrop-blur-sm saturate-150 md:saturate-100">
			<div className="text-white flex items-center justify-between  my-max">
				<Link href={"/"}>
					<Image
						className="w-auto cursor-pointer h-auto select-none"
						width={150}
						height={150}
						alt=""
						src={logo}
					></Image>
				</Link>
				<nav className="hidden md:flex items-center justify-center gap-5">
					<Link
						className={`${
							pathname === "/" &&
							"before:w-full before:h-[4px] before:!bg-[#6456e7]"
						} text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
						href={"/"}
					>
						Home
					</Link>
					<Link
						className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
						href={""}
					>
						Products
					</Link>
					<Link
						className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all `}
						href={""}
					>
						Shop
					</Link>
					<Link
						className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
						href={""}
					>
						Explore
					</Link>
					<Link
						className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
						href={""}
					>
						Services
					</Link>
					<Link
						className={` text-lg font-normal relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-[3px] before:bg-white before:transition-all`}
						href={""}
					>
						Cart
					</Link>
				</nav>

				{/* <Link
					className="hidden text-xl md:flex font-bold hover:underline new"
					href={"/"}
				>
					African Beauty
				</Link> */}
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
