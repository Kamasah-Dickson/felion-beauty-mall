import Image from "next/image";
import React from "react";
import quality from "@/public/assets/Quality Suport.svg";
import returnImage from "@/public/assets/loop.svg";

const Integrity = () => {
	return (
		<div className=" bg-[#00030af5]">
			<div className="my-max py-14 gap-10 flex flex-col sm:flex-row items-center justify-center">
				<div className="max-w-xs md:mx-0  mx-auto flex items-center flex-col">
					<div className="">
						<Image src={quality} alt="Quality support" width={70} height={70} />
					</div>
					<div className=" ">
						<h6 className="text-white my-3 text-center font-bold text-2xl md:text-3xl">
							Quality Support
						</h6>
						<p className="text-white text-center">
							Feel free to contact us. We are open for all your questions and
							doubts.
						</p>
					</div>
				</div>
				<div className="max-w-xs md:mx-0  mx-auto flex items-center flex-col">
					<div className="">
						<Image
							src={returnImage}
							alt="Quality support"
							width={70}
							height={70}
						/>
					</div>
					<div className=" ">
						<h6 className="text-white my-3 text-center font-bold text-2xl md:text-3xl">
							48hrs Return
						</h6>
						<p className="text-white text-center">
							We are open to recieve back any product you buy if it has not been
							compromised within 48hrs.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Integrity;
