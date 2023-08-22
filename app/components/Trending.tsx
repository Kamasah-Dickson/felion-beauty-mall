import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import trendingImage from "@/public/assets/Trending.jpg";
const Trending = () => {
	return (
		<div className="trending-bg">
			<section className="my-max py-10">
				<h1 className=" w-fit sm:text-5xl text-[36px] mb-5 pt-20 font-bold text-white  md:text-7xl">
					Trending Products
					<div className="after:rounded-full after:top-1/2 after:-translate-y-1/2  after:h-4 after:w-4 after:bg-white after:block after:absolute after:-right-1 rounded-full md:mt-5 sm:mt-6  ml-auto  w-3/4 h-1 bg-white relative md:-right-16"></div>
				</h1>
				<p className="text-base text-white mb-20">
					Explore the newest and trending products in demand
				</p>
				<div className="flex h-full gap-10  md:flex-row flex-col items-center justify-between">
					<div className="my-grid gap-12">
						<div className="bg-white rounded-lg flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto">
							<div className="flex-[2] md:flex-auto overflow-hidden">
								<Image
									className="w-full h-64 object-cover md:h-40 "
									src={trendingImage}
									width={300}
									height={300}
									alt=""
								/>
							</div>
							<div className="px-7 py-5 md:py-0 md:flex-[4]">
								<h3 className="font-bold text-xl mb-3">Accrelic Nails</h3>
								<p className="font-normal mb-5 text-[#535353]">
									But the accrelic nails at an affordable price
								</p>
								<div className="flex flex-col gap-5 md:justify-between md:flex-row">
									<span className="font-bold">GH12.48</span>
									<button
										// onClick={() => addItemToCart(product)}
										className=" relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-3 md:p-1 active:scale-[1.02]"
										type="button"
									>
										<p className="md:hidden">Add To Cart</p>
										<MdAddShoppingCart
											className="hidden md:flex"
											color="white"
											size={23}
										/>

										{/* {numberOfItem > 0 && ( */}
										{/* <div */}
										{/* // onClick={(e) => ( */}
										{/* // 	e.stopPropagation(), decrementProductCount(product) */}
										{/* // )} */}
										{/* // 	className={`absolute md:-top-4 md:-right-2 p-3 aspect-auto w-8 h-8 md:w-5 md:h-5 -top-3 text-xs grid place-content-center font-bold rounded-full  right-1 ${ */}
										{/* // 		"product.new" ? "bg-[crimson]" : "bg-[#3a3add]" */}
										{/* // 	}`} */}
										{/* // > */}
										{/* 10{numberOfItem} */}
										{/* </div> */}
										{/* )} */}
									</button>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto">
							<div className="flex-[2] md:flex-auto overflow-hidden">
								<Image
									className="w-full h-64 object-cover md:h-40 "
									src={trendingImage}
									width={300}
									height={300}
									alt=""
								/>
							</div>
							<div className="px-7 py-5 md:py-0 md:flex-[4]">
								<h3 className="font-bold text-xl mb-3">Accrelic Nails</h3>
								<p className="font-normal mb-5 text-[#535353]">
									But the accrelic nails at an affordable price
								</p>
								<div className="flex flex-col gap-5 md:justify-between md:flex-row">
									<span className="font-bold">GH12.48</span>
									<button
										// onClick={() => addItemToCart(product)}
										className=" relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-3 md:p-1 active:scale-[1.02]"
										type="button"
									>
										<p className="md:hidden">Add To Cart</p>
										<MdAddShoppingCart
											className="hidden md:flex"
											color="white"
											size={23}
										/>

										{/* {numberOfItem > 0 && ( */}
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
										{/* )} */}
									</button>
								</div>
							</div>
						</div>
						<div className="bg-white rounded-lg flex overflow-hidden flex-col md:flex-row md:items-center max-w-[400px] md:max-w-none shadow-md mx-auto">
							<div className="flex-[2] md:flex-auto overflow-hidden">
								<Image
									className="w-full h-64 object-cover md:h-40 "
									src={trendingImage}
									width={300}
									height={300}
									alt=""
								/>
							</div>
							<div className="px-7 py-5 md:py-0 md:flex-[4]">
								<h3 className="font-bold text-xl mb-3">Accrelic Nails</h3>
								<p className="font-normal mb-5 text-[#535353]">
									But the accrelic nails at an affordable price
								</p>
								<div className="flex flex-col gap-5 md:justify-between md:flex-row">
									<span className="font-bold">GH12.48</span>
									<button
										// onClick={() => addItemToCart(product)}
										className=" relative bg-[black]  md:hover:bg-none hover:bg-[#0c0a74] transition-colors text-white font-medium md:rounded-md rounded-full text-base p-3 md:p-1 active:scale-[1.02]"
										type="button"
									>
										<p className="md:hidden">Add To Cart</p>
										<MdAddShoppingCart
											className="hidden md:flex"
											color="white"
											size={23}
										/>

										{/* {numberOfItem > 0 && ( */}
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
										{/* )} */}
									</button>
								</div>
							</div>
						</div>

						{/* <div className="bg-white flex  items-center justify-center">
							<div className="">
								<Image
									className=" object-cover h-40"
									src={trendingImage}
									width={200}
									height={200}
									alt=""
								/>
							</div>
							<div className="px-5">
								<h3>Accrelic Nails</h3>
								<p>But the accrelic nails at an affordable price</p>
								<span>GH12.48</span>
							</div>
						</div>
						<div className="bg-white flex  items-center justify-center">
							<div className="">
								<Image
									className=" object-cover h-40"
									src={trendingImage}
									width={200}
									height={200}
									alt=""
								/>
							</div>
							<div className="px-5">
								<h3>Accrelic Nails</h3>
								<p>But the accrelic nails at an affordable price</p>
								<span>GH12.48</span>
							</div>
						</div> */}
					</div>
					<div className="trending-bg-small">
						<div></div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Trending;
