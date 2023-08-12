"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";

const MobileNav = () => {
	const pathname = usePathname();
	const [toggleNav, setToggleNav] = useState(false);
	const handleCloseNav = (e: any) => {
		e.stopPropagation();
	};
	return (
		<div className="md:hidden">
			<HiOutlineMenuAlt3
				onClick={() => setToggleNav(true)}
				className="md:hidden"
				size={25}
				color={"white"}
				cursor={"pointer"}
			/>

			<div
				onClick={() => setToggleNav(false)}
				className={`w-full ${
					toggleNav ? "translate-x-0 delay-100 " : "translate-x-full delay-300"
				} fixed top-0 left-0 h-screen bg-[#0000006c] transition-transform`}
			>
				<nav
					onClick={(e: any) => handleCloseNav(e)}
					className={`
                    ${
											toggleNav
												? "translate-x-0 delay-200"
												: "translate-x-full delay-200"
										}
                    flex w-[80%] fixed right-0 flex-col h-full bg-[#000000af] items-center justify-center gap-5 transition-transform`}
				>
					<AiOutlineCloseCircle
						onClick={() => setToggleNav(false)}
						className="absolute top-5 right-5"
						color={"white"}
						size={30}
						cursor={"pointer"}
					/>
					<Link
						className={`
                        ${
													pathname === "/" &&
													"before:w-full before:h-[4px] before:bg-[#6456e7]"
												}
                        active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all `}
						href={"/"}
					>
						Home
					</Link>
					<Link
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all "
						href={""}
					>
						Products
					</Link>
					<Link
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all "
						href={""}
					>
						Shop
					</Link>
					<Link
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all"
						href={""}
					>
						Explore
					</Link>
					<Link
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all"
						href={""}
					>
						Services
					</Link>
					<Link
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all"
						href={""}
					>
						Cart
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default MobileNav;

// className={`fixed top-0 left-0 w-full h-screen bg-[#0000006c] transition-transform duration-300 transform ${
