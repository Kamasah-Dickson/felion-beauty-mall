/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Header from "./components/Header";
import { BsArrowDown } from "react-icons/bs";

export default function Home() {
	return (
		<div className="max-w-[1440px] mx-auto">
			<Header />
			<section className="my-max md:px-5">
				<div>
					<h1 className="text-4xl max-w-xs md:max-w-sm text-white md:p-0 p-5 max-wxs md:text-7xl ml-auto md:mt-10 font-normal text-right">
						Let's Shop Beauty
					</h1>

					<div className="mt-[45%] lg:mt-[35%] pb-20">
						<h2 className="p-5 md:p-0 text-white text-6xl md:max-w-lg lg:max-w-3xl lg:text-9xl max-w-sm md:text-8xl font-black ">
							Felion Beauty Mall
						</h2>
						<Link
							href={"/"}
							className="active
						 text-[#6456e7] 
						 font-bold hover:text-white md:ml-0 ml-5 relative before:absolute before:rounded-sm before:-bottom-2 before:block before:left-0 before:w-1/2 before:hover:w-full before:h-1 before:bg-white cursor-pointer before:hover:bg-[#6456e7] before:transition-all "
						>
							Shop Now
						</Link>
					</div>
				</div>
				<BsArrowDown
					tabIndex={0}
					aria-label="scroll down"
					color="white"
					size={70}
					className="my-animation cursor-pointer mx-auto mt-20 mb-7"
				/>
			</section>
		</div>
	);
}
