import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/50212d175691373 1.svg";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
	const getFullYear = () => {
		const date = new Date();
		return date.getFullYear();
	};
	return (
		<div className="bg-[#000000f1] text-white">
			<div className="my-max py-7 lg:grid lg:grid-cols-4 flex items-center justify-between flex-wrap gap-5">
				<div>
					<Link href={"/"}>
						<Image
							className="w-auto cursor-pointer h-auto select-none"
							width={150}
							height={150}
							alt="Felion Beauty mall"
							src={logo}
						></Image>
					</Link>

					<p className="text-base text-[#858585] font-normal">
						Our priority is to make your skin beautiful and glowy at the end of
						the day
					</p>
				</div>
				<div>
					<h6 className="font-bold text-xl md:text-2xl mb-2">Address</h6>

					<p className="text-base font-normal text-[#858585]">
						<span className="block">AW/W1D</span>
						<span>Eastern Region Adukrom Ghana</span>
					</p>
				</div>
				<div>
					<h6 className="font-bold text-xl md:text-2xl mb-2">Contact</h6>

					<p className="text-base font-normal text-[#858585]">
						<span className="block">+2334574897</span>
						<span>felionartistry@gmail.com</span>
					</p>
				</div>
				<div>
					<h6 className="font-bold text-xl md:text-2xl mb-2">Office</h6>

					<p className="text-base font-normal text-[#858585]">
						<span className="block">Monday - Friday</span>
						<span>7am - 4pm</span>
					</p>
				</div>
			</div>
			<div className="my-max">
				<hr className="h-[1px] opacity-10" />
				<div className="flex py-7 items-center gap-7 justify-between">
					<div className="flex items-center gap-5">
						<BsInstagram color="white" size={25} cursor="pointer" />
						<BsFacebook color="white" size={25} cursor="pointer" />
					</div>
					<div>
						<span>&copy; {getFullYear()} All rights reserved</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
