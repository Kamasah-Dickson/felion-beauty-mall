"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { ProductContext } from "../context/appContext";

const MobileNav = () => {
	const pathname = usePathname();
	const { cart } = useContext(ProductContext);
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
				} fixed top-0  md:flex left-0 h-screen bg-[#0000007a] transition-transform`}
			>
				<nav
					onClick={(e: any) => handleCloseNav(e)}
					className={`
                    ${
											toggleNav
												? "translate-x-0 delay-200"
												: "translate-x-full delay-200"
										}
                    flex w-[80%] fixed  right-0 flex-col h-full bg-[#000000c7] items-center justify-center gap-5 transition-transform`}
				>
					<AiOutlineCloseCircle
						onClick={() => setToggleNav(false)}
						className="absolute top-5 right-5"
						color={"white"}
						size={30}
						cursor={"pointer"}
					/>
					<Link
						onClick={() => setToggleNav(false)}
						className={`
                        ${
													pathname === "/" &&
													"before:w-full before:h-[4px] before:!bg-[#6456e7]"
												}
                        active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all `}
						href={"/"}
					>
						Home
					</Link>
					<Link
						href={"/shop_now"}
						onClick={() => setToggleNav(false)}
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all "
					>
						Shop
					</Link>

					<Link
						href={"/faq"}
						onClick={() => setToggleNav(false)}
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all"
					>
						FAQ
					</Link>

					<Link
						href={"/contact"}
						onClick={() => setToggleNav(false)}
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all"
					>
						Contact
					</Link>

					<Link
						href={"/cart"}
						onClick={() => setToggleNav(false)}
						className="active relative before:absolute before:rounded-sm before:-bottom-1 before:block before:left-0 before:w-0 before:hover:w-full before:h-1 before:bg-white before:transition-all"
					>
						Cart
						{cart.length >= 1 && (
							<div className="absolute z-10 -top-2 p-2 grid place-content-center font-bold rounded-full w-5 h-5 -right-4 bg-[#3a3add]">
								{cart.length}
							</div>
						)}
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default MobileNav;
