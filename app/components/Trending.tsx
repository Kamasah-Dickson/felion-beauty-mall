import Image from "next/image";

import trendingImage from "@/public/assets/Trending.jpg";
const Trending = () => {
	return (
		<section className="trending">
			<h1 className="text-5xl font-bold text-white p-5 md:text-7xl">
				Trending
			</h1>
			<div className="flex gap-10 md:flex-row flex-col items-center justify-between h-full my-max">
				<div className="flex flex-col gap-5">
					<div className="h-32 w-96 bg-red-600"></div>
					<div className="h-32 w-96 bg-red-600"></div>
					<div className="h-32 w-96 bg-red-600"></div>
					<div className="h-32 w-96 bg-red-600"></div>
				</div>
				<div>
					<Image src={trendingImage} height={450} width={450} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Trending;
