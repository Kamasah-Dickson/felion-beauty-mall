import Image from "next/image";
import shopBackground from "@/public/assets/shopBackground.svg";
import { BsArrowDown } from "react-icons/bs";

function page() {
	return (
		<div className="relative min-h-screen overflow-x-hidden w-full">
			<div className="overlay-blend"></div>
			<Image
				src={shopBackground}
				alt="Felion Beauty mall"
				fill
				objectFit="cover"
				priority
				className="object-center"
			/>
			<section className="md:px-5 z-[2] relative my-max mt-24">
				<h1 className="text-base font-normal max-w-xs md:max-w-sm text-white md:p-0 p-5 md:text-lg ml-auto md:mt-10 text-right">
					Buy more than Gh300 of products and start earning free gifts with
					felion beauty.{" "}
				</h1>
				<div className="mt-[45%] lg:mt-[30%] pb-20">
					<h2 className="p-5 md:p-0 text-white text-6xl md:max-w-lg lg:max-w-3xl lg:text-9xl max-w-sm md:text-8xl font-black ">
						{`Let's`} shop Beauty!
					</h2>
				</div>
				<div
					className="mb-80 relative w-12 h-12 mx-auto before:absolute before:border
					before:border-dashed before:-z-10 before:my-animation before:h-20 before:rounded-full before:w-20"

					// onClick={scrollToSection}
				>
					<BsArrowDown
						tabIndex={0}
						aria-label="scroll down"
						color="white"
						size={80}
						className="outline-none cursor-pointer  scale-[0.7] mx-auto mt-20"
					/>
				</div>
			</section>
		</div>
	);
}

export default page;
