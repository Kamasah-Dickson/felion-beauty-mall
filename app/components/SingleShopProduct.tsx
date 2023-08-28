"use client";
import { useState } from "react";
import { products } from "../products";
import Image from "next/image";
import { Icart, Iproducts } from "../interface/ProductInterface";

interface IshopProduct {
	cart: Iproducts[];
	category: string;
	addItemToCart: (productItem: Iproducts) => void;
	decrementProductCount: (targetProductItem: Iproducts) => void;
}

const SingleShopProduct = ({
	category,
	addItemToCart,
	cart,
	decrementProductCount,
}: IshopProduct) => {
	const [productLength, setProductLength] = useState(6);
	return (
		<div>
			<div className="grid grid-cols-1 gap-7 lg:grid-cols-3 md:grid-cols-2">
				{products
					.filter((product) => {
						if (category === "all") {
							return product;
						} else {
							return product.category === category;
						}
					})
					.slice(0, productLength)
					.map((product) => {
						const cartItem = cart.find(
							(cartItem: Iproducts) => cartItem?.id === product?.id
						) as Icart;
						const numberOfItem = cartItem ? cartItem.numberOfItem : 0;
						return (
							<div
								key={product.id}
								className={`overflow-hidden shadow-lg ${
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
							</div>
						);
					})}
			</div>
			{category !== "all" && (
				<button
					onClick={() => setProductLength((prev) => prev + 6)}
					className=" relative block mt-7 mx-auto md:w-fit bg-[black] hover:bg-[#15144b] transition-colors text-white font-medium rounded-full text-base  px-3 md:px-5 py-4 md:py-3 active:scale-[1.02]"
				>
					More {category}
				</button>
			)}
		</div>
	);
};

export default SingleShopProduct;
