import HeroSection from "./components/HeroSection";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import trendingImage from "@/public/assets/Trending.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Welcome to Felion Beauty Mall",
	description:
		"Explore and shop from the most quality and trusted cosmetic shop in Ghana",
};

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="trending-bg">
				<section className="my-max py-10">
					<h6 className=" w-fit sm:text-5xl text-[36px] mb-5 pt-20 font-bold text-white  md:text-7xl">
						Trending Products
						<div className="after:rounded-full after:top-1/2 after:-translate-y-1/2  after:h-4 after:w-4 after:bg-white after:block after:absolute after:-right-1 rounded-full md:mt-5 sm:mt-6  ml-auto  w-3/4 h-1 bg-white relative"></div>
					</h6>
					<p className=" max-w-md text-base text-white mb-20">
						Explore the newest and trending products in demand. The more you
						buy, the more you get gifted
					</p>
					<div className="flex h-full gap-10  md:flex-row flex-col items-center justify-between">
						<div className="my-grid gap-12">
							<div className="bg-white w-full rounded-2xl md:rounded-none flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto">
								<div className="flex-[2] md:flex-auto overflow-hidden">
									<Image
										className="w-full h-64 object-cover md:h-40 "
										src={trendingImage}
										width={384}
										height={576}
										alt=""
									/>
								</div>
								<div className="px-7 py-5 md:py-0 md:flex-[4]">
									<h6 className="font-bold text-xl my-3">Accrelic Nails</h6>
									<p className="font-normal mb-3 text-[#535353]">
										But the accrelic nails at an affordable price
									</p>
									<div className="flex flex-col mb-3 gap-5 md:justify-between md:flex-row">
										<span className="font-bold  text-lg">GH12.48</span>
										<button
											// onClick={() => addItemToCart(product)}
											className="md:hidden p-3 relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base active:scale-[1.02]"
											type="button"
										>
											Add To Cart
										</button>
										<button
											aria-label="add to cart"
											// onClick={() => addItemToCart(product)}
											className="hidden md:flex relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-[6px] active:scale-[1.02]"
											type="button"
										>
											<MdAddShoppingCart
												className=" "
												color="white"
												size={20}
											/>
										</button>
									</div>
								</div>
							</div>
							<div className="bg-white w-full rounded-2xl md:rounded-none flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto">
								<div className="flex-[2] md:flex-auto overflow-hidden">
									<Image
										className="w-full h-64 object-cover md:h-40 "
										src={trendingImage}
										width={384}
										height={576}
										alt=""
									/>
								</div>
								<div className="px-7 py-5 md:py-0 md:flex-[4]">
									<h6 className="font-bold text-xl my-3">Accrelic Nails</h6>
									<p className="font-normal mb-3 text-[#535353]">
										Buy the accrelic nails at an affordable price
									</p>
									<div className="flex flex-col mb-3 gap-5 md:justify-between md:flex-row">
										<span className="font-bold  text-lg">GH12.48</span>
										<button
											// onClick={() => addItemToCart(product)}
											className="md:hidden p-3 relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base active:scale-[1.02]"
											type="button"
										>
											Add To Cart
										</button>
										<button
											aria-label="add to cart"
											// onClick={() => addItemToCart(product)}
											className="hidden md:flex relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-[6px] active:scale-[1.02]"
											type="button"
										>
											<MdAddShoppingCart
												className=" "
												color="white"
												size={20}
											/>
										</button>
									</div>
								</div>
							</div>
							<div className="bg-white w-full rounded-2xl md:rounded-none flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto">
								<div className="flex-[2] md:flex-auto overflow-hidden">
									<Image
										className="w-full h-64 object-cover md:h-40 "
										src={trendingImage}
										width={384}
										height={576}
										alt=""
									/>
								</div>
								<div className="px-7 py-5 md:py-0 md:flex-[4]">
									<h6 className="font-bold text-xl my-3">Accrelic Nails</h6>
									<p className="font-normal mb-3 text-[#535353]">
										But the accrelic nails at an affordable price
									</p>
									<div className="flex flex-col mb-3 gap-5 md:justify-between md:flex-row">
										<span className="font-bold  text-lg">GH12.48</span>
										<button
											// onClick={() => addItemToCart(product)}
											className="md:hidden p-3 relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base active:scale-[1.02]"
											type="button"
										>
											Add To Cart
										</button>
										<button
											aria-label="add to cart"
											// onClick={() => addItemToCart(product)}
											className="hidden md:flex  bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-[6px] active:scale-[1.02] relative"
											type="button"
										>
											<MdAddShoppingCart
												className=" "
												color="white"
												size={20}
											/>
											<div
												// onClick={(e) => (
												// 	e.stopPropagation(), decrementProductCount(product)
												// )}
												className={`absolute md:-top-4 md:-right-2 p-3 aspect-auto w-8 h-8 md:w-5 md:h-5 -top-3 text-xs grid place-content-center font-bold rounded-full  right-1 ${
													"product.new" ? "bg-[crimson]" : "bg-[#3a3add]"
												}`}
											>
												10{/* {numberOfItem} */}
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="trending-bg-small relative">
							<p className="text-white font-medium absolute top-5 left-5">
								Explore top quality products from Felion.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
