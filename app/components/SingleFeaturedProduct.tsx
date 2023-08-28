"use client";
import { products } from "../products";
import Image from "next/image";
import { useContext } from "react";
import { ProductContext } from "../context/appContext";
import { Icart } from "../interface/ProductInterface";
import { Pagination, A11y, Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const SingleFeaturedProduct = ({ category }: { category: string }) => {
	const { addItemToCart, decrementProductCount, cart } =
		useContext(ProductContext);

	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
			}}
			grabCursor
			navigation={{ enabled: products.length > 3 }}
			modules={[Pagination, A11y, Navigation]}
			className="px-5 my-max w-full h-full"
			spaceBetween={25}
			a11y={{
				enabled: true,
				nextSlideMessage: "Next slide",
				prevSlideMessage: "Previous slide",
			}}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				550: {
					slidesPerView: 1.5,
				},
				800: {
					slidesPerView: 2,
				},
				1000: {
					slidesPerView: 2.5,
				},
				1250: {
					slidesPerView: 3,
				},
			}}
		>
			{products
				.filter((product) => {
					if (category === "all") {
						return product;
					} else {
						return product.category === category;
					}
				})
				.map((product) => {
					const cartItem = cart.find(
						(cartItem) => cartItem?.id === product?.id
					) as Icart;
					const numberOfItem = cartItem ? cartItem.numberOfItem : 0;
					return (
						<SwiperSlide
							key={product.id}
							className={`overflow-hidden max-w-2xl shadow-lg ${
								product.new && "relative "
							} text-black mx-auto`}
						>
							{product.new && (
								<div className="absolute top-0 left-0 text-white bg-[crimson] py-2 text-sm rounded-br-3xl  font-black px-8 w-fit">
									New
								</div>
							)}
							<div className="bg-transparent w-full h-80">
								<Image
									alt={product.description}
									src={product.productImage}
									height={300}
									width={300}
									blurDataURL={product.productImage as string}
									className="w-full select-none  h-full object-cover"
								></Image>
							</div>
							<div className=" bg-white py-3 pb-7 px-7 text-left">
								<h5 className="font-black text-3xl mb-3">
									{product.productName}
								</h5>
								<span className="font-normal text-base text-[#494949]">
									{product.description}
								</span>
								<div className="flex mt-3 flex-wrap lg:items-center justify-between gap-5">
									<span className="font-black text-3xl text-[#1b289c]">
										GH{product.price + 80}.00
									</span>
									<button
										onClick={() => addItemToCart(product)}
										className=" relative w-full md:w-fit bg-[black] hover:bg-[#0c0a74] transition-colors text-white font-medium rounded-full text-base  px-3 md:px-5 py-4 md:py-3 active:scale-[1.02]"
										type="button"
									>
										Add To Cart
										{numberOfItem > 0 && (
											<div
												onClick={(e) => (
													e.stopPropagation(), decrementProductCount(product)
												)}
												className={`absolute -top-3 p-3 grid place-content-center font-bold rounded-full w-7 h-7 right-1 ${
													product.new ? "bg-[crimson]" : "bg-[#3a3add]"
												}`}
											>
												{numberOfItem}
											</div>
										)}
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
		</Swiper>
	);
};

export default SingleFeaturedProduct;
